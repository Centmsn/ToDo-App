import { combineReducers } from "redux";

import notesReducer from "./notesReducer";
import createNoteVisibilityReducer from "./createNoteVisibilityReducer";
import settingsVisibility from "./settingsVisibilityReducer";

export default combineReducers({
  notes: notesReducer,
  notesMenu: createNoteVisibilityReducer,
  settings: settingsVisibility,
});
