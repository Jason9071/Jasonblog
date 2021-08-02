import { Link } from "react-router-dom"

const useStyle = () => {
    return {
        buttonBox: {
            "display" : "flex",
            "justify-content" : "center",
        },
        pixelButton: {
            marginTop : "20px",
            "font-family" : "VT323",
            "font-size" : "20px",
            "color" : "green",
            "height" : "30px",
            "width" : "10%",
            "border-radius" : "5px", 
            "text-align": "center",
            "opacity":1,
            "transition": "width 0.5s, height 0.5s, opacity 0.5s 0.5s"
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