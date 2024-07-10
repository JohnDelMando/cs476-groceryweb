import React from 'react'
import './App.css'
import profileImage from './assets/JOKER_pfp.jpg'
import cartImage from './assets/cart_button.png'
import itemImage from './assets/banana.jpg'

function App() {
  return (
    <div id="profile-page">
    <header>
      <div id="profile-page-header">
        <div id="home-button">
          <button class="home-button-header">HOME</button>
        </div>
        <div id="search-bar">
          <input type="text" placeholder="Search item..." id="search-bar-header" />
        </div>
        <div id ="cart-button">
          <a href="">
            <img src={cartImage} alt="Cart" id="cart-image" />
          </a>
        </div>  
        <div id="pfp-button">
          <a href="">
            <img src={profileImage} alt="Profile" id="profile-image-button" />
          </a>
        </div>
      </div>
    </header>
    <div id="profile-page-container">
      <div id="profile-info-container">
        <div id="profile-info">
          <div id="pfp_photo">
            <img src={profileImage} alt="Profile" id="profile-image" />
          </div>
          <div id="pfp_text">
            <div id="pfp_text_name">JOKER</div>
            <div id="pfp_text_id">#1234567890</div>
          </div>
        </div>
        <div id="profile-buttons">
          <div id="profile-buttons-orders">
            <button class="profile-button">ORDERS</button>
          </div>
          <div id="profile-buttons-history">
            <button class="profile-button">HISTORY</button>
          </div>
        </div>
      </div>
      <div id="items-container">
        <div id="items">
          <div id="item-images">
            <img src={itemImage} alt="Item" id="item-image" />
          </div>
          <div id="item-description">
            <div id="item-description-text">
              <p id="item-name">
                BANANA
              </p>
              <p>
                Qty: 999
              </p>
              <p>
                Item description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptatum ullam vero reprehenderit veritatis neque quisquam itaque
              </p>
            </div>
          </div>
          <div id="item-buttons">
            <div id="total-price">TOTAL: $99.99</div>
            <div id="buy-again">
              <button id="buy-again-button">BUY AGAIN</button>
            </div>
            <div id="cancel-order">
              <button id="cancel-order-button">CANCEL</button>
            </div>
          </div>
        </div>
        <div id="items">
          <div id="item-images">
            <img src={itemImage} alt="Item" id="item-image" />
          </div>
          <div id="item-description">
            <div id="item-description-text">
              <p id="item-name">
                BANANA
              </p>
              <p>
                Qty: 999
              </p>
              <p>
                Item description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptatum ullam vero reprehenderit veritatis neque quisquam itaque
              </p>
            </div>
          </div>
          <div id="item-buttons">
            <div id="total-price">TOTAL: $99.99</div>
            <div id="buy-again">
              <button id="buy-again-button">BUY AGAIN</button>
            </div>
            <div id="cancel-order">
              <button id="cancel-order-button">CANCEL</button>
            </div>
          </div>
        </div>
        <div id="items">
          <div id="item-images">
            <img src={itemImage} alt="Item" id="item-image" />
          </div>
          <div id="item-description">
            <div id="item-description-text">
              <p id="item-name">
                BANANA
              </p>
              <p>
                Qty: 999
              </p>
              <p>
                Item description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptatum ullam vero reprehenderit veritatis neque quisquam itaque
              </p>
            </div>
          </div>
          <div id="item-buttons">
            <div id="total-price">TOTAL: $99.99</div>
            <div id="buy-again">
              <button id="buy-again-button">BUY AGAIN</button>
            </div>
            <div id="cancel-order">
              <button id="cancel-order-button">CANCEL</button>
            </div>
          </div>
        </div>
        <div id="items">
          <div id="item-images">
            <img src={itemImage} alt="Item" id="item-image" />
          </div>
          <div id="item-description">
            <div id="item-description-text">
              <p id="item-name">
                BANANA
              </p>
              <p>
                Qty: 999
              </p>
              <p>
                Item description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptatum ullam vero reprehenderit veritatis neque quisquam itaque
              </p>
            </div>
          </div>
          <div id="item-buttons">
            <div id="total-price">TOTAL: $99.99</div>
            <div id="buy-again">
              <button id="buy-again-button">BUY AGAIN</button>
            </div>
            <div id="cancel-order">
              <button id="cancel-order-button">CANCEL</button>
            </div>
          </div>
        </div>
        <div id="items">
          <div id="item-images">
            <img src={itemImage} alt="Item" id="item-image" />
          </div>
          <div id="item-description">
            <div id="item-description-text">
              <p id="item-name">
                BANANA
              </p>
              <p>
                Qty: 999
              </p>
              <p>
                Item description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptatum ullam vero reprehenderit veritatis neque quisquam itaque
              </p>
            </div>
          </div>
          <div id="item-buttons">
            <div id="total-price">TOTAL: $99.99</div>
            <div id="buy-again">
              <button id="buy-again-button">BUY AGAIN</button>
            </div>
            <div id="cancel-order">
              <button id="cancel-order-button">CANCEL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>FOOTER</footer>
    </div>
  );
}

export default App