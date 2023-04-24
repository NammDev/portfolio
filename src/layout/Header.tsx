function Header() {
  return (
    <div
      className='aos-init aos-animate container mx-auto flex w-full max-w-[1280px] justify-between bg-[#F3F6F6] py-5 dark:bg-black lg:bg-transparent lg:px-0 lg:pt-[50px] lg:dark:bg-transparent'
      data-aos='fade'
    >
      <div className='flex w-full justify-between  px-4'>
        <a href='/'>
          <img
            className='h-[26px] lg:h-[32px]'
            src='data:image/png;base64,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'
            alt='logo'
          />
        </a>
        <div className='flex items-center'>
          <span className='flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-white text-black transition-all duration-300 ease-in-out hover:bg-[#ef4060] hover:text-white lg:h-[50px] lg:w-[50px]  '>
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
          <span className='ml-3   flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#ef4060] text-3xl text-white dark:text-white lg:hidden '>
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
