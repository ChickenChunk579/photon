import './styles/FileBrowser.scss';
import { enqueueSnackbar } from 'notistack';

function FileBrowser() {
    return ( <div className="fileBrowser">
        <p className="fileBrowserItem">File Browser</p>
        <button className="fileBrowserItem" onClick={() => enqueueSnackbar<"error">('hi')}>Show snackbar</button>
    </div> )
}

export default FileBrowser;