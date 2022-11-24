import React, { useState } from 'react'
import memesData from "../memeData.js"

function Meme() {
  const [memeImage, setMemeImage] = useState("")

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Text" />
        <input className="form--input" type="text" placeholder="Text" />
        <button onClick={getMemeImage} type="submit" className="form--button">Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeImage} type="submit" className="meme--img"  />
      </div>
    </main>
  );
}

export default Meme