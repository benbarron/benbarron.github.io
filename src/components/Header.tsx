import React, { Fragment, useState } from 'react';
import { useWindowSize } from 'react-use';
interface Props {}

export const Header = (props: Props) => {
  const { width } = useWindowSize();

  const [show, setShow] = useState(false);

  const toggleShow = (e: any) => setShow(!show);

  return (
    <div className='header'>
      <div className='logo'>
        <img src='/images/logo.png' alt='logo' />
      </div>
      {width <= 768 && (
        <Fragment>
          <div className={`menu-btn ${show && 'transform'}`} onClick={toggleShow}>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
          </div>
        </Fragment>
      )}
      <nav className={`${width <= 768 ? 'nav-mobile' : 'nav-full'} ${show ? 'show' : 'hide'}`}>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/exp'>Experience</a>
          </li>
          <li>
            <a href='/edu'>Education</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
          <li>
            <a className='resume-btn' href='/resume.pdf'>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
