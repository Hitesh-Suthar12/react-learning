import "../CSS/AddVideo.css";
import { useState } from "react";

const initialState = {
  Title: "",
  views: "",
  Channel: "My Channel",
  time: "1 year ago",
  varified: true,
};

function AddVideo({ addNewValue }) {
  const [Video, setVideo] = useState(initialState);

  function handleChange(e) {
    setVideo({ ...Video, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewValue(Video); // Pass Video instead of values
    console.log(Video);
    setVideo(initialState);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="Title"
          placeholder="Title"
          value={Video.Title}
        />
        <input
          onChange={handleChange}
          type="text"
          name="views"
          placeholder="views"
          value={Video.views}
        />
        <button>Add Video</button>
      </form>
    </>
  );
}

export default AddVideo;
