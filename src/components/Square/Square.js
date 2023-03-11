import React from 'react'

// A `Square` component that renders either an "X", "O", or nothing depending on its state.
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
        disabled={this.props.isGameOver ? true : false}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square