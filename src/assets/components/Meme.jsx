import React from "react";
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
export default function Meme() {
  const getMemeImage = () => {
    const memes = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memes.length);

    console.log(memes[randomIndex].url);
  };

  return (
    <div className="form">
      <input className="form--input" type="text" placeholder="Top Text" />
      <input className="form--input" type="text" placeholder="Bottom Text" />
      <button onClick={getMemeImage} className="form--btn">
        Get a new meme image 👨‍💻
      </button>
    </div>
  );
}
