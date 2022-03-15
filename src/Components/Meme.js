import React from "react"
import memesData from "../memesData"



export default function Meme(){

    const [memeImage, setMemeImage] = React.useState("") // deconstructed state [name, set funcition] useState(initial value)
    
    function getMemeImage(){
        const memesArray = memesData.data.memes // store just the memes from the data in a variable
        const randomNumber = Math.floor(Math.random() * memesArray.length) //aquire a random number from the amount of memes we have 
        setMemeImage(memesArray[randomNumber].url) // use the state set function to set the image using the meme chosen at random from above
    }

    return(
        <main>
            <div className="form">
                <input
                    className="form--input"
                    type="text"
                    placeholder="Top text"
                />
                <input type="text" 
                    className="form--input"
                    type="text"
                    placeholder="Bottom text"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get meme image
                </button>
            </div>
            <img className="meme--image" src={memeImage}/> 
            {/*when the button is clicked this image state will be updated with the new meme found from 
              getMemeImage() and the state will be update to a new meme everytime the button is clicked */}
        </main>
    )
}