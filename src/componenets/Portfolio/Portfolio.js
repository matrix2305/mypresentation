import React, {useState} from "react";
import {Modal, Carousel} from "react-bootstrap";
import './Portfolio.css';
import Armonia1 from './projects/Armonia/1.png';
import Armonia2 from './projects/Armonia/2.png';
import Armonia3 from './projects/Armonia/3.png';
import rac1 from './projects/RentACar/1.png';
import rac2 from './projects/RentACar/2.png';
import rac3 from './projects/RentACar/3.png';
import rac4 from './projects/RentACar/4.png';
import rac5 from './projects/RentACar/5.png';
import rac6 from './projects/RentACar/6.png';
import rac7 from './projects/RentACar/7.png';
import rac8 from './projects/RentACar/8.png';

function Portfolio(){
    const [modal, setModal] = useState({show: false, portfolio : {images: [], technologies: []}});
    const [portfolios] = useState([
        {name: 'Armonia', description: 'Project for web show', technologies: ['Wordpress', 'Woocommerce'], images: [Armonia1, Armonia2, Armonia3], url: 'http://www.armonia.rs'},
        {name: 'Rent a car Speed', description: 'Project for rent a car agency', technologies: ['AngularJS', 'PHP'], images: [rac1, rac2, rac3, rac4, rac5, rac6, rac7, rac8], url: 'https://github.com/matrix2305/rentacar'}
    ])
    const [index, setIndex] = useState(0)
    const handleImgMod = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    return(
        <div className='card m-0 rounded-0 border-bottom-0' id='portfolio'>
            <div className='card-header text-center'>
                <h2>My portfolio</h2>
            </div>
            <div className='card-body text-center'>
                <div className='row'>
                    {
                        portfolios.map(portfolio => {
                            return (
                                <div className='portfolio m-3'>
                                    <img src={portfolio.images[0]} alt='1' width='350px'/>
                                    <div className='portfolio-details'>
                                        <h4 className='float-left text-white'>{portfolio.name}</h4>
                                        <button className='btn btn-primary float-right' onClick={() => setModal({...modal, show: true, portfolio: portfolio})}>Show</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Modal show={modal.show} onHide={() => setModal({...modal, show: false})}>
                <Modal.Header closeButton>
                    <Modal.Title>{modal.portfolio.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleImgMod}>
                        {
                            modal.portfolio.images.map(img => {
                                return(
                                    <Carousel.Item>
                                        <img src={img} alt='portfolio' className='img-portfolio'/>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    <div className='row'>
                        <div className='col-10 offset-1 text-center'>
                            <h5>Description:</h5>
                            <p>{modal.portfolio.description}</p>
                            <h5>Worked on technologies: </h5>
                            <ul className='p-0 m-0'>
                                {
                                    modal.portfolio.technologies.map(tech => <li>{tech}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <a href={modal.portfolio.url}><button className='btn btn-primary'>See project</button></a>
                    <button className='btn btn-danger' onClick={() => setModal({...modal, show:false})}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Portfolio;