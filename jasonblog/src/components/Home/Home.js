import { Link } from "react-router-dom"

const useStyle = () => {
    return {
        buttonBox: {
            "display" : "flex",
            "justify-content" : "center",
        },
        pixelButton: {
            marginTop : "20vw",
            "background-color" : "white",
            "font-family" : "VT323",
            "font-size" : "20px",
            "color" : "green",
            "height" : "30px",
            "width" : "10%",
            "border-radius" : "5px", 
            "text-align": "center"
        }
    }
}

const Home = () => {
    const homeStyle = useStyle()

    return (
        <div style={homeStyle.buttonBox} >
            <Link to={`/about`} style={homeStyle.pixelButton} ><p>More About Me?</p></Link>
        </div>
    )
}

export default Home