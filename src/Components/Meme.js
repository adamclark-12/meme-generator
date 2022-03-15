import React from "react"
import memesData from "../memesData"



export default function Meme(){

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1otk96.jpg"
    }) // deconstructed state [name, set funcition] useState(initial value)
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes // store just the memes from the data in a variable
        const randomNumber = Math.floor(Math.random() * memesArray.length) //aquire a random number from the amount of memes we have 
        const url = memesArray[randomNumber].url //save the random meme url to a variable for ease in the setMemeImage
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }) ) // set the memeImage by getting the previous meme and changing it with the new meme from the URL variable
    
    
    }

    return(
        <main>
            <div className="form">
                <input
                    className="form--input"
                    type="text"
                    placeholder="Top text"
                    topText={memeImage.topText}
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
            <img className="meme--image" src={memeImage.randomImage}/> 
            {/*when the button is clicked this image state will be updated with the new meme found from 
              getMemeImage() and the state will be update to a new meme everytime the button is clicked */}
        </main>
    )
}