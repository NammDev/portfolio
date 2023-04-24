import { Outlet } from 'react-router-dom'
import Header from './Header'
import HeaderLink from './HeaderLink'
import Info from './Info'
import NavMobile from './NavMovile'

function Layout() {
  return (
    <section className='bg-homeBg dark:bg-homeTwoBg-dark min-h-screen  w-full bg-cover bg-fixed bg-center bg-no-repeat md:pb-16'>
      <Header />
      <NavMobile />
      <div className='container grid grid-cols-12 justify-between  md:gap-10 lg:mt-[220px]'>
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
