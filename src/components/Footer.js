import React from 'react'
import Github from "../assets/github.png";

function Footer() {
  return (
    <footer className='footer'>
      Copyright © 2023 {' '}
      <a href='https://github.com/tonybalde' target='_blank' rel="noreferrer">
        <img className="github-icon" src={Github} alt=""/>
      </a> Tony Baldessari
    </footer>
  )
}

export default Footer
