import React from 'react'
import Nav from './Nav';
import Slide_page2 from './Slide_page2';

const Page = () => {
  const name = window.location.hash.substring(1, ).split('%20');
  console.log(name.join(''));
  return (
    <div>
        <Nav />
        <Slide_page2 />
    </div>
  )
}

export default Page