import { useEffect, useState } from "react";
import Display from "./Display";
import Drum from "./Drum";

const App = () => {
  const [audioName, setAudioName] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      let audioObj = audioFiles.find(
        (file) => file.key === e.key.toUpperCase()
      );
      if (audioObj) {
        playAudio(audioObj.name, audioObj.key.toUpperCase());
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const audioFiles = [
    {
      name: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      key: "Q",
    },
    {
      name: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      key: "W",
    },
    {
      name: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      key: "E",
    },
    {
      name: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      key: "A",
    },
    {
      name: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      key: "S",
    },
    {
      name: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      key: "D",
    },
    {
      name: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      key: "Z",
    },
    {
      name: "Kick_n_Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      key: "X",
    },
    {
      name: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      key: "C",
    },
  ];

  const playAudio = (name, keyTrigger) => {
    const audio = document.getElementById(keyTrigger);
    audio.currentTime = 0;
    audio.play();
    setAudioName(name);
  };

  return (
    <>
      <h1>Drum Machine</h1>
      <h2>Click or press keyboard to play</h2>
      <div className="outer-box">
        <Drum audioFiles={audioFiles} handleClick={playAudio} />
        <Display audioName={audioName} />
      </div>
      <p className="author">Created By Prashant Thapa</p>
    </>
  );
};

export default App;
