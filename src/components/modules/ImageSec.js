import React, { Component } from 'react';

class ImageSec extends Component {
  render() {
    return (
      <div className="image-sec__element">
        <img src="https://picsum.photos/200" />
        <h4>Mary Lou</h4>
        <div><small>codedrop.com</small></div>
        <p className="paragraph"><small>A freelance web designer and developer with a passion for interaction 
        design. Co-founder & author of @codrops</small></p>
        <div>
          <span>Twitter</span>
          <span>Twitter</span>
          <span>Twitter</span>
        </div>
      </div>
    );
  }
}

export default ImageSec



