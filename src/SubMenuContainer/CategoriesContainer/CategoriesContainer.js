import React from 'react';
import './CategoriesContainer.scss';


export const CategoriesContainer = () => {
    return (
        <>
            <div className="item" >
                <h3 className="categ-container--title">
                    Filtruj
        </h3>

                <label className="item-categories">
                    Pomocyjne
            <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="item-categories">Owoce
            <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="item-categories">Warzywa
            <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="item-categories">Nabiał
            <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="item-categories">Soki
            <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="item-categories">Inne
            <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>

        </>
    );
}