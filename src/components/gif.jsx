import React, { Component } from 'react';

class Gif extends Component {
  click = () => {
    if (this.props.currentGif) {
      this.props.currentGif(this.props.id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.click} />
    );
  }
}

export default Gif;
