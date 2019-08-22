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
            
            {
              // tu będzie wyszukiwarka 
            }
            {
              // 1.Czy do tworzenia pojedyńczych elementóww listy <li> stworzyć osobny komponent czy w tym komponencie funkcję ?
              
              // 2. Potrzebuję podpowiedzi w jai sposób umieszczać zdjęcia produktów do listy ? na razie dodałam w css,
              // ale jak przekazywać nazwę z obiektu. Przypisywać klasy i tam style.backgroundImage = "url... czy może jako obrazek ?
              
              //3. Elementy dodan z koszyka będą wyświetlane podobne liście na popupie. Czy zapisane elementy mają być w jsonie w state'ach ? 
            }
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