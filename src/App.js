import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import AiSalon from './Pages/AiSalon';
import Olo from './Pages/Olo';

function App() {
  return (
    <Router>
       <div className="App">
       <Routes>
        <Route path='/ai-salon' element={<AiSalon/>} ></Route>
        <Route path='/olo' element={<Olo/>} ></Route>
       </Routes>
    </div>
    </Router>
  );
}

export default App;
