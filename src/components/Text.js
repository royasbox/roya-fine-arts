import React from 'react';
import '../pages/style.css';
import Typewriter from "typewriter-effect";

const Text = () => (
  <Typewriter
    options={{
      strings: ["An Artist Designer Creative", "A Painter and UX Designer"],
      autoStart: true,
      loop: true,
      deleteSpeed: 50
    }}
  />
);

export default Text;
