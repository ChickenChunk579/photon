import "./App.css";
import StatusBar from "./components/StatusBar";
import CodeEditor from "./components/CodeEditor";
import FileBrowser from "./components/FileBrowser";

function App() {
  return (
    <div>
      <div className="viewport">
        <FileBrowser />
        <CodeEditor />
      </div>

      <StatusBar />
    </div>
  );
}

export default App;
