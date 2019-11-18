import React from 'react';
import './CategoriesContainer.scss';


export const CategoriesContainer = () => {
    return (
    <>
    <div className="item" >
        <h3 className="categ-container--title">
            Filtruj
        </h3>
            
        <label class="item-categories">
            Pomocyjne
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>
            <label class="item-categories">Owoce
            <input type="checkbox" />
        <span class="checkmark"></span>
        </label>
        <label class="item-categories">Warzywa
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>
        <label class="item-categories">Nabiał
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>
        <label class="item-categories">Soki
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>
        <label class="item-categories">Inne
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>
    </div>
            
    </>
    );
}