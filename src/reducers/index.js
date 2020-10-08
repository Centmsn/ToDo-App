import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

import createNoteVisibilityReducer from "./createNoteVisibilityReducer";
import doneNotesReducer from "./doneNotesReducer";
import editNoteVisibilityReducer from "./editNoteVisibilityReducer";
import notesReducer from "./notesReducer";
import noteIdReducer from "./noteIdReducer";
import removedNotesReducer from "./removedNotesReducer";
import settingsReducer from "./settingsReducer";
import settingsVisibility from "./settingsVisibilityReducer";

export default combineReducers({
  editList: editNoteVisibilityReducer,
  doneNotes: doneNotesReducer,
  id: noteIdReducer,
  notesList: notesReducer,
  notesMenu: createNoteVisibilityReducer,
  removedNotes: removedNotesReducer,
  settingsList: settingsReducer,
  settings: settingsVisibility,

  form: FormReducer,
});
