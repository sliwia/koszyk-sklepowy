import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddElementToShoppingList.scss';


export class AddElementToShoppingList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const liStyle = {backgroundImage: 'url(' + this.props.photo + ')'};
        return(
        <div className="grid-container--item">
            <div className="grid-container--item--elements">
                <div className="product-img" style={liStyle} ></div>
                <span>{this.props.product}</span>
                <span>Cena: {this.props.price}</span>
                <button className="btn-add-product">
                    <FontAwesomeIcon icon={ faPlus } />
                </button>
            </div>
        </div>
        );
    }

}