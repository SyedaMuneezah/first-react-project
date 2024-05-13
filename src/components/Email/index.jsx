import './email.css'

function Email() {
    return (
        <div>
            <div className="container-fluid Email">
                <h1 className='send'>Send Me Email</h1>
                <div className="email_box">
                <div className="text">
                <p>example@gmail.com</p> 
                </div>  
                   
                   <div className="contact">
                    <button>Contact</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Email;