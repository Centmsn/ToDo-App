import React from "react";

import "../css/note.css";

const Note = () => {
  return (
    <div className="note">
      <div className="note__top-bar">
        <div className="note__date">16-08-2020</div>
        <div className="note__delete">X</div>
      </div>
      <div className="note__body">
        <div className="note__title">title example</div>
        <div className="note__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio velit
          quis magni molestiae laudantium dignissimos ipsam in, temporibus
          soluta, delectus ea earum asperiores nam ex inventore voluptate,
          consectetur atque expedita!
        </div>
      </div>
    </div>
  );
};

export default Note;
