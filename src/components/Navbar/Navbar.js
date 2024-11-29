import React from 'react'
import '../../styles/Navbar.css'
import logo from '../../assets/PMLogo.png'

const Navbar = () => {

  // document.getElementById('Burger').addEventListener('click', function() {
  //   document.getElementById('menu-list').classList.toggle('active');
  // });

  return (
    <div className='Navbar'>
      <div className='container'>
        {/* <div className='Burger' id='Burger'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div> */}
        <img src={logo} alt='Logo pour l"exercice' className='logo' />
        <ul className='menu-list' id='menu-list'>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Projets</a></li>
            <li><a href='/'>A propos</a></li>
        </ul>
        <a href='/' className='contact'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
