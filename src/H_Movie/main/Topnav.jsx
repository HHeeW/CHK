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
const Logo = styled.img`
  margin-left: 0;
  width:70%;
  height:100px;
  background: url(H_images/logo.png) no-repeat center;
  background-size: contain;
  border: none;
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
const Movie = styled.a``
const Ticket = styled.a``
const Store = styled.a``
const Event = styled.a``

const Member = styled.div`
  height: 100%;
  width:25%;
  display:flex;
  justify-content:flex-end;
  align-items: center;
  padding-right: 30px;
  cursor: pointer;
`
const LoginBox = styled.div`
  display:flex;
  justify-content:column;
  align-items: center;
`
const SignUpBox = styled.div`
`
const SerchBox = styled.div`

`



function Topnav() {
  return (
    <Header>
      <FixBox>
        <TopNav>  
          <LogoBox>
          <Link to={"/"}><Logo/></Link>
          </LogoBox>
          <MenuBox>
            <Menu>
              <MovieBox>
                <Link to={"/"}> 영화</Link>
              </MovieBox>
              <TicketBox><Ticket href='#'>예매</Ticket></TicketBox>
              <StoreBox><Store href='#'>스토어</Store></StoreBox>
              <EventBox><Link to={'/preview'}> 이벤트</Link></EventBox>
            </Menu>
          </MenuBox>
          <Member>
            <LoginBox><Link to="login">
              <Login size={40} />
              로그인
              </Link>
            </LoginBox>
            <SignUpBox>
              <PersonAdd size={40} />
              <Link to="/join" > 회원가입</Link>
            </SignUpBox>
            <SerchBox>
              <Search size={40} />
              검색
            </SerchBox>
          </Member>
        </TopNav>
      </FixBox>
      </Header>
  )
}

export default Topnav