import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getItem, clearItem, setLoading } from "../../actions/itemActions";
// import PropTypes from "prop-types";
import Spinner from "../spinner/Spinner";
import Sidebar from "../layout/Sidebar";

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
      <div className="row">
        <div className="col-lg-3 col-md-4 mb-3">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-8 pl-md-0">
          <div className="card">
            <div className="card-header">Show</div>
            <div className="card-body">
              {loading === true ? (
                <Spinner />
              ) : (
                <div>
                  <h2 className="text-capitalize">{item.name}</h2>
                  <p className="mb-0">Weight: {item.weight}</p>
                  <p className="mb-0">Size: {item.size}</p>
                  <hr />
                  <Link
                    to="/items"
                    class="btn btn-outline-secondary btn-sm mr-1"
                  >
                    Back to items
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
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
