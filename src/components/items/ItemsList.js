import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getItems,
  deleteItem,
  clearItems,
  setLoading
} from "../../actions/itemActions";
import Spinner from "../spinner/Spinner";

class ItemsList extends Component {
  componentDidMount() {
    this.props.setLoading();
    this.props.getItems();
  }

  componentWillUnmount() {
    this.props.clearItems();
  }

  onDeleteHandler = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items, loading } = this.props;
    return (
      <div>
        {loading === true ? (
          <Spinner />
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Weight</th>
                <th>Size</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(({ _id, name, weight, size }) => (
                <tr key={_id}>
                  <td class="text-capitalize">{name}</td>
                  <td>{weight}</td>
                  <td>{size}</td>
                  <td>
                    <Link
                      to={`/items/show/${_id}`}
                      class="btn btn-outline-secondary btn-sm mr-1"
                    >
                      View
                    </Link>
                    <Link
                      to={`/items/edit/${_id}`}
                      class="btn btn-outline-secondary btn-sm mr-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={this.onDeleteHandler.bind(this, _id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

// ItemsList.propTypes = {
//   getItems: PropTypes.func.isRequired,
//   deleteItem: PropTypes.func.isRequired,
//   clearItems: PropTypes.func.isRequired,
//   setLoading: PropTypes.func.isRequired,
//   items: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  items: state.item.items,
  loading: state.loading.loading
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem, clearItems, setLoading }
)(ItemsList);
