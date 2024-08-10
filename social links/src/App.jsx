import './App.css'
import Image from './assets/avatar-jessica.jpeg'
import Selections from './selections/selections'
function App() {

  return (
    <div id='container'>
        <div className="image">
            <img src={Image} />
        </div>

        <div className="name">
            <h4>Jessica Randall</h4>
            <p>London, United Kingdom</p>
        </div>

        <div className="about">
            <p>&quot;Front-end developer and avid reader.&quot;</p>
        </div>

        <div className="social">
            <Selections></Selections>
        </div>
    </div>
    
  )
}

export default App
