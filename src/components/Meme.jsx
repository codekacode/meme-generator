import React, { useState } from 'react'
import memesData from "../memeData.js"

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
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
        <button onClick={getMemeImage} type="submit" className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} type="submit" className="meme--img" />
        <h2 className="meme--text top">One does not simply</h2>
        <h2 className="meme--text bottom">Walk into Mordo</h2>
      </div>
    </main>
  );
}

export default Meme