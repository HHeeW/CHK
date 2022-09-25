import React, {useState} from 'react'
import styled from "styled-components"

const Container = styled.div`
    position: absolute;
    width: 800px;
    height: 400px;
    background-color: white;
    z-index: 100;
    top: 100px;
    left: 100px;
`
const Header = styled.div`
    height: 80px;
    display: flex;
    border-bottom: 1px solid black;
`
const Left = styled.div`
    flex: 0 0 70%;
    font-size: 35px;
    padding: 15px;
`
const Right = styled.div`
    flex: 0 0 30%;
    display: flex;
    justify-content: end;

    button{
        width: 50px;
        height: 30px;
        font-weight: bold;
    }
`
const Main = styled.div`
    height: 320px;
    padding: 15px;
    border-bottom: 1px solid black;
`
const Title = styled.div``
const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    div{
        width: 110px;
        height: 100px;
        border: 1px solid black;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        margin: 5px;
        box-shadow: 3px 3px 1px 1px black;
    }
`
const PopUp = () => {
    const [display, setDisplay] = useState(false);

    const scroll = () => {
        window.scroll({top:(0, 2200), behavior: 'smooth'});
    }

  return (
    <Container style={{display: display ? "none" : "block"}}>
        <Header>
            <Left>포트폴리오를 위한 사이트 입니다.</Left>
            <Right><button onClick={()=>setDisplay(!display)}>닫기</button></Right>
        </Header>
        <Main>
            <Title>사용된 프레임워크 및 라이브러리</Title>
            <Content>
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>Jquery</div>
                <div>React</div>
            </Content>
        </Main>
    </Container>
  )
}

export default PopUp