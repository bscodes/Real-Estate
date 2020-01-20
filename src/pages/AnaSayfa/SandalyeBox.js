import React from 'react';
import { Link } from "react-router-dom";
import './AnaSayfa.css';

const SandalyeBox = ({img, title}) => {
    return (
        
        
            <Link to="/sandalyeler" className="category-body">
                <div className="category-inline text-right">
                    <div className="img-part">
                        <img className="img-fluid" src={img} alt=""/>
                    </div>
                    <div className="category-name">
                        <h3> {title} </h3>
                    </div>
                </div>
            </Link>
    )
}

export default SandalyeBox;