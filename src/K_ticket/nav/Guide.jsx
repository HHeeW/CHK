import React from 'react'
import './guide.css';

const test = ({guidedisplay, setGuidedisplay}) => {
  return (
    <div>
       <div className='k-slidebox3' style={{display: guidedisplay ? 'none' : 'block'}}>
           <div className='k-slidebox3-container'>
             <div className='k-slidebox3-top'>관람 할인 안내</div>
             <div className='k-slidebox3-middle'>할인안내</div>
             <div className='k-slidebox3-bottom'>
                <div>심야 할인 | 극장별 심야할인 이벤트는 각 극장에 문의</div>
                <div>청소년 할인 | 만 18세 미만을 증명할수 있는 신분증 제시</div>
                <div><span></span>(만 4세 이상 ~ 만 18세 미만의 학생 또는 청소년(어린이)에 한함)</div>
             </div>
             <div className='k-slidebox3-buttonbox'>
              <div><button onClick={()=>{ setGuidedisplay(!guidedisplay); }}>확인</button></div>
              <div><button onClick={()=>{ setGuidedisplay(!guidedisplay); }}>취소</button></div>
             </div>
           </div>
       </div>
    </div>
  )
}

export default test