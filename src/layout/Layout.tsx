import { Outlet } from 'react-router-dom'
import Header from './Header'
import NavMobile from './NavMovile'
import Info from './Info'
import HeaderLink from './HeaderLink'

function Layout() {
  return (
    <section className='min-h-screen w-full bg-homeBg bg-cover bg-fixed bg-center bg-no-repeat font-poppins dark:bg-homeTwoBg-dark md:pb-16'>
      <Header />
      <NavMobile />
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
