import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { createGame } from "../../actions/gameActions";

class CreateForm extends Component {
  state = {
    name: "",
    errors: {}
  };

  onSubmitHandler = e => {
    e.preventDefault();

    // validation
    if (this.state.name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    const newGame = {
      name: this.state.name
    };

    // console.log(newGame);
    this.props.createGame(newGame);

    // Clear the froms and errors object
    this.setState({
      name: "",
      errors: {}
    });

    // redirect
    this.props.history.push("/games");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, errors } = this.state;

    return (
      <div>
        <h1>Create</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="game"
              placeholder="Enter the name of the game"
              className={classnames("form-control", {
                "is-invalid": errors.name
              })}
              value={name}
              onChange={this.onChange}
            />
            {errors && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <button className="btn btn-success">Add Game</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game
});

export default connect(
  mapStateToProps,
  { createGame }
)(CreateForm);
