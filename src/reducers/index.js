import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

import createNoteVisibilityReducer from "./createNoteVisibilityReducer";
import notesReducer from "./notesReducer";
import settingsReducer from "./settingsReducer";
import settingsVisibility from "./settingsVisibilityReducer";
import noteIdReducer from "./noteIdReducer";
import removedNotesReducer from "./removedNotesReducer";
import doneNotesReducer from "./doneNotesReducer";

export default combineReducers({
  notesList: notesReducer,
  settingsList: settingsReducer,
  notesMenu: createNoteVisibilityReducer,
  settings: settingsVisibility,
  removedNotes: removedNotesReducer,
  doneNotes: doneNotesReducer,
  id: noteIdReducer,

  form: FormReducer,
});
