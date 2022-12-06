import "./Feedback.css";
import Helmet from "react-helmet";
// import Card from "./Card";
import { HashLink as Link } from "react-router-hash-link";
function Feedback() {
  return (
    <section className="nav" id="feedback">
      <Helmet>
        <style>{"body {background-color: #E1A3FF ;}"}</style>
      </Helmet>

      <h1 className="top">CYBERSECURER</h1>

      {/* NAVBARSTARTS */}
      <nav className="navbarall">
        <Link to="/" className="button">
          <h2 className="navbarall">HOME</h2>
        </Link>

        <Link to="/Read" className="button">
          <h2 className="navbarall">READ</h2>
        </Link>

        <Link to="/Watch" className="button">
          <h2 className="navbarall">WATCH</h2>
        </Link>
      </nav>

      {/* <Card /> */}
    </section>
  );
}
export default Feedback;
