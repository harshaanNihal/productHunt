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
                  <button><i class="fas fa-comment"></i></button>
                  <button>Design Tools</button>
                </div>
              </div>
              <button>count</button>
            </div>
          </div>
          <div className="product__bottom">
            <div className="product__bottom__left border">
              <aside>
                <img src="https://picsum.photos/100" />
                <ul>
                  {/* give li icon */}
                  <li><i class="fas fa-user-edit"></i>Product Designer</li>
                  <li><i class="fas fa-user-edit"></i>Illustrator</li>
                  <li><i class="fas fa-user-edit"></i>Animator</li>
                  <li><i class="fas fa-user-edit"></i>Product Designer</li>
                  <li><i class="fas fa-user-edit"></i>Product Designer</li>
                  <li><i class="fas fa-user-edit"></i>Product Designer</li>
                  <li><i class="fas fa-user-edit"></i>Product Designer</li>
                  <li><i class="fas fa-user-edit"></i>Product Designer</li>
                  <li><i class="fas fa-user-edit"></i>Product Designer</li>
                  <li><i class="fas fa-user-edit"></i>Product Designer</li>
                </ul>
              </aside>
            </div>
            <div className="product__bottom__right border">
              <h3>usgdrfl uisdhgfkjsa isohlgfd</h3>
              <p>sfgdhdhjfios isdjfiosfjiofsf idjfdijsdiofsfj jdifjsiofjdsi</p>
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