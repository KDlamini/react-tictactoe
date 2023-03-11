import React from 'react'

// A `Square` component that renders either an "X", "O", or nothing depending on its state.
class Square extends React.Component {
  render() {
    const token = this.props.value;

    return (
      <button
        className={`square ${token === "X" ? "green": "orange"}`}
        onClick={() => this.props.onClick()}
        disabled={this.props.isWinner ? true : false}
      >
        {token}
      </button>
    );
  }
}

export default Square