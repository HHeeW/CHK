import styled from 'styled-components'
import { Login, PersonAdd, Search } from '@styled-icons/material'
import { Link } from 'react-router-dom';

// CSS
const Header = styled.div`
  height: 100px;
`
const FixBox = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  width:100%;
  background-color: #fff;
`
const TopNav = styled.div`
  margin: 0 auto;
  padding : 0;
  width: 1200px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`  
const LogoBox = styled.div`
  width: 20%;
  height 100%;
`
const MenuBox = styled.div`
  height: 100%;
  width:55%;
`
const Menu = styled.ul`
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;
`
const MovieBox = styled.li``
const TicketBox = styled.li``
const StoreBox = styled.li``
const EventBox = styled.li``

const Member = styled.div`
  height: 100%;
  width:20%;
  display:flex;
  justify-content:space-between;
  align-items: center;
  padding-right: 30px;
  cursor: pointer;
`
const LoginBox = styled.div``
const SignUpBox = styled.div`

  text-align:center;
`
const SerchBox = styled.div``



function Topnav() {
  return (
    <Header>
      <FixBox>
        <TopNav>  
          <LogoBox>
          <Link to={"/"}>
            <img src="H_images/logo.png" alt="logo"className='H_logo' />
          </Link>
          </LogoBox>
          <MenuBox>
            <Menu>
              <MovieBox>
                <Link to={"/"}> 영화</Link>
              </MovieBox>
              <TicketBox><Link to={"/ticket"}>예매</Link></TicketBox>
              <StoreBox><Link to={"/snack"}>스토어</Link></StoreBox>
              <EventBox><Link to={'/preview'}> 이벤트</Link></EventBox>
            </Menu>
          </MenuBox>
          <Member>
            <LoginBox><Link to="login">
              <p><Login size={30} /></p>
              로그인
              </Link>
            </LoginBox>
            <SignUpBox>
              <Link to="/join" > 
                <p><PersonAdd size={30} /></p>
                회원가입
              </Link>
            </SignUpBox>
            <SerchBox>
              <p><Search size={30} /></p>
              검색
            </SerchBox>
          </Member>
        </TopNav>
      </FixBox>
      </Header>
  )
}

export default Topnav