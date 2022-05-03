import React, { useState } from 'react';
import './footer.css';



const Footer = () => {

    const [inputValue, setInputValue] = useState('');
    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };

  const [selectValue, setSelectValue] = useState('');
  const onChangeSelect = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="w_footer">
        <div className="w_footer-con">
            <div className="W_logo">
                <img src="w_images/logo.png"></img>
            </div>
            
           <div className="w_text">
                <p>회원약관 <i class="fa-solid fa-minus"></i> 개인정보처리방침 <i class="fa-solid fa-minus"></i> 회원안내 <i class="fa-solid fa-minus"></i> 채용안내 <i class="fa-solid fa-minus"></i> 광고/임대문의 <i class="fa-solid fa-minus"></i> 기업정보</p>
                <p>경기도 김포시 김포한강로 CHK타워 10층 <i class="fa-solid fa-minus"></i> 고객센터 1544-1234</p>
                <p>임원진 CHK(주) <i class="fa-solid fa-minus"></i> 사업자등록번호 123-45-67890 <i class="fa-solid fa-minus"></i> 개인정보 보호 최고 책임자 CHK(주)</p>
                <p>copyright &#169; CHK cinema all right reserved.</p>
            </div>
        

            <div className="w_office">
                <select value={selectValue} onChange={onChangeSelect}>
                    <option value="A">=== 계열사 바로 가기 ===</option>
                    <option value="B">CHK 전자</option>
                    <option value="C">CHK 식품</option>
                    <option value="D">CHK 생명</option>
                    <option value="F">CHK 뷰티</option>
                </select>  
                <button type="submit" value={inputValue} onChange={onChangeInput}>Go!</button>
            </div>
        </div>
        
     
    
    </div>
  )
}

export default Footer