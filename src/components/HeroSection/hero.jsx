import './hero.css'
import Button from '../Button';

function Hero(props) {
    
    return (
        <div>
             <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="hero_section_boximg">
                            <img className='img-fluid' src={props.image} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="hero_section_box d-flex flex-column justify-content-center align-items-start">
                            <div className="heading">
                                <h1>{props.title}</h1>
                            </div>
                            <div className="para">
                        {props.description}
                            </div>
                           <Button />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;