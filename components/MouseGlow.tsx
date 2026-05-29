"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {

  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {

    function handleMove(e: MouseEvent) {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    }

    window.addEventListener(
      "mousemove",
      handleMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMove
      );

  }, []);

  return (
    <div
      className="glow"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}