import React, { Component } from "react";
import "./Home.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: false
    };
  }

  handleChange(value) {
    this.setState({
      email: value,
      error: false
    });
  }

  handleSubmit() {
    const { email } = this.state;
    const error = !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
      email
    );

    if (error) {
      this.setState({ error });
    } else {
      console.log(email);
    }
  }

  render() {
    const { email, error } = this.state;

    return (
      <div className="App">
        <section>
          <div>
            <h3 className="navbarall">Enter Email to stay Updated</h3>
            <input
              className={error ? "error" : ""}
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => {
                this.handleChange(e.target.value);
              }}
            />
            <button
              className="Button1"
              onClick={() => {
                this.handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </section>
      </div>
    );
  }
}
