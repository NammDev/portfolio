import { Link } from 'react-router-dom'
import { FiMoon, FiSun } from 'react-icons/fi'
import Logo from 'src/assets/img/Logo'
import pathConst from 'src/constants/path'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

interface Props {
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ menuOpen, setMenuOpen }: Props) {
  const light = false
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
          {light ? (
            <span className='flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-white text-black transition-all duration-300 ease-in-out hover:bg-[#ef4060] hover:text-white lg:h-[50px] lg:w-[50px]'>
              <FiMoon className='text-2xl' />
            </span>
          ) : (
            <span className='flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#4D4D4D] transition-all duration-300 ease-in-out hover:bg-[#ef4060] lg:h-[50px] lg:w-[50px]'>
              <FiSun className='text-2xl text-white' />
            </span>
          )}
          {!menuOpen ? (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='ml-3   flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#ef4060] text-3xl text-white dark:text-white lg:hidden '
            >
              <AiOutlineMenu />
            </button>
          ) : (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='visible ml-3 flex h-[40px]  w-[40px] items-center justify-center rounded-full bg-[#ef4060] text-3xl text-white opacity-100 lg:invisible lg:opacity-0 '
            >
              <AiOutlineClose />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
