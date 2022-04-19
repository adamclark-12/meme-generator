import React from "react"
import memesData from "../memesData"



export default function Meme(){

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1otk96.jpg"
    }) // deconstructed state [name, set funcition] useState(initial value)
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData) //state for the images
    
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes // store just the memes from the data in a variable
        const randomNumber = Math.floor(Math.random() * memesArray.length) //aquire a random number from the amount of memes we have 
        const url = memesArray[randomNumber].url //save the random meme url to a variable for ease in the setMemeImage
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }) ) // set the memeImage by getting the previous meme and changing it with the new meme from the URL variable
    
    
    }

    function handleChange(event){
        const {name, value} = event.target
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            
            
              <div className="meme">
                <img src={memeImage.randomImage} className="meme--image" />
                {/*when the button is clicked this image state will be updated with the new meme found from 
              getMemeImage() and the state will be update to a new meme everytime the button is clicked */}
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>

        </main>
    
        )
    }