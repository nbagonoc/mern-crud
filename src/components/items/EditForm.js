import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getItem,
  editItem,
  clearItem,
  setLoading,
  clearErrors
} from "../../actions/itemActions";
import classnames from "classnames";
import Spinner from "../spinner/Spinner";

class EditForm extends Component {
  state = {
    name: "",
    weight: "",
    size: "",
    errors: {}
  };

  componentDidMount() {
    this.props.setLoading();
    const { id } = this.props.match.params;
    this.props.getItem(id);
  }

  componentWillReceiveProps(nextProps, nextState) {
    // receive the values
    const { name, weight, size } = nextProps.item;
    // set the values to state
    this.setState({
      name,
      weight,
      size
    });
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentWillUnmount() {
    this.props.clearItem();
    this.props.clearErrors();
  }

  onSubmitHandler = e => {
    e.preventDefault();

    // set new values
    const updateItem = {
      id: this.props.match.params.id,
      name: this.state.name,
      weight: this.state.weight,
      size: this.state.size
    };

    // send new values to to actions
    this.props.editItem(updateItem, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, weight, size, errors } = this.state;
    const { loading } = this.props;

    return (
      <div>
        {loading === true ? (
          <Spinner />
        ) : (
          <div>
            <h1>Edit</h1>
            <form onSubmit={this.onSubmitHandler}>
              {/* Name */}
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  // id="game"
                  placeholder="Enter item name"
                  className={classnames("form-control", {
                    "is-invalid": errors.name
                  })}
                  value={name}
                  onChange={this.onChange}
                />
                {errors && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              {/* Weight */}
              <div className="form-group">
                <select
                  name="weight"
                  value={weight}
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    "is-invalid": errors.weight
                  })}
                  placeholder="weight"
                >
                  <option disabled selected value="">
                    Please select weight
                  </option>
                  <option value="light">Light</option>
                  <option value="heavy">Heavy</option>
                </select>
                {errors && (
                  <div className="invalid-feedback">{errors.weight}</div>
                )}
              </div>
              {/* Size */}
              <div className="form-group">
                <select
                  name="size"
                  value={size}
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    "is-invalid": errors.size
                  })}
                  placeholder="size"
                >
                  <option disabled selected value="">
                    Please select size
                  </option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="extra-large">Extra-Large</option>
                </select>
                {errors && (
                  <div className="invalid-feedback">{errors.size}</div>
                )}
              </div>
              <button className="btn btn-success">Edit Item</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

// EditForm.propTypes = {
//   getItem: PropTypes.func.isRequired,
//   item: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  item: state.item.item,
  loading: state.loading.loading,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getItem, editItem, clearItem, setLoading, clearErrors }
)(EditForm);
