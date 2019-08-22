import React from 'react';

export function AddElementToShoppingList(){
    return(
        <li>
            <div className="product-img"></div>
            <div class="product-title-price">
                <span>Jabłka</span>
                <span><i>Cena: 10zł</i></span>
            </div>
            <div>
            <div>
                <input type="number" name="quantity" placeholder="Ilość [szt.]"></input>
                <button>
                    Dodaj
                </button>
            </div>
            </div>
        </li>
    );

}