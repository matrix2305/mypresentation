import React from "react";
import './Footer.css';

function Footer(){
    return(
        <footer className='font-small bg-footer pt-4 text-white mb-5'>
            <div className='container-fluid text-center text-md-left'>
                <div className='row'>
                    <div id='footer' className='col-md-8 mt-md-0 mt-3'>
                        <h5>Srdjan Radosavljevic</h5>
                        <p>Thank you for watching my presentation.</p>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5>Contact me</h5>
                        <p><i className="fas fa-envelope-square"/><b> E-mail: </b><a href='mailto:srki.rado@gmail.com'>srki.rado@gmail.com</a></p>
                        <p><i className="fas fa-phone-square"/><b> Phone: </b> +381 / (0) 63-19-37-009</p>
                    </div>
                </div>
                <div className='copyright text-center py-3'>
                    <p>All rights reserved &copy; by Srdjan Radosavljevic 2020</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;