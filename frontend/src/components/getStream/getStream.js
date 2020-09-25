import React, { useEffect, useState, useRef } from "react";

function GetStream() {
  const [stream, setStream] = useState();

  const userVideo = useRef();
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      });
  }, []);

  let UserVideo;
  if (stream) {
    UserVideo = (
      <video
        width={500}
        height={500}
        playsInline
        muted
        ref={userVideo}
        autoPlay
      />
    );
  }
  return <div>{UserVideo}</div>;
}

export default GetStream;
