import React, {useEffect, useState} from "react";
import './Masthead.css';

function Masthead(){
    const [initContent, setInitContent] = useState({
        title: '',
        description: ''
    })

    useEffect(() => startCountingInitContent(), []);

    const startCountingInitContent = () => {
        let title = "Hi, I'm Srdjan Radosavljevic"
        let description = "Junior Full Stack Web developer"
        let splitTitle = title.split('')
        let splitDesc = description.split('')
        let titleInt = setInterval(() => {
            if (splitTitle.length>0){
                setInitContent({...initContent, title: initContent.title += splitTitle.shift()})
            }else {
                clearInterval(titleInt)
            }
        }, 150)
        let descInt = setInterval(() => {
            if (splitDesc.length > 0){
                setInitContent({...initContent, description: initContent.description += splitDesc.shift()})
            }else {
                clearInterval(descInt)
            }
        }, 150)
    }

    return(
        <div id='top' className='masthead d-flex align-items-center justify-content-center'>
            <div className='col-md-5 text-padding text-white'>
                <div className='front-text text-center p-2'>
                    <h2>{initContent.title}</h2>
                    <h4>{initContent.description}</h4>
                </div>
            </div>
        </div>
    )
}

export default Masthead;