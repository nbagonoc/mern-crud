import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getGames, deleteGame } from "../../actions/gameActions";

class GamesList extends Component {
  componentDidMount() {
    this.props.getGames();
  }

  onDeleteHandler = id => {
    this.props.deleteGame(id);
  };

  render() {
    const { games } = this.props.game;
    return (
      <div className="row">
        {games.map(({ _id, name }) => (
          <div key={_id} className="col-md-4 px-md-2 mb-3">
            <div className="card">
              <div className="card-body">
                {name}
                <hr />
                <Link
                  to={`/games/edit/${_id}`}
                  className="btn btn-success btn-sm mr-1"
                >
                  Edit
                </Link>
                <button
                  onClick={this.onDeleteHandler.bind(this, _id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

GamesList.propTypes = {
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(
  mapStateToProps,
  { getGames, deleteGame }
)(GamesList);
