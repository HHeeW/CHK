import styled from 'styled-components'
import { Login, PersonAdd } from '@styled-icons/material'
import { Link } from 'react-router-dom';
import Movie_Search from'./Movie_Search';
// CSS
const Header = styled.div`
  height: 90px;
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
  margin: 10px auto 0px;
  padding : 0;
  width: 1200px;
  height: 80px;
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
  flex-direction: column;
  padding:10px 0px;
  position:relative;
`
const LoginBox = styled.div`
  cursor: pointer;
`
const SignUpBox = styled.div`
  cursor: pointer;
  text-align:center;
`
const Flex_SB = styled.div`
  width:100%;
  display:flex;
  justify-content: space-around;
  align-items: center;
`

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
            <Flex_SB>
              <LoginBox><Link to="login">
                <Login size={30} />
                로그인
                </Link>
              </LoginBox>
              <SignUpBox>
                <Link to="/join" > 
                  <PersonAdd size={30} />
                  회원가입
                </Link>
              </SignUpBox>
            </Flex_SB>
            <Flex_SB>
              <Movie_Search />
            </Flex_SB>
          </Member>
        </TopNav>
      </FixBox>
      </Header>
  )
}

export default Topnav