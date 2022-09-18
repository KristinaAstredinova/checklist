import './App.css';
import { Check } from './check';
import image from "./girl.png"


function App() {
  return (
    
    <div className='app'>
     <div className='containerao'>
        <img src={image} width = "110px" alt="shopping"/>
       
        </div>
        
        <div className='container'>
        <h1>Список дел</h1>
        </div>
        <Check/>
    </div>
  );
}

export default App;
