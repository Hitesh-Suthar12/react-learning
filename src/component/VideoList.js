// import values from "../Data/values";
import React from 'react';
import PlayButton from "./PlayButton";
import Props from "./Props";

export default function VideoList({ values }) {
  return (
    <>
      {values.map((value) => (
        <Props
          key={value.id}
          Title={value.Title}
          views={value.views}
          time={value.time}
          Channel={value.Channel}
          varified={value.varified}
          id={value.id}
        >
          <PlayButton
            onPlay={() => console.log("Play.. ", value.Title)}
            onPause={() => console.log("Pause.. ", value.Title)}
          ></PlayButton>
        </Props>
      ))}
    </>
  );
}
