import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import './CategoriesContainer.scss';
import * as actionTypes from '../../store/actions';


const CategoriesContainer = (props) => {
    function onChange(e) {
        if (e.target.id ==='fruits') {
            //console.log(`checked = ${e.target.checked}`,e.target.id);
            props.onFilterFruit(e.target.checked)
        } else if (e.target.id ==='vegetables') {
            console.log(`checked = ${e.target.checked}`,e.target.id);
        }
        
      }

    return (
        <>
            <div className="chceckboxes-container" >
                <div><Checkbox id="fruits" onChange={onChange} defaultChecked={true} >Owoce</Checkbox></div>
                <div><Checkbox id="vegetables" onChange={onChange} defaultChecked={true} >Warzywa</Checkbox></div>
                <div><Checkbox defaultChecked={true} >Nabiał</Checkbox></div>
                <div><Checkbox defaultChecked={true} >Soki</Checkbox></div>
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
    onFilterFruit: (checked) => dispatch({type: actionTypes.SHOW_FRUITS, showFruits: checked})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);