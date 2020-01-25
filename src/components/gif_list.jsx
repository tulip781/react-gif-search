import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {
  updater = () => {
    console.log(this.props.currentGifFunction(this.id));
  }

  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} onClick={this.updater} />);
  }


  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
