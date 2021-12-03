import { combineReducers } from "redux";
import modeSettings from "./modeSettings";
import selectedLogs from "./selectedLogs";
import logs from "./logs";
import result from "./result";
import carousel from "./carousel"
import isSwitchEnabled from "./isSwitchEnabled"

export default combineReducers({
    modeSettings,
    selectedLogs,
    logs,
    result,
    carousel,
    isSwitchEnabled
})