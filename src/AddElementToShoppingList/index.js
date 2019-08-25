import React from 'react';


export class AddElementToShoppingList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const liStyle = {backgroundImage: 'url(' + '../files/'+ this.props.photo + ')'};
        console.log(liStyle)
        return(
        <li>
            <div className="product-img" style={liStyle} ></div>
            <div className="product-title-price">
                <span>{this.props.product}</span>
                <span><i>Cena: {this.props.price}</i></span>
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

}