import React from 'react';
import './card.css'

const Feature = (props) => {
    return (

  <div className="container feature">
    <div className="row">
        <div className="col-lg-4 col-md-12">

        <div className="card" style={{ width: "18rem" }}>

        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text mt-3">{props.description}</p>
        </div>

    </div>
        </div>

     
    </div>
  </div>

            

             


    );
};

export default Feature;
