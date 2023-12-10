import React, { useState } from "react";

function Notes(props) {
  const [noteContent, setNoteContent] = useState("");

  const handleNoteChange = (e) => {
    setNoteContent(e.target.innerHTML);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#F1C75B",
          color: "black",
          height: "95%",
          width: "50vh",
          borderRadius: "20px",
          overflow: "auto",
          margin: "10px",
        }}
      >
        <h2 style={{ padding: "10px 20px" }}>All notes</h2>
        <div
          contentEditable={true}
          onInput={handleNoteChange}
          style={{
            maxHeight: "40vh",
            padding: "10px",
            outline: "none",
          }}
          dangerouslySetInnerHTML={{ __html: noteContent }}
        ></div>
      </div>
    </>
  );
}

export default Notes;
