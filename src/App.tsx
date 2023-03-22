import "./App.css";
import StatusBar from "./components/StatusBar";
import CodeEditor from "./components/CodeEditor";
import FileBrowser from "./components/FileBrowser";
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div>
      <SnackbarProvider />
      <FileBrowser />
      <CodeEditor />


      <StatusBar />
    </div>
  );
}

export default App;
