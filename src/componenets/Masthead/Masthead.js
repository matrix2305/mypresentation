import React, {useEffect, useState} from "react";
import './Masthead.css';
import NavBar from "../NavBar/NavBar";

function Masthead(){
    const [initContent, setInitContent] = useState({
        title: '',
        description: ''
    })

    useEffect(() => {
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
    }, [])

    return(
        <div id='top' className='masthead'>
            <div className='col-4 mx-auto text-padding text-white'>
                <div className='front-text text-center p-3'>
                    <div>
                        <h2>{initContent.title}</h2>
                        <h4>{initContent.description}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Masthead;