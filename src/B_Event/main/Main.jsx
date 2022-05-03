import './main.css';
 import React, { Component } from 'react'
 import Preview from '../page/Preview';
 import Reserve from '../page/Reserve';
 import Discount from '../page/Discount';
 
 export default class Main extends Component {
   render() {
     return (
       <>
       <div className='b_container b_main'>
           <h2>EVENT</h2>
           <span class="material-symbols-outlined b_pause">play_pause</span>
       <div className='b_banner'>
           <div className='b_box'> 
            <Preview></Preview>
            <Reserve />
            <Discount />
           </div>
       </div>
       </div>
       </>
     )
   }
 }
 