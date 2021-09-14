import React from "react";
import './AboutMe.css';

function AboutMe(){
    return(
        <div className='card m-0 rounded-0 border-bottom-0' id='aboutMe'>
            <div className='card-header text-center'>
                <h2>About me</h2>
            </div>
            <div className='card-body text-center'>
                <p>Hi, my name is Srdjan and surname Radosavljevic, I was born in Paracin and I currently living in Belgrade, I'm 22 years old.</p>
                <p>I want to change my life, improve my carer and my knowledge.</p>
                <p>I finished high 'Mechanical-electrical engineering school' in Paracin and ITAcademy in Zemun, Belgrade in generation 2019/20.</p>
                <p>I'm showed interesting for computer science and programming yet since an early age.</p>
                <p>My English level is a B1.</p>
                <h3>My work experience:</h3>
                <div className=''>
                    <div className='experiences'>
                        <div className='card m-1 rounded-0'>
                            <div className='card-header'>
                                <h5>Primart D.O.O</h5>
                            </div>
                            <div className='card-body'>
                                <p>I worked at Primart D.O.O as IT, Digital marketing manager for sales Turkish confection on Serbian market as Armonia Store.</p>
                            </div>
                            <div className='card-footer'>
                                <p><b>Period: </b>August 2017 - May 2018</p>
                            </div>
                        </div>
                        <div className='card m-1 rounded-0'>
                            <div className='card-header'>
                                <h5>PEKM Kabeltechnik s.r.o</h5>
                            </div>
                            <div className='card-body'>
                                <p>I worked at PEKM Kabeltechnik in Czech Republic, Liberec as assembler for cables of auto-industry for Skoda, Caterpillar, Bobcat etc.</p>
                            </div>
                            <div className='card-footer'>
                                <p><b>Period: </b>March 2019 - June 2019</p>
                            </div>
                        </div>
                        <div className='card m-1 rounded-0'>
                            <div className='card-header'>
                                <h5>Infogram DOO</h5>
                            </div>
                            <div className='card-body'>
                                <p>I worked at Infogram DOO in Belgrade. I'm worked on projects for MCF, Traffic Safety Agency and on domestic e-commerce. I took part in the projection of the architecture and project management.</p>
                            </div>
                            <div className='card-footer'>
                                <p><b>Period: </b>August 2020 - currently</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;