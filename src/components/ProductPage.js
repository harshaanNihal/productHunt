import React, { Component } from 'react';
import ImageSec from './modules/ImageSec';

class ProductPage extends Component {
  render() {
    return (
      <div className="product-page">
          <button className="close">X</button>
        <div className="wrapper">
          <div className="page">
            <div className="product-page-card">
              <div>
                <img src="https://picsum.photos/100" />
              </div>
              <div className="product-details">
                <h3>Title</h3>
                <p>Description</p>
                <div>
                  <button>Design Tools</button>
                </div>
              </div>
              <button>#1 Product of the Day</button>
            </div>
          </div>
          <div className="product__bottom">
            <div className="product__bottom__left border">
              <aside>
                <img src="https://picsum.photos/300" />
                <ul className="aside-list">
                  {/* give li icon */}
                  <li><i class="fas fa-horse-head"></i>Product Designer</li>
                  <li><i class="fas fa-horse-head"></i>Illustrator</li>
                  <li><i class="fas fa-horse-head"></i>Animator</li>
                  <li><i class="fas fa-horse-head"></i>Product Designer</li>
                  <li><i class="fas fa-horse-head"></i>Product Designer</li>
                  <li><i class="fas fa-horse-head"></i>Product Designer</li>
                  <li><i class="fas fa-horse-head"></i>Product Designer</li>
                  <li><i class="fas fa-horse-head"></i>Product Designer</li>
                  <li><i class="fas fa-horse-head"></i>Product Designer</li>
                  <li><i class="fas fa-horse-head"></i>Product Designer</li>
                </ul>
              </aside>
            </div>
            <div className="product__bottom__right border">
              <h3>Follow & Learn From The Best Designers</h3>
              <p>A place to find and follow awesome designers, connect friends,
               hunt freelancers for your projects. DesignerHunt was inspired by
               <span>latinxswhodesign.com</span>, <span>blackswho.design</span> & <span>womenwho.design.</span></p>
              <section className="product__image-sec">
                <ImageSec />
                <ImageSec />
                <ImageSec />
              </section>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage