import React, { useState, useEffect } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([])

  function handleMemeText(event) {
    const {value, name} = event.target
    setMeme(prevData => {
      return {
        ...prevData,
        [name]: value 
      }
    })
  }

  function getMemeImage() {
    const memesArray = allMemeImages;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url;
    setMeme(prevValue => ({
      ...prevValue,
      randomImage: url
    }));
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes))
  }, [])

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Text"
          name="topText"
          value={meme.topText}
          onChange={handleMemeText}
        />
        <input
          className="form--input"
          type="text"
          placeholder="Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleMemeText}
        />
        <button onClick={getMemeImage} type="submit" className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} type="submit" className="meme--img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme