import './banner.css'
import Button from '../Button';


function Banner() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="hero_section_content d-flex flex-column justify-content-center align-items-start">
                            <div className="wrapper">

                                <h1 className='text-lg-start text-center'><i>Lanch Your App </i><br /> With Confidence And  <br /> Creativity</h1>
                                <p className='text-lg-start text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure perferendis eligendi, tempore dolore mollitia!</p>
                                <Button />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;