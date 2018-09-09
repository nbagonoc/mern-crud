import React, { Component } from "react";
import { connect } from "react-redux";
import { getItem, clearItem, setLoading } from "../../actions/itemActions";
// import PropTypes from "prop-types";
import Spinner from "../spinner/Spinner";

class Item extends Component {
  componentDidMount() {
    this.props.setLoading();
    const { id } = this.props.match.params;
    this.props.getItem(id);
  }

  componentWillUnmount() {
    this.props.clearItem();
  }

  render() {
    const { item, loading } = this.props;

    return (
      <div>
        {loading === true ? (
          <Spinner />
        ) : (
          <div>
            <h2>{item.name}</h2>
            <p className="mb-0">{item.weight}</p>
            <p className="mb-0">{item.size}</p>
          </div>
        )}
      </div>
    );
  }
}

// Item.propTypes = {
//   getItem: PropTypes.func.isRequired,
//   clearItem: PropTypes.func.isRequired,
//   setLoading: PropTypes.func.isRequired,
//   item: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  item: state.item.item,
  loading: state.loading.loading
});

export default connect(
  mapStateToProps,
  { getItem, clearItem, setLoading }
)(Item);
