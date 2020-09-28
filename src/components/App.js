import React from "react";
import { Switch, Route } from "react-router";

import TopBar from "./TopBar";
import Menu from "./Menu";
import NotesContainer from "./NotesContainer";
import RemovedNotes from "./RemovedNotes";
import NoteCreate from "./NoteCreate";
import Settings from "./Settings";
import "../css/base.css";

function App() {
  return (
    <div className="app-container">
      <TopBar />
      <Switch>
        <Route path="/deleted" component={RemovedNotes} />
        <Route path="/" component={NotesContainer} />
      </Switch>
      <NoteCreate component={NoteCreate} />
      <Settings component={Settings} />
      <Menu />
    </div>
  );
}

export default App;
