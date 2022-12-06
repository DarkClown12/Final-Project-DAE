import "./Home.css";
import Helmet from "react-helmet";
import Newsletter from "./Newsletter";
import Read from "../Components/Read";

import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Route, Routes, useNavigate } from "react-router-dom";
import Quotes from "./Quotes";

export default function App() {
  // JAVASCRIPT GOES HERE

  // HTML IS BELOW
  return (
    // <BrowserRouter>
    <div className="App">
      {/* ....>>>>>START<<<<<<<<...... */}
      {/* This is where I started my front page code here */}
      <h1 className="navbarall">Cyber Securer</h1>
      <br />
      <br />
      <br />
      <br />
      <Quotes />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className="navbarall">
        Do you want to stay out online trouble?
        <br />
        Get Knowledge on hackers!
      </h2>

      {/* BACKGROUND COLOR CHANGE CODE>>>   */}
      <div className="application">
        {/* <Helmet>
          <style>{"body {background-color: #5A8DDB ;}"}</style>
        </Helmet> */}
      </div>
      {/* BACKGROUND COLOR CHANGE CODE END>>>   */}
      <br />
      <br />

      <div className="firstpagenav">
        <button className="Button2">
          <Link to="/Read" className="button">
            <h2>READ</h2>
          </Link>
        </button>

        <button className="Button2">
          <Link to="/Watch" className="button">
            <h2>WATCH</h2>
          </Link>
        </button>

        <button className="Button2">
          <Link to="/Feedback" className="button">
            <h2>FEEDBACK</h2>
          </Link>
        </button>
      </div>

      {/* OUR NAVIGATE COMPONENTS GO HERE */}

      {/* OUR NAVIGATE COMPONENTS GO HERE */}

      <div className="email">
        <h3>
          <Newsletter />
        </h3>
      </div>

      {/*  ...>>>>>>>>>END<<<<<<<<<<....  */}
    </div>
    // </BrowserRouter>
  );
}
