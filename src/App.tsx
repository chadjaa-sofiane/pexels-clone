import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="background"></div>
      </Router>
    </div>
  );
}

export default App;
