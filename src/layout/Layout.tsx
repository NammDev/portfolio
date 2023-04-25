import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import NavMobile from './components/NavMovile'
import Info from './components/Info'
import HeaderLink from './components/HeaderLink'

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <section className='min-h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat font-poppins md:bg-homeBg md:pb-16 md:dark:bg-homeTwoBg-dark'>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <NavMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='container grid grid-cols-12 justify-between  md:gap-10 lg:pt-[220px]'>
        <div className='sticky top-44 col-span-12 hidden h-screen lg:col-span-4 lg:block'>
          <Info />
        </div>
        <div className='col-span-12 lg:col-span-8'>
          <HeaderLink />
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default Layout
