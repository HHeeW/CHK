import React from 'react'
import './join.css';
import $ from 'jquery';

export default function Join() {
  return (
      <>
  
    <div className='b_container'>  
    <h1 className='b_text'>회원가입</h1>
    <div className='b_join'>
   <div className='b_agree'>
    <h3>약관동의</h3>
      <p>회원가입 약관에 모두 동의합니다.</p>
      <p>이용약관 동의 <span className='b_red'>(필수)</span></p>
      <textarea name="" id="" cols="55" rows="10">
  제1조(목적) 이 약관은 업체 회사(전자상거래 사업자)가 운영하는 업체 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.
 
 ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」

제2조(정의)

 ① “몰”이란 업체 회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.

 ② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
 </textarea>
 <p><input type="checkbox" className='b_check'/>동의합니다.</p>
<p>개인정보 수집 및 이용 동의 <span className='b_red'>(필수)</span></p>
<textarea name="" id="" cols="55" rows="10">
      개인정보처리방침

[차례]
1. 총칙
2. 개인정보 수집에 대한 동의
3. 개인정보의 수집 및 이용목적
4. 수집하는 개인정보 항목
5. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
6. 목적 외 사용 및 제3자에 대한 제공
7. 개인정보의 열람 및 정정
8. 개인정보 수집, 이용, 제공에 대한 동의철회
9. 개인정보의 보유 및 이용기간
10. 개인정보의 파기절차 및 방법
11. 아동의 개인정보 보호
12. 개인정보 보호를 위한 기술적 대책
13. 개인정보의 위탁처리
14. 의겸수렴 및 불만처리
15. 부 칙(시행일) 
1. 총칙

본 업체 사이트는 회원의 개인정보보호를 소중하게 생각하고, 회원의 개인정보를 보호하기 위하여 항상 최선을 다해 노력하고 있습니다. 
1) 회사는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」을 비롯한 모든 개인정보보호 관련 법률규정을 준수하고 있으며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.
</textarea>
<p><input type="checkbox" className='b_check' />동의합니다.</p>

</div>

    <form className='b_form2'>
      <h3>회원정보 입력</h3>
      <div>
        <label>이름</label>
      <input type="text" name="userId" id="name" placeholder='이름을 입력하세요.' />
      </div>
      <div>
      <label>법정생년월일</label>
      <input type="text" name="userId" id="user" placeholder='6자로 입력해주세요' />
      </div>
      <div>
      <label>휴대전화 </label>
      <input type="tel" name="userId" id="userphone" placeholder='010-0000-0000' />
      </div>
      <div>
      <label>아이디</label>
      <input type="text" name="userId" id="userid" placeholder='아이디를 입력하세요.' />
      </div>
      <div>
      <label>비밀번호</label>
      <input type="password" name="userpw" id="userpw" placeholder='비밀번호를 입력하세요.' />
      </div>
      <div>
      <label>비밀번호 확인</label>
      <input type="password" name="usercheckpw" id="userchpw" placeholder='비밀번호를 입력하세요.' />
      </div>
      <div>
      <label>성별</label>
      <label className='b_sex'><input type="checkbox" id='b_checkbox2'  name='remember'/>남성</label>  
      <label className='b_sex'><input type="checkbox" id='b_checkbox2' name='remember'/>여성</label>
      </div>
      <div>
      <label>이메일</label>
      <input type="eamil" placeholder='abcdef@email.com'/>
      </div>
    <div className='b_btnbox2'>
    <button type='submit' className='b_sub b_btn' >가입하기</button>
    </div>
  </form>
  </div>
  </div>
  </>
  )
}
