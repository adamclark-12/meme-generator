import React from "react"

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1otk96.jpg"
    }) // deconstructed state [name, set funcition] useState(initial value)
    
    const [allMemes, setAllMemes] = React.useState([]) //state for the images

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    
    function getMeme(){
        const randomNumber = Math.floor(Math.random() * allMemes.length) //aquire a random number from the amount of memes we have 
        const url = allMemes[randomNumber].url //save the random meme url to a variable for ease in the setMemeImage
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }) ) // set the memeImage by getting the previous meme and changing it with the new meme from the URL variable
    
    
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
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
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMeme}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            
            
              <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                {/*when the button is clicked this image state will be updated with the new meme found from 
              getMemeImage() and the state will be update to a new meme everytime the button is clicked */}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    
        )
    }