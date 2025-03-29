import React from 'react'
import 'animate.css';
import ZanzHeader from '../components/Zanzibar/ZanzHeader';
import ZanzHero from '../components/Zanzibar/ZanzHero';
import ZanzCards from '../components/Zanzibar/ZanzCards';

const Zanzibar = () => {
  return (
  <>
  <ZanzHeader title={"Zanzibar Tours"} />
  <ZanzHero />
  <ZanzCards />
  </>
  )
}

export default Zanzibar;