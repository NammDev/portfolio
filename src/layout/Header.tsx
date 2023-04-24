import { Link } from 'react-router-dom'
import Logo from 'src/assets/img/Logo'
import pathConst from 'src/constants/path'

function Header() {
  return (
    <div
      className='container flex w-full justify-between bg-[#F3F6F6] py-5 dark:bg-black lg:bg-transparent lg:px-0 lg:pt-[50px] lg:dark:bg-transparent'
      data-aos='fade'
    >
      <div className='flex w-full justify-between  px-4'>
        <Link to={pathConst.home}>
          <Logo />
        </Link>
        <div className='flex items-center'>
          <span className='flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-white text-black transition-all duration-300 ease-in-out hover:bg-[#ef4060] hover:text-white lg:h-[50px] lg:w-[50px]'>
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth={2}
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              className=' text-3xl '
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
            </svg>
          </span>
          <span className='ml-3 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#ef4060] text-3xl text-white dark:text-white lg:hidden '>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth={0}
              viewBox='0 0 1024 1024'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z' />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
