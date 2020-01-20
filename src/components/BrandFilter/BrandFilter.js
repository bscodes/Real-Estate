// eslint-disable-next-line
import React from 'react';
import {connect} from 'react-redux';
import './BrandFilter.scss';
import {brands} from "../../data/brands";
import {addBrandToFilter, removeBrandFromFilter} from "../../actions/actions";


const BrandFilter = (props) => {
    // eslint-disable-next-line
    const {dispatch, brandItemsCount} = props;
    const handleSelectBox = (e) => {
        const name = e.target.name;
        // eslint-disable-next-line
        const value = e.target.checked;

        if(e.target.checked) {
            dispatch(addBrandToFilter(name));
        } else {
            dispatch(removeBrandFromFilter(name));
        }
    };


        return (
            <div className="category-card card mb-3">
                <div className="card-header">
                    <h3>Filtrele</h3>
                </div>
                <ul className="list-group flex-row flex-wrap">
                    {brands.map(brand => (
                        <li className="list-group-item flex-50 mt-2" key={brand}>
                            <label className="custom-checkbox text-capitalize"> {brand}
                                <input type="checkbox"
                                       name={brand}
                                       className="custom-checkbox__input" onInput={handleSelectBox}/>
                                <span className="custom-checkbox__span"></span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        );

};

const mapStateToProps = (state) => {

    const brandItemsCount = {};

    state.shop.products.forEach(p => {
        brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });


    return {
        brandItemsCount
    }

};

export default connect(mapStateToProps)(BrandFilter);