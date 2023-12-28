import React from 'react';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { baseURL } from '../db';
import axios from 'axios';


const Pop = ({setShowPopup, popupContent,setUpdateUI}) => {
    const [input, setInput] = useState(popupContent.text);

    const updateTask =()=> {
        axios.put(`${baseURL}/update/${popupContent.id}`,{task:input })
        .then((res) => {
            console.log(res.data);
            setUpdateUI((prevState) => !prevState);
            setShowPopup(false);
        });
    };
    
  return (
    <div className='backdrop' style={{width:'50%', textAlign:'center',margin:'auto', textDecoration:'underline'}}>
        <div className='popup' style={{backgroundColor:'lightgreen', justifyContent:'center', padding:'10px 20px'}}>
            <RxCross1 className='cross' onClick={() => setShowPopup(false)} style={{backgroundColor:'cyan'}} />
            <h5>Update Task</h5><br />

            <div className='popup__input_holder' >
                <input 
                type="text"
                 value={input}
                  placeholder='Update Task...'
                 onChange={(e) => setInput(e.target.value)}
                 />
                <button onClick={updateTask} style={{backgroundColor:'cornsilk'}}>Update</button>
            </div>
            </div>
            </div>
  )
}

export default Pop