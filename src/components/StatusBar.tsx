import './styles/StatusBar.scss';
import i18n from "i18next";

import translationEN from "../lang/en.json";

const resources = {
    en: {
        translation: translationEN
    }
};

function StatusBar() {
    i18n.init({
        resources,
        lng: "en",
        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

    

    return <div className="statusBar">
        <p className="statusBarItem">Photon Code Editor v1.0</p>
        <p className='statusBarItem'>                </p>
        <p className='statusBarItem'>{i18n.t("statusbar.language.javascript")}</p>
    </div>
}

export default StatusBar;