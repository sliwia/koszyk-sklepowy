import React from 'react';
import '../MainCssFiles/Container.css'
import './Shop.css' 


export class Shop extends React.Component {
  
  productsList = [
    {
      product: 'Jabłka',
      price: 10,
      photo: 'jablka.jpg'

    },
    {
      product: 'Gruszki',
      price: 11,
      photo: 'gruszki.jpg'

    },
    {
      product: 'Banany',
      price: 12,
      photo: 'banany'

    },
    {
      product: 'Awokado',
      price: 13,
      photo: 'awokado'

    },
  ]
  addElement = () => {
    const x = 'nnnaa'
    return x
  }

  render() {
    
    return (
      
      <div className="container">
            <h2>Lista produktów dostępnych w sklepie</h2>
            <br></br>
            <ul>
              <li>
                <div className="product-img"></div>
                <div class="product-title-price">
                  <span>Jabłka</span>
                  <span><i>Cena: 10zł</i></span>
                </div>
                <div>
                <div>
                  <button>
                    Dodaj
                  </button>
                </div>
                </div>
              </li>
            </ul>

            <ul>
              <li>
                <div className="product-img img2"></div>
                <div class="product-title-price">
                  <span>Gruszki</span>
                  <span><i>Cena: 11zł</i></span>
                </div>
                <div>
                <div>
                  <button>
                    Dodaj
                  </button>
                </div>
                </div>
              </li>
            </ul>
           

  
        
      </div>
      
    );
  }
}