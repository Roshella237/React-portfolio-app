import React from 'react'
import './header.css'
import CTA from './CTA' //here we import the CTA component inside our header
import IMG from '.././../assets/IMG2.jpg'
import HeaderSocial from './HeaderSocial' //import of headerSocial component
export const Header = () => {
  return (
    <header>
<div className='container header__container'>
<h5>Hello I'm</h5>
<h1>Muyang Roshella</h1>
<h5 className='text-light'>Frontend Web Developer</h5>
<CTA/> 
{/* here we are using the imported CTA component */}
<HeaderSocial />
{/* same here */}
<div className='my_image'>


 <img src= {IMG} alt="Rosh..." />

</div>
<a href='#contact' className='scroll__down'>Scroll down</a>
</div>
</header>
  )
}

export default Header;