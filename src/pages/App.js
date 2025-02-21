import MainMessageComponent from "../components/MainMessageComponent/MainMessageComponent"
import NavComponent from "../components/NavComponent/NavComponent"
import SliderComponent from "../components/SliderComponent/SliderComponent"
import "./App.css"

function App() {
    return (
        <div>
           <NavComponent/>
           <SliderComponent/>
           <MainMessageComponent/>
        </div>
    )
}

export default App