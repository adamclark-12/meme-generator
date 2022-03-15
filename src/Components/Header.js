import headerTest from "../images/headerTest.png"


export default function Header(){
    return(
    <header className="header">
        <img 
            className="header--image"
            src={headerTest}
        />
        <h1 className="header--title">React Meme Generator</h1>
    </header>
    )
}