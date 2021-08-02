import { useState } from "react";
import { firestore } from "./firebase";

function Create(props) {
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");

  return (
    <div>
      <input
        id="title"
        onChange={(e) => {
          setTitle(e.currentTarget.value);
        }}
        placeholder="Title"
      ></input>
      <input
        id="body"
        onChange={(e) => {
          setBody(e.currentTarget.value);
        }}
        placeholder="body"
      ></input>
      <button
        onClick={() => {
          firestore.collection("blogs").add({ uid: props.uid, title: title, body: body });
        }}
      >
        Post
      </button>
    </div>
  );
}

export default Create;
