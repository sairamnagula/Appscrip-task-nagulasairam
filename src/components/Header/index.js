import {CiSearch} from 'react-icons/ci'
import {GiSunflower} from 'react-icons/gi'
import {GoHeart} from 'react-icons/go'
import {IoBagRemoveOutline} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'

import './index.css'

const Header = () => (
  <>
    <div className="nav-bg-container">
      <GiSunflower />
      <h1>LOGO</h1>
      <div>
        <CiSearch className="right-info" />
        <GoHeart className="right-info" />
        <IoBagRemoveOutline className="right-info" />
        <CgProfile className="right-info" />
      </div>
    </div>
    <nav className="nav-container">
      <ul className="ul-list">
        <li className="link-li">
          <a href="#shop">Shop</a>
        </li>
        <li className="link-li">
          <a href="#skills">Skills</a>
        </li>
        <li className="link-li">
          <a href="#stories">Stories</a>
        </li>
        <li className="link-li">
          <a href="#contact">ContactUs</a>
        </li>
      </ul>
    </nav>
    <hr />
  </>
)

export default Header
