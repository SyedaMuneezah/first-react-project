
import React from 'react';
import Feature from './Feature'; // Adjust the import path if necessary
import './card.css'
import feature1 from '../../assets/feature_1.png'
import feature2 from '../../assets/feature_2.png'
import feature3 from '../../assets/feature_3.png'

const Card = () => {

    return (

   <div>
     
     <div className="container mt-5">
        <div className="row">

            <div className="col-lg-4 col-md-12">
            <Feature image={feature1} title="web development" description="Cutting-edge programming training Advanced coding education"/>
            </div>

            <div className="col-lg-4 col-md-12">
            <Feature image={feature2} title="Money Saving Services" description="Intuitive design for user satisfaction User-friendly design solutions"/>
            </div>

            <div className="col-lg-4 col-md-12">
            <Feature image={feature3} title="Usability Interface" description="Cost-effective and Budget-friendly solutions for all needs"/>
            </div>
            

        </div>
     </div>
       

         {/* {
    cardData.map((item,index)=>{
      return <Feature key={index} image={item.image} title={item.title} description={item.description} />
    })
  } */}
      
   </div>
        

    );
};

export default Card;
