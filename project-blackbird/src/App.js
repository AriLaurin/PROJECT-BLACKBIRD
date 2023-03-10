import Home from "./Home"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from "./NotFound";

function App() {

  return (
    <Router>
    <div className="App">
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
