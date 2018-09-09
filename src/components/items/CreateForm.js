import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { createItem, clearErrors } from "../../actions/itemActions";

class CreateForm extends Component {
  state = {
    name: "",
    weight: "",
    size: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      weight: this.state.weight,
      size: this.state.size
    };

    this.props.createItem(newItem, this.props.history);
  };

  render() {
    const { name, weight, size, errors } = this.state;

    return (
      <div>
        <h1>Create</h1>
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
            {errors && <div className="invalid-feedback">{errors.name}</div>}
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
              {/* <option selected value> */}
              <option disabled selected value="">
                Please select weight
              </option>
              <option value="light">Light</option>
              <option value="heavy">Heavy</option>
            </select>
            {errors && <div className="invalid-feedback">{errors.weight}</div>}
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
            {errors && <div className="invalid-feedback">{errors.size}</div>}
          </div>
          {/* Submit button */}
          <button className="btn btn-success">Add Item</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createItem, clearErrors }
)(CreateForm);
