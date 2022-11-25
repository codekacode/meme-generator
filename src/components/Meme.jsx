import React, { useState } from 'react'
import memesData from "../memeData.js"

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeData, setAllMeme] = useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url;
    setMeme(prevValue => ({
      ...prevValue,
      randomImage: url
    }));
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Text" />
        <input className="form--input" type="text" placeholder="Text" />
        <button onClick={getMemeImage} type="submit" className="form--button">Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} type="submit" className="meme--img"  />
      </div>
    </main>
  );
}

export default Meme