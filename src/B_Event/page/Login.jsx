import React from 'react'
import $ from 'jquery';
import './login.css';

function Login() {
  const confirm = ()=>{
    let a = document.getElementById('userid').value;
    let b = document.getElementById('userpw').value;
    if(a == "" || b == ""){
        alert("아이디와 비밀번호를 확인해주세요!");
    }
  }


  return (
    <>
    <div className='b_container'>
  
    <div className='b_login'>
      <h1 className='b_text-h1'>로그인</h1>
    <form className='b_form'>
      <label>아이디</label>
      <br />
      <input type="text" name="userId" id="userid" placeholder='아이디를 입력하세요.' />
      <br></br>
      <label>비밀번호</label>
      <br />
      <input type="password" name="userpw" id="userpw" placeholder='비밀번호를 입력하세요.' />
      <br />
      <label className='b_remember'><input type="checkbox" id='b_checkbox' name='remember'/>Remember Me?</label>  
    <div className='b_btnbox'>
    <a href="#" className='b_text-right'>Forget password?</a>
    <button type='submit' className='b_sub b_btn' onClick={confirm} >로그인</button>
    </div>
  </form>
<div className='snsIcon'>
    <a href="#" className='b_face'><i class="fa-brands fa-facebook"></i></a>
    <a href="#" className='b_google'><img src="b_images/insta.png" alt="icon" /></a>
    <a href="#" className='b_google'><img src="b_images/google.jpg" alt="icon" /></a>
    <a href="#"  className='b_twitter'><i class="fa-brands fa-twitter"></i></a>
   </div>
   <p  className='b_text'><a href="#">Create your account!</a></p>
</div>
</div> 

    </>
  )
}

export default Login
