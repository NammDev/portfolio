import { NavLink } from 'react-router-dom'
import AboutSvg from 'src/assets/svg/AboutSvg'
import BlogsSvg from 'src/assets/svg/BlogsSvg'
import ContactSvg from 'src/assets/svg/ContactSvg'
import ResumeSvg from 'src/assets/svg/ResumeSvg'
import WorksSvg from 'src/assets/svg/WorksSvg'
import pathConst from 'src/constants/path'

const linkList = [
  { svg: <AboutSvg />, label: 'About', to: pathConst.home },
  { svg: <ResumeSvg />, label: 'Resume', to: pathConst.resume },
  { svg: <WorksSvg />, label: 'Works', to: pathConst.works },
  { svg: <BlogsSvg />, label: 'Blogs', to: pathConst.blogs },
  { svg: <ContactSvg />, label: 'Contact', to: pathConst.contact }
]

function HeaderLink() {
  const linkListDisplay = linkList.map((link, index) => (
    <NavLink
      key={index}
      className={({ isActive }) =>
        isActive
          ? 'mx-2.5 flex h-20 w-full cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#F3F6F6] bg-gradient-to-r from-[#FA5252] to-[#DD2476] font-poppins text-xtiny font-medium text-[#44566C] text-white transition-all duration-300 ease-in-out dark:text-[#A6A6A6]'
          : 'mx-2.5 flex h-20 w-full cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#F3F6F6] from-[#FA5252] to-[#DD2476] font-poppins text-xtiny font-medium text-[#44566C] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:text-white dark:bg-[#212425] dark:text-[#A6A6A6] dark:hover:text-white'
      }
      to={link.to}
    >
      <span className=' mb-1 text-xl'>{link.svg}</span> {link.label}
    </NavLink>
  ))
  return (
    <header className='mb-10 ml-auto hidden h-[144px] rounded-[16px] bg-white p-[30px] dark:bg-[#111111] lg:block lg:w-[526px]'>
      <nav className='hidden lg:block'>
        <ul className='flex'>{linkListDisplay}</ul>
      </nav>
    </header>
  )
}

export default HeaderLink
