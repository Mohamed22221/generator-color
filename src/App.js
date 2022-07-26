import { Container } from "@mui/material";
import { useState ,useEffect } from "react";
import Values from "values.js";
import "./App.scss"
import SingleColor from "./components/SingleColor";
function App() {
  const [color, setColor] = useState("#8080ff")
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  useEffect(() => {
    const colors = new Values(color).all(10)
    setList(colors)
  }, [])
  
  // handel color and error
  const HandelSubmitColor = (e) => {
    e.preventDefault()

    try {
      const colors = new Values(color).all(10)
      setList(colors)
      setError(false)
      setColor("")
      console.log(colors)
    } catch (error) {
      setError(true)

    }
  }


  return (
    <>
      <Container maxWidth="xl">
        <div className="input-generator">
          <h1>Color generator</h1>
          <form onSubmit={HandelSubmitColor}>
            <input type="text" placeholder="#FFF" className={error === true ? "error" : null} value={color} onChange={(e) => setColor(e.target.value)} />
            <button>generate</button>
          </form>
        </div>
        <div className="colors">
          <h2>Color List</h2>
          <div className="flex-color">
          {list.map((item , index) =>{
            return <SingleColor item={item} key={index} index={index} />
          })}
          </div>
        </div>

      </Container>
    </>

  );
}

export default App;
