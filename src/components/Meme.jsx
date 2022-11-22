import React from 'react'
import memesData from "../memeData.js"

function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url;
    console.log(url);
  }

  return (
    <main>
      <form className="form">
        <input className="form--input" type="text" placeholder="Text" />
        <input className="form--input" type="text" placeholder="Text" />
        <button onClick={getMemeImage} type="submit" className="form--button">Get a new meme image 🖼</button>
      </form>
      <div className="meme"></div>
    </main>
  );
}

export default Meme