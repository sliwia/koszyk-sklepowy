import React from "react";
import { Header } from '../Header/Header'
import { SubMenuContainer } from "../SubMenuContainer/SubMenuContainer";
import ProductsList from "../ProductsList/ProductsList";
import StepsOfShopping  from "../StepsOfShopping/StepsOfShopping";
import { connect} from 'react-redux';


const ShopView = (props) => {

    return (
    <>
        <Header/>
        <SubMenuContainer />
        <ProductsList />
        {(props.shwPopup===true)?<StepsOfShopping />:<div></div>}
    </>
    );
};

const mapStateToProps = state => {
    return {
        shwPopup: state.showPopup,
        
    };
}

    export default connect(mapStateToProps)(ShopView);