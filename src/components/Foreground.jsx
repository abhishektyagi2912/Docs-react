import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".4mb",
      close: true,
      tag: { isOpened: false, text: "Download Now", color: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".4mb",
      close: false,
      tag: { isOpened: true, text: "Download Now", color: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".4mb",
      close: false,
      tag: { isOpened: true, text: "Download Now", color: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".4mb",
      close: false,
      tag: { isOpened: true, text: "Download Now", color: "blue" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap">
      {data.map((item, index) => (
        <Card data={item} refrence ={ref} />
      ))}
    </div>
  );
}

export default Foreground;
