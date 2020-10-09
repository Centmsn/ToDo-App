import React from "react";
import { Switch, Route } from "react-router";

import Menu from "./Menu";
import NoteEdit from "./NoteEdit";
import NotesContainer from "./NotesContainer";
import NoteCreate from "./NoteCreate";
import RemovedNotes from "./RemovedNotes";
import Settings from "./Settings";
import TopBar from "./TopBar";

import "../css/base.css";

const App = () => {
  return (
    <div className="app-container">
      <TopBar />
      <Switch>
        <Route path="/deleted" component={RemovedNotes} />
        <Route path="/" component={NotesContainer} />
      </Switch>
      <NoteCreate component={NoteCreate} />
      <Settings component={Settings} />
      <NoteEdit component={NoteEdit} />
      <Menu />
    </div>
  );
};

export default App;
