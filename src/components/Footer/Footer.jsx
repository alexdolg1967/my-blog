import React from 'react'

import vk from '../../img/icons/vk.svg'
import insta from '../../img/icons/instagram.svg'
import git from '../../img/icons/gitHub.svg'
import linkIn from '../../img/icons/linkedIn.svg'

import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!"><img src={vk} alt="Link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"><img src={insta} alt="Link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"><img src={git} alt="Link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"><img src={linkIn} alt="Link" /></a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2022 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer