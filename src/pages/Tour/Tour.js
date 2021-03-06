import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.scss';
import kyiv from './kyiv.jpg';

const Tour = () => {
  return ( 
  <>
    <div className="container mb-4 mt-3">
      <div className="row">
        <div className="col-lg-12">
          <div className="back-arrow mt-3">
            <Link className="router" to={`/`}><h4 className="arrow"> <i className="fas fa-chevron-left"></i>  Back</h4></Link>
          </div>
          <div className="page-title mb-3">
            <h1 className="title-text">
              City Tour
            </h1>
          </div>
        </div>
        <div className="content-wrapper mt-3 mb-3">
          <div className="col-lg-6">
            <div className="page-image-wrapper">
              <img src={kyiv} alt="kyiv" className="page-image"/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <p className="content-text">
                We help people who come to Ukraine with affordable fees. We share information
                that will make your life easier for you, not only with the sight seeing section,
                but also during your stay in Kiev. We should not see the guidance service as a
                financial loss, we can guarantee that you will gain economically and culturally
                as a result of the correct guidance.
              </p>
              <p className="content-text contact-link">
                <Link className="router" to={`/contact`}>Contact us</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </>
  )
}

export default Tour