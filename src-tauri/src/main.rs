// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs;

fn get_files_in_directory(dir_path: &str) -> Result<Vec<String>, String> {
    let dir_entries = fs::read_dir(dir_path)
        .map_err(|e| format!("Failed to read directory: {}", e))?;

    let files: Vec<String> = dir_entries
        .filter_map(|entry| {
            let path = entry.ok()?.path();
            if path.is_file() {
                Some(path.to_string_lossy().into_owned())
            } else {
                None
            }
        })
        .collect();

    Ok(files)
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

#[derive(Default)]
struct MyState {
  s: std::sync::Mutex<String>,
  t: std::sync::Mutex<std::collections::HashMap<String, String>>,
}
// remember to call `.manage(MyState::default())`
#[tauri::command]
fn list_files_in_directory(dir_path: String) -> Result<Vec<String>, String> {
    let result = get_files_in_directory(&dir_path);
    let files_str = match result {
        Ok(files) => files.join(", "),
        Err(error) => format!("Error: {}", error),
    };
    println!("{}", files_str);

    return get_files_in_directory(&dir_path);
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![list_files_in_directory])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
