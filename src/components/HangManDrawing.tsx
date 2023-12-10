import React from "react";

const HEAD = (
  <div
    key="head-part"
    style={{
      height: "50px",
      width: "50px",
      borderRadius: "100%",
      position: "absolute",
      top: "59px",
      right: "-30px",
      border: "10px solid black",
    }}
  />
);
const BODY = (
  <div
    key="body-part"
    style={{
      height: "100px",
      width: "10px",
      position: "absolute",
      top: "128px",
      right: "0px",
      backgroundColor: "black",
    }}
  />
);
const LEFT_HAND = (
  <div
    key="lef-hand-part"
    style={{
      height: "10px",
      width: "70px",
      position: "absolute",
      top: "150px",
      right: "-70px",
      backgroundColor: "black",
      rotate: "-30deg",
      transformOrigin: "bottom left",
    }}
  />
);
const RIGHT_HAND = (
  <div
    key="right-hand-part"
    style={{
      height: "10px",
      width: "70px",
      position: "absolute",
      top: "150px",
      right: "10px",
      backgroundColor: "black",
      rotate: "30deg",
      transformOrigin: "bottom right",
    }}
  />
);
const RIGHT_LEG = (
  <div
    key="right-leg-part"
    style={{
      height: "10px",
      width: "70px",
      position: "absolute",
      top: "220px",
      right: "10px",
      backgroundColor: "black",
      rotate: "-60deg",
      transformOrigin: "top right",
    }}
  />
);
const LEFT_LEG = (
  <div
    key="left-leg-part"
    style={{
      height: "10px",
      width: "70px",
      position: "absolute",
      top: "220px",
      right: "-70px",
      backgroundColor: "black",
      rotate: "60deg",
      transformOrigin: "top left",
    }}
  />
);

type HangManDrawingProps = {
  incorrectGuesses: number;
};

function HangManDrawing({ incorrectGuesses }: HangManDrawingProps) {
  const BODY_PARTS = [HEAD, BODY, RIGHT_HAND, LEFT_HAND, RIGHT_LEG, LEFT_LEG];
  return (
    <div
      style={{
        position: "relative",
        height: "360px",
        width: "250px",
      }}
    >
      {BODY_PARTS.splice(0, incorrectGuesses)}
      <div
        style={{
          width: "10px",
          height: "350px",
          backgroundColor: "black",
          position: "absolute",
          top: "0px",
          left: "90px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "150px",
          position: "absolute",
          right: 0,
          backgroundColor: "black",
        }}
      />
      <div
        style={{
          height: "50px",
          width: "10px",
          position: "absolute",
          top: "10px",
          right: "0px",
          backgroundColor: "black",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          backgroundColor: "black",
          position: "absolute",
          top: "350px",
        }}
      />
    </div>
  );
}

export default HangManDrawing;
