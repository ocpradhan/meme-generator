import React, { useState } from "react";
import memesData from "../../memesData";

/**
 * Challenge:
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */

/**
 * Challenge: Get a random image from the `memesData` array
 * when the "new meme image" button is clicked.
 *
 * Log the URL of the image to the console. (Don't worry
 * about displaying the image yet)
 */

/**
 * Challenge: Save the random meme URL in state
 * - Create new state called `memeImage` with an
 *   empty string as default
 * - When the getMemeImage function is called, update
 *   the `memeImage` state to be the random chosen
 *   image URL
 * - Below the div.form, add an <img /> and set the
 *   src to the new `memeImage` state you created
 */

/**
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way.
 */

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState(
  //   "http://i.imgflip.com/1bij.jpg"
  // );

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    const topText = meme.topText;
    const bottomText = meme.bottomText;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  return (
    <div className="form">
      <input
        className="form--input"
        type="text"
        placeholder="Top Text"
        onChange={(e) =>
          setMeme((prevMeme) => {
            return { ...prevMeme, topText: e.target.value };
          })
        }
      />
      <input
        className="form--input"
        type="text"
        placeholder="Bottom Text"
        onChange={(e) =>
          setMeme((prevMeme) => {
            return { ...prevMeme, bottomText: e.target.value };
          })
        }
      />
      <button onClick={getMemeImage} className="form--btn">
        Get a new meme image 👨‍💻
      </button>
      <img src={meme.randomImage} alt="Meme" className="form--img" />
    </div>
  );
}
