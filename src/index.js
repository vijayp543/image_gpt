import React from 'react';
import ReactDOM from 'react-dom/client';
import { useRef, useState } from 'react';

const Bot = () => {
    const [name, setName] = useState("Car")
    const [img, setImg] = useState('https://source.unsplash.com/1600x800?car')
    const data = useRef()

    const first = "https://source.unsplash.com/1600x800?"
    function image() {
        // console.log("image generating .....")
        console.log(first + data.current.value)
        setImg(first + data.current.value)
        setName(data.current.value)
    }

    return <div className='bot-container'>
        <div className='left-container'>

            <div className='left-container-content'>
                <h1>JHC Bot</h1>
                <button className='new-btn'>+ New</button>
            </div>

        </div>
        <div className='right-container'>
            <div className='right-container-content'>
                <div className="alert alert-warning alert-dismissible fade show bot-alert" role="alert">
                    <strong>DON'T Search!</strong> Any Abusing and pornography content.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

                <div className='solution'>
                    <h1>{name}</h1>
                    <img src={img}></img>
                </div>

                <div className='chat-container'>
                    <input type="text" placeholder='Ex:Boy,Girl' ref={data}></input>
                    <button onClick={image}>Search</button>
                </div>
            </div>
        </div>
    </div>
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bot />);


