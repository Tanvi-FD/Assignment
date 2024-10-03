
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddUser from "./AddUser";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import View from "./View";
import Edit from "./Edit";

// npm i react-router-dom
// npm i bootstrap react-bootstrap
// npm i -g json-server  (anyname.json)
// Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
// json-server --watch anyname.json --port 5000

function App() {
  return (
    <>
      <div className="app">
        <h1>Routing and JSON</h1>

        {/* <a href="xyz.php?xyz=1">View</a> */}

        <BrowserRouter>
          <Link to="/">Home</Link>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddUser />}></Route>
            <Route path="/view/:viewId" element={<View />}></Route>
            <Route path="/edit/:editId" element={<Edit />}></Route>
          </Routes>
        </BrowserRouter>

        {/* <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/add">Add</Link>
          <Link to="/hmm">services</Link>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddUser />}></Route>
            <Route path="/hmm" element={<Services />}>
              <Route path="/hmm/s1" element={<Service1 />}></Route>
              <Route path="/hmm/s2" element={<Service2 />}></Route>
              <Route path="/hmm/s3" element={<Service3 />}></Route>
            </Route>
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
