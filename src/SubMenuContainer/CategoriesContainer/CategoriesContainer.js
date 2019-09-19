import React from 'react';
import { Icon } from 'antd';
import './CategoriesContainer.scss';


export const CategoriesContainer = () => {
    return (
    <>
        <div className="item-submenu-container">
            <div className="item-categories" >Kategorie </div>
                <div className="submenu-categories">
                    {/* todo: tu będą checkboxy z kategoriami */}
                    {/* <input type="checkbox" name="warzywa" value="Warzywa"> Warzywa</input>
                    <input type="checkbox" name="nabial" value="Nabiał"> Nabiał</input>
                    <input type="checkbox" name="soki" value="Soki"> Soki</input> */}  
                </div>
        </div>
    </>
    );
}