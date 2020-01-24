import React from "react";
import { connect } from 'react-redux';
import { Tooltip, Icon, notification } from 'antd';
import './AddProductToShop.scss';
import * as actionTypes from '../store/actions';
// import { ButtonWithIcon } from '../ComponentsUI/ButtonWithIcon/ButtonWithIcon';

const AddProductToShop = (props) => {

  const addProductToLocalStrorage = (elementId) =>  {
    if (localStorage.getItem('selectedProductsIdsObj') === null) {
      localStorage.setItem('selectedProductsIdsObj', '{}'); // for objects
    }
    let parseObjectWithProducts = JSON.parse(localStorage.getItem('selectedProductsIdsObj'));
    let newValue;
    if (parseObjectWithProducts[elementId]!==undefined) {
      newValue=parseObjectWithProducts[elementId];
    } else {
      newValue=0;
    }
    parseObjectWithProducts[elementId]= newValue + 1
    let objToString = JSON.stringify(parseObjectWithProducts);
    localStorage.setItem('selectedProductsIdsObj', objToString);

    props.onProductToLocalStrorage(elementId);
    openNotification()
  }

  const openNotification = () => {
    const key = `open${Date.now()}`;
    // const btn = (
    //   <ButtonWithIcon iconName={"shopping-cart"} buttonName={"Pokaż kosz"} iconSize={"0"} heightBtn={"30px"} fontSize={"11pt"} />
    // );
    notification.open({
      message: 'Dodano produkt',
      description:
        'Dodano kolejny produkt do kosza: '+props.name.toLowerCase()+'.',
      // placement:'bottomLeft',
      // btn, 
      key,
      onClose: close,
      
    });
  };

  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };

  
  let discount;
  if (props.discount === true) {
    discount = (
      <div className="discount-label">{ "-" }{ props.discountValue }{ "%" } </div>
    );
  }
  const liStyle = { backgroundImage: "url(" + props.photo + ")" };
  return (
    <div className="grid-container--item">
      <div className="grid-container--item--elements">
        {discount}
        
        <div className="product-img" style={liStyle}></div>
        <span className="title">{props.name}</span>
        <span className="price">
          Cena:
          {"  " + props.price + " zł"}
        </span>
        <Tooltip placement="right" title={"Dodaj do koszyka"}>
          <div id={props.productId} className="btn-add-product" onClick={addProductToLocalStrorage.bind(this, props.productId)}>
              <Icon type="shopping-cart" style={{ fontSize: '25px', fontWeight: 'bold' }}/>
          </div>
        </Tooltip>
        
      </div>
    </div>
  );
  
}

const mapStateToProps = state => {
  return {
    newIdsList: state.productsIdsArray,//ctr jest to nowy props stworzony dla komponentu, pobiera wartosci ze stanow na zewnatrz komponentu
  };
}

const mapDispatchToProps = dispatch =>{
  return {
    onProductToLocalStrorage: (id) => dispatch({type: actionTypes.ADD_NEXT_ID_TO_LOCALSTORAGE, newId: id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductToShop);