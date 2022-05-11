import React, { useState } from 'react';
import './snack.css';
import Popcorn from './Popcorn';
import Drink from './Drink';
import Side from './Side';
import Combo from './Combo';
import FixBar from './FixBar';
import TopBar from './TopBar';
const Snack = () => {

  
  const [pview, setPview] = useState(true);
  const Pview = () =>{
      setPview(true)
      setAview(0)
      setOview(0)
      setRview(0)
  }

  const [aview, setAview] = useState(false);
  const Aview = () =>{
    setPview(0)
    setAview(true)
    setOview(0)
    setRview(0)
  }

  const [oview, setOview] = useState(false);
  const Oview = () =>{
    setPview(0)
    setAview(0)
    setOview(true)
    setRview(0)
  }
 
  const [rview, setRview] = useState(false);
  const Rview = () =>{
    setPview(0)
    setAview(0)
    setOview(0)
    setRview(true)
  }
 

  return (
    <>
    
     <TopBar /> 
    <div className="w_s-n">
      <div className="w_themoment">
        <img src="w_images/enjoy_the_moment.jpg"></img>
      </div>
        <h2><i class="fa-solid fa-circle"></i> snack : 맛있으면 0 칼로리~!</h2>
        <div className="w_snack-bar_box">
          <ul className="w_snack-bar">
            <li><button onClick={Pview}>팝콘</button>
                  <div className="w_rrr"> {(pview?
                        <Popcorn/>:
                        <></>
                        )}</div>
              </li>
              <i class="fa-solid fa-minus"></i>
              <li><button onClick={Aview}>음료</button>
              <div className="w_rrr">{(aview?
                            <Drink/>:
                            <></>
                            )}</div>
                  </li>
              <i class="fa-solid fa-minus"></i>
              <li><button onClick={Oview}>사이드</button>
              <div className="w_rrr">{(oview?
                            <Side/>:
                            <></>
                            )}</div>
              </li>
              <i class="fa-solid fa-minus"></i>
              <li><button onClick={Rview}>콤보 / 세트</button>
                  <div className="w_rrr"> {(rview?
                        <Combo/>:
                        <></>
                        )}</div>
              </li>
          </ul>
        </div>
        <FixBar/>
    </div>
    </>
      
    
  )
}

export default Snack