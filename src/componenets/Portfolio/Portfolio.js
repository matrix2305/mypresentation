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

import cpc1 from './projects/cpc/1.PNG';
import cpc2 from './projects/cpc/2.PNG';
import cpc3 from './projects/cpc/3.PNG';
import cpc4 from './projects/cpc/4.PNG';

import coc1 from './projects/coc/1.PNG';
import coc2 from './projects/coc/2.PNG';
import coc3 from './projects/coc/3.PNG';
import coc4 from './projects/coc/4.PNG';
import coc5 from './projects/coc/5.PNG';
import coc6 from './projects/coc/6.PNG';
import coc7 from './projects/coc/7.PNG';

import ecmc1 from './projects/ecommerce/1.PNG';
import ecmc2 from './projects/ecommerce/2.PNG';
import ecmc3 from './projects/ecommerce/3.PNG';
import ecmc4 from './projects/ecommerce/4.PNG';
import ecmc5 from './projects/ecommerce/5.PNG';
import ecmc6 from './projects/ecommerce/6.PNG';
import ecmc7 from './projects/ecommerce/7.PNG';
import ecmc8 from './projects/ecommerce/8.PNG';

import moff1 from './projects/mojoff/1.PNG';
import moff2 from './projects/mojoff/2.PNG';
import moff3 from './projects/mojoff/3.PNG';
import moff4 from './projects/mojoff/4.PNG';
import moff5 from './projects/mojoff/5.PNG';
import moff6 from './projects/mojoff/6.PNG';

function Portfolio(){
    const [modal, setModal] = useState({show: false, portfolio : {images: [], technologies: []}});
    const projects = [
        {name: 'Armonia', description: 'Project for web show', technologies: ['Wordpress', 'Woocommerce'], images: [Armonia1, Armonia2, Armonia3], url: 'http://www.armonia.rs'},
        {name: 'Rent a car Speed', description: 'Project for rent a car agency', technologies: ['AngularJS', 'PHP'], images: [rac1, rac2, rac3, rac4, rac5, rac6, rac7, rac8], url: 'https://github.com/matrix2305/rentacar'},
        {name: 'ABS - CPC', description: 'Project for Traffic security agency - CPC', technologies: ['Laravel', 'Jquery'], images: [cpc1, cpc2, cpc3, cpc4], url: false},
        {name: 'ABS - COC', description: 'Project for Traffic security agency - Homologation of imported vehicles', technologies: ['Laravel', 'React', 'Doctrine', 'MySQL'], images: [coc1, coc2, coc3, coc4, coc5, coc6, coc7], url: false},
        {name: 'MojOff', description: 'Platform for watching movies', technologies: ['Laravel', 'React', 'Doctrine', 'Elasticsearch', 'MySQL'], images: [moff1, moff2, moff3, moff4, moff5, moff6], url: 'https://mojoff.net'},
        {name: 'E-commerce', description: 'E-commerce platform', technologies: ['Laravel', 'React', 'Doctrine'], images: [ecmc1, ecmc2, ecmc3, ecmc4, ecmc5, ecmc6, ecmc7, ecmc8], url: false},
    ]
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
                <div className='projects'>
                    {
                        projects.map(project => {
                            return (
                                <div className='project m-3'>
                                    <img src={project.images[0]} alt='1' style={{width: '100%'}}/>
                                    <div className='project-details'>
                                        <h4 className='float-left text-white'>{project.name}</h4>
                                        <button className='btn btn-primary float-right' onClick={() => setModal({...modal, show: true, portfolio: project})}>Show</button>
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
                    <a href={modal.portfolio.url}><button disabled={!modal.portfolio.url} className='btn btn-primary'>See project</button></a>
                    <button className='btn btn-danger' onClick={() => setModal({...modal, show:false})}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Portfolio;