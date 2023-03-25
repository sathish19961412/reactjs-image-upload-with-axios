import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Fileupload from "./Fileupload";
function App() {
  return (
    <div className="App">
        <div className="d-flex justify-content-center mt-3">
           <h2><span className="text-info">React</span>+ <span className="text-primary">Node.js</span> Image Upload</h2>
        </div> 
        <div className="d-flex justify-content-center mt-3">
           <Fileupload />
        </div> 
    </div>
  );
}

export default App;
