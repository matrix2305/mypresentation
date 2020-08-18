import React, {useEffect, useRef, useState} from "react";
import './Knowledge.css';
import php from './Icons/php.png'
import js from './Icons/js.png'
import mysql from './Icons/myslq.png'
import html from './Icons/html.png'
import css from './Icons/css.png'

function Knowledge(){
    const [knowledge] = useState([
        {name: 'PHP', desc: 'Design Patterns, OOP concepts, SOLID principals, Doctrine ORM, Eloquent(Laravel) ORM, Domain driven design(B-Layered, Hexagonal architecture), Clean code concepts, Laravel: events, queue, scheduler, mailer, facades, IOC, etc.' , frameworks: ['Laravel', 'Doctrine'] },
        {name: 'MySQL', desc: 'Relational concepts of (My)SQL databases.', frameworks: []},
        {name: 'JavaScript', desc: 'Design Patterns, ES 6, React: Hooks, Components, Ref, HOC, Context, Router, Redux with Slice,  etc.', frameworks: ['React', 'Redux', 'AngularJS']},
        {name: 'HTML', desc: 'Block, inline elements, tags, etc.', frameworks: []},
        {name: 'CSS', desc: 'I have medium know in CSS, animations, grid, flex, etc.', frameworks: ['Bootstrap']},
    ])

    const [output, setOutput] = useState({name:'', desc:'', frameworks: []});

    useEffect(() => {
        setOutput(knowledge[0])
    }, [])


    const showIcon = e => {
        e.target.style.opacity = 0.8;
    }

    const leaveIcon = e => {
        e.target.style.opacity = 0.5;
    }

    const activeIcon = e => {
        let icons = document.querySelectorAll('.icon');
        for (let i = 0; i<icons.length; i++){
            icons[i].classList.remove('rotated')
            icons[i].style.opacity = 0.5;
        }
        let id = e.target.id;
        setOutput(knowledge[id])
        e.target.classList.add('rotated')
    }

    return(
        <div className='card pl-0 pr-0 rounded-0' id='skills'>
            <div className='card-header text-center'>
                <h2>My skills </h2>
            </div>
            <div className='card-body pt-0 pb-0'>
                <div className='row'>
                    <div>
                        <div className='text-center mx-auto'>
                            <img src={php} id='0' onClick={event => activeIcon(event)} onMouseLeave={event => leaveIcon(event)} onMouseEnter={event => showIcon(event)} className='icon rotated' width='80px' />
                        </div>
                        <div className='text-center mx-auto'>
                            <img src={mysql} id='1' onClick={event => activeIcon(event)} onMouseLeave={event => leaveIcon(event)} onMouseEnter={event => showIcon(event)}  className='icon' width='80px' />
                        </div>
                        <div className='text-center mx-auto'>
                            <img src={js} id='2' onClick={event => activeIcon(event)} onMouseLeave={event => leaveIcon(event)} onMouseEnter={event => showIcon(event)} className='icon' width='80px' />
                        </div>
                        <div className='text-center mx-auto'>
                            <img src={html} id='3' onClick={event => activeIcon(event)} onMouseLeave={event => leaveIcon(event)} onMouseEnter={event => showIcon(event)} className='icon' width='80px' />
                        </div>
                        <div className='text-center mx-auto'>
                            <img src={css} id='4' onClick={event => activeIcon(event)} onMouseLeave={event => leaveIcon(event)} onMouseEnter={event => showIcon(event)} className='icon' width='80px' />
                        </div>
                    </div>
                    <div className='col-10 desc desc-effect'>
                        <div className='col-6 offset-4 mt-5'>
                            <h3>{output.name}</h3>
                            <p>{output.desc}</p>
                            <h5>Frameworks: </h5>
                            <ul>
                                {
                                    output.frameworks.map((fw, index) => <li key={index}>{fw}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Knowledge;