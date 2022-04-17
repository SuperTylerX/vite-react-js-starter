import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import { decrement, increment } from "../redux/actions/count";

class Count extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  render() {
    const { count, increment: add, decrement: minis } = this.props;
    return (
      <div>
        <div>{count}</div>
        <button
          type="button"
          onClick={() => {
            add(1);
          }}
        >
          add 1
        </button>

        <button
          type="button"
          onClick={() => {
            minis(1);
          }}
        >
          minis 1
        </button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    count: state.count.number,
  }),
  { increment, decrement }
)(Count);
