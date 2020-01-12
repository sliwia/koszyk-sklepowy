import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import './CategoriesContainer.scss';
import * as actionTypes from '../../store/actions';


const CategoriesContainer = (props) => {
    function onChange(e) {
      if (e.target.id ==='fruits') {
        props.onFilterFruit(e.target.checked);
      } else if (e.target.id ==='vegetables') {
        props.onFilterVegetables(e.target.checked);
      } else if (e.target.id ==='dairy-products') {
        props.onFilterDairyProducts(e.target.checked);
      } else if (e.target.id ==='juices') {
        props.onFilterJuices(e.target.checked);
    }
        
    }

    return (
        <>
            <div className="chceckboxes-container" >
                <div><Checkbox id="fruits" onChange={onChange} defaultChecked={true} >Owoce</Checkbox></div>
                <div><Checkbox id="vegetables" onChange={onChange} defaultChecked={true} >Warzywa</Checkbox></div>
                <div><Checkbox id="dairy-products" onChange={onChange} defaultChecked={true} >Nabiał</Checkbox></div>
                <div><Checkbox id="juices" onChange={onChange} defaultChecked={true} >Soki</Checkbox></div>
                <div><Checkbox defaultChecked={true} >Oleje</Checkbox></div>
            </div>

        </>
    );
}

const mapStateToProps = state => {
    return {
      shwFruits: state.showFruits
  };
};
const mapDispatchToProps = dispatch =>{
  return {
    onFilterFruit: (checked) => dispatch({type: actionTypes.SHOW_FRUITS, showFruits: checked}),
    onFilterVegetables: (checked) => dispatch({type: actionTypes.SHOW_VEGETABLES, showVegetables: checked}),
    onFilterJuices: (checked) => dispatch({type: actionTypes.SHOW_JUICES, showJuices: checked}),
    onFilterDairyProducts: (checked) => dispatch({type: actionTypes.SHOW_DAIRY_PRODUCTS, showDairyProducts: checked})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);