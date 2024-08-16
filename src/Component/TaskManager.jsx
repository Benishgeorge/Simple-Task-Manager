

import React,{useState,useEeffect} from react;
import axios from axios;

import ('./style.css')

const [tittle,settitle] = useState('')
const [description,setdespription] = useState('')
const [date,setdate] = useState('')


function app (){
    return(
        <div className='task'>
        <h1>Task Manager</h1>
        <p>Simple Task Manager</p>
        </div>

        

)}
<div ClassName ='Task-manager'>
title:&nbsp;
<input>type = text value =String </input>
<div ClassName ='Task-manager'>

description:&nbsp;
<input>type = text value =String </input>
</div>

<div ClassName ='Task-manager'>
datee:&nbsp;
<input>type = text value =date </input>
</div>
</div>


export default App;

