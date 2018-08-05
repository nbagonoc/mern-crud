import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGame, editGame } from "../../actions/gameActions";
import classnames from "classnames";

class EditForm extends Component {
  state = {
    name: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { name } = nextProps.game;
    this.setState({
      name
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getGame(id);
  }

  onSubmitHandler = e => {
    e.preventDefault();

    // validation
    if (this.state.name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    const { id } = this.props.match.params;

    const updateGame = {
      id,
      name: this.state.name
    };

    // console.log(updateGame);
    this.props.editGame(updateGame);

    // clear the form and errors object
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
        <h1>Edit</h1>
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

EditForm.propTypes = {
  getGame: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game.game
});

export default connect(
  mapStateToProps,
  { getGame, editGame }
)(EditForm);
