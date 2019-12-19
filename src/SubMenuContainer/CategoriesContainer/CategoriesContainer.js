import React from 'react';
import { Checkbox } from 'antd';
import './CategoriesContainer.scss';


export const CategoriesContainer = () => {
    return (
        <>
            <div className="chceckboxes-container" >
                <div><Checkbox  >Owoce</Checkbox></div>
                <div><Checkbox >Warzywa</Checkbox></div>
                <div><Checkbox >Nabiał</Checkbox></div>
                <div><Checkbox >Soki</Checkbox></div>
                <div><Checkbox >Inne</Checkbox></div>
            </div>

        </>
    );
}