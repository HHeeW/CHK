import React, {useState} from 'react'
import Nav from './Nav';
import Header from './Header';
import { ThemeContext } from '../context/ThemeContext';

const Page = () => {
  const [hi, setHi] = useState('test');
  return (
    <>
    <ThemeContext.Provider value={{hi, setHi}}>
    <Header />
    <Nav />
    </ThemeContext.Provider>
    </>
  )
}

export default Page