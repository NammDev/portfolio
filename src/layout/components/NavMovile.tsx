import { FiCodesandbox } from 'react-icons/fi'
import { FaBlogger, FaRegUser } from 'react-icons/fa'
import { CgNotes } from 'react-icons/cg'
import { RiContactsBookLine } from 'react-icons/ri'
import pathConst from 'src/constants/path'
import { NavLink, useLocation } from 'react-router-dom'

const menuItemList = [
  {
    id: '01',
    name: 'About',
    link: pathConst.home,
    icon: <FaRegUser />
  },
  {
    id: '02',
    name: 'Resume',
    link: pathConst.resume,
    icon: <CgNotes />
  },
  {
    id: '03',
    name: 'Works',
    link: pathConst.works,
    icon: <FiCodesandbox />
  },
  {
    id: '04',
    name: 'Blogs',
    link: pathConst.blogs,
    icon: <FaBlogger />
  },
  {
    id: '05',
    name: 'Contact',
    link: pathConst.contact,
    icon: <RiContactsBookLine />
  }
]

interface Props {
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function NavMobile({ menuOpen, setMenuOpen }: Props) {
  const a = useLocation()
  return (
    <nav className={`${menuOpen ? 'block lg:hidden' : 'hidden'}`}>
      <ul
        className={`${
          menuOpen
            ? 'absolute left-0 top-20 z-[22222222222222] block w-full rounded-b-[20px] bg-white shadow-md dark:bg-[#1d1d1d]'
            : 'my-12 flex'
        }`}
      >
        {menuItemList.map((item) => (
          <li key={item.id} aria-hidden='true' onClick={() => setMenuOpen(false)}>
            <NavLink
              key={item.id}
              className={({ isActive }) =>
                isActive
                  ? 'flex cursor-pointer items-center py-2.5 pl-4 font-poppins text-xtiny font-medium text-[#FA5252] transition-colors duration-300 ease-in-out hover:text-[#FA5252] md:px-4 xl:px-5'
                  : 'flex cursor-pointer  items-center py-2.5 pl-4 font-poppins text-xtiny font-medium text-[#44566C] transition-colors duration-300 ease-in-out hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252] md:px-4 xl:px-5'
              }
              to={item?.link}
            >
              <span className='mr-2 text-xl'>{item?.icon}</span> {item?.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMobile
