import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserAlt,
  faMagnifyingGlass,
  faKeyboard,
  faMicrophone,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';

import { Tooltip } from 'flowbite-react';
import { useLayoutEffect, useState } from 'react';

/**
 * Header
 */
const Header = () => {
  return (
    <div className='flex justify-between inner-spacing text-gray-500 dark:text-gray-200'>
      <div className='header-group'>
        <a href='#' className='mx-2 hover-underline'>
          Google 정보
        </a>
        <a href='#' className='mx-2 hover-underline'>
          스토어
        </a>
      </div>
      <div className='header-group'>
        <a href='#' className='mx-2 hover-underline'>
          Gmail
        </a>
        <a href='#' className='ml-2 mr-3 hover-underline'>
          이미지
        </a>
        <a href='#' className='ml-3 mr-1 icon-link'>
          <span className='material-symbols-outlined'>apps</span>
        </a>
        <a href='#' className='icon-link'>
          <FontAwesomeIcon icon={faUserAlt} className='text-xl' />
        </a>
      </div>
    </div>
  );
};

/**
 * SearchMain
 */
const SearchMain = ({ className }) => {
  return (
    <main
      className={`flex flex-col items-center pt-[160px] px-5 relative${
        className && ` ${className}`
      }`}
    >
      <div className='absolute left-[calc(50%_+_150px)] top-[150px] text-xl text-gray-400 dark:text-gray-500'>
        CLONE
      </div>
      <div className='text-[88px] font-[600] mb-5 tracking-tighter'>
        <span className='dark:text-gray-100 text-blue-500'>G</span>
        <span className='dark:text-gray-100 text-red-500'>o</span>
        <span className='dark:text-gray-100 text-yellow-300'>o</span>
        <span className='dark:text-gray-100 text-blue-500'>g</span>
        <span className='dark:text-gray-100 text-green-500'>l</span>
        <span className='dark:text-gray-100 text-red-500'>e</span>
      </div>
      <SearchInputBar />
      <div className='mt-7 flex gap-3'>
        <button className='btn'>Google 검색</button>
        <button className='btn'>I'm Feeling Lucky'</button>
      </div>
    </main>
  );
};
const SearchInputBar = () => {
  return (
    <div className='search-input-bar'>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className='text-sm text-gray-400 ml-1'
      />

      <input className='outline-none flex-1 mx-4 dark:text-gray-300 bg-transparent' />

      <Tooltip content='입력 도구' placement='bottom'>
        <FontAwesomeIcon
          icon={faKeyboard}
          className='text-[16px] text-gray-400 mx-3 cursor-pointer'
        />
      </Tooltip>
      <Tooltip content='음성 검색' placement='bottom'>
        <FontAwesomeIcon
          icon={faMicrophone}
          className='text-[16px] text-gray-400 mx-3 cursor-pointer'
        />
      </Tooltip>
      <Tooltip content='이미지로 검색' placement='bottom'>
        <FontAwesomeIcon
          icon={faCamera}
          className='text-[16px] text-gray-400 mx-3 cursor-pointer'
        />
      </Tooltip>
    </div>
  );
};

/**
 * Footer
 */
const Footer = () => {
  return (
    <div className='bg-gray-100 text-gray-500 dark:bg-zinc-900 dark:text-gray-300'>
      <div className='inner-spacing text-sm'>대한민국</div>
      <hr className='bg-gray-300 h-px dark:bg-zinc-700 border-none' />
      <div className='flex justify-between max-lg:justify-around inner-spacing'>
        <div className='footer-group'>
          <a href='#'>광고</a>
          <a href='#'>비즈니스</a>
          <a href='#'>검색의 원리</a>
        </div>
        <div className='footer-group'>
          <a href='#'>개인정보처리방침</a>
          <a href='#'>약관</a>
          <a href='#'>설정</a>
        </div>
      </div>
    </div>
  );
};

/**
 * App
 */
function App() {
  const [darkMode, setDarkMode] = useState(true);

  const onClick = () => {
    setDarkMode((p) => !p);
  };

  useLayoutEffect(() => {
    const htmlEl = document.querySelector('html');
    if (!htmlEl) return;

    if (darkMode) {
      htmlEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <section
      className='w-screen h-screen flex flex-col dark:bg-dark-800'
      onClick={onClick}
    >
      <Header />
      <SearchMain className='flex-1' />
      <Footer />
    </section>
  );
}

export default App;
