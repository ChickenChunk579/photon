import './styles/FileBrowser.scss';
import { enqueueSnackbar } from 'notistack';
import { invoke } from '@tauri-apps/api/tauri'

function FileBrowser() {
    

    return ( <div className="fileBrowser">
        <p className="fileBrowserItem">File Browser</p>
        <button className="fileBrowserItem" onClick={() => enqueueSnackbar('hi')}>Show snackbar</button>
        <button onClick={() => invoke("list_files_in_directory", { dirPath: '/bin' })} />
    </div> )
}

export default FileBrowser;