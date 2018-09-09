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
          <div className="row">
            {items.map(({ _id, name, weight, size }) => (
              <div key={_id} className="col-md-4 px-md-2 mb-3">
                <div className="card">
                  <div className="card-body">
                    <Link to={`/item/${_id}`}>
                      <h3 className="text-dark text-capitalize">{name}</h3>
                    </Link>
                    <p className="mb-0">{weight}</p>
                    <p className="mb-0">{size}</p>
                    <hr />
                    <Link
                      to={`/items/edit/${_id}`}
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
