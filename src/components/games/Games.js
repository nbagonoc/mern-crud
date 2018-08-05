import React, { Component } from "react";
import { connect } from "react-redux";
import { getGames } from "../../actions/gameActions";
import PropTypes from "prop-types";

// COMPONENTS
import GamesList from "./GamesList";

class Games extends Component {
  componentDidMount() {
    this.props.getGames();
  }

  render() {
    return (
      <div>
        <GamesList game={this.props.game} />
      </div>
    );
  }
}

Games.propTypes = {
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(
  mapStateToProps,
  { getGames }
)(Games);
