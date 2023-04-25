import Footer from 'src/components/Footer'
import Info from 'src/layout/components/Info'

function About() {
  return (
    <section>
      <div className='bg-white dark:bg-[#111111] lg:rounded-2xl'>
        <div className='' data-aos='fade'>
          <div className='px-2 pt-12 sm:px-5 md:px-10 md:py-12 lg:px-14'>
            <h2 className='after-effect after:left-52'>About Me</h2>
            <div className='lg:hidden'>
              <Info />
            </div>
            <div className='hidden grid-cols-12 items-center pt-4 md:gap-10 md:pt-[30px] lg:grid '>
              <div className='col-span-12 space-y-2.5'>
                <div className='lg:mr-16'>
                  <p className='leading-7  text-[#44566C] dark:text-[#A6A6A6]'>
                    I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web development and
                    print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                  </p>
                  <p className='mt-2.5 leading-7 text-[#44566C] dark:text-[#A6A6A6]'>
                    My aim is to bring across your message and identity in the most creative way. I created web design
                    for many famous brand companies.
                  </p>
                </div>
                <div />
              </div>
            </div>
          </div>
          <div className='px-4 pb-12 sm:px-5 md:px-10 lg:px-14 '>
            <h3 className='pb-5 text-[35px] font-medium dark:text-white'>What I do!</h3>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 '>
              <div className='about-box bg-[#FCF4FF] dark:bg-transparent'>
                <img
                  className='block h-10 w-10  object-contain'
                  src='https://bostamireact.ibthemespro.com/static/media/icon-1.71b741a6ab73765534e80db0a934febd.svg'
                  alt=''
                />
                <div className='space-y-2 break-all'>
                  <h3 className='text-xl font-semibold dark:text-white'>Ui/Ux Design</h3>
                  <p className=' leading-8 text-[#44566C] dark:text-[#A6A6A6]'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                  </p>
                </div>
              </div>
              <div className='about-box bg-[#FEFAF0] dark:bg-transparent'>
                <img
                  className='block h-10 w-10  object-contain'
                  src='https://bostamireact.ibthemespro.com/static/media/icon-2.cbff424c7b23532c3f955e6f747ee1fa.svg'
                  alt=''
                />
                <div className='space-y-2 break-all'>
                  <h3 className='text-xl font-semibold dark:text-white'>App Development</h3>
                  <p className=' leading-8 text-[#44566C] dark:text-[#A6A6A6]'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                  </p>
                </div>
              </div>
              <div className='about-box bg-[#FFF0F8] dark:bg-transparent'>
                <img
                  className='block h-10 w-10 object-contain'
                  src='https://bostamireact.ibthemespro.com/static/media/icon-5.b7ce008f06241f1d51b48260af8b73f4.svg'
                  alt=''
                />
                <div className='space-y-2 break-all'>
                  <h3 className='text-xl font-semibold dark:text-white'>Managment</h3>
                  <p className=' leading-8 text-[#44566C] dark:text-[#A6A6A6]'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                  </p>
                </div>
              </div>
              <div className='about-box bg-[#F3FAFF] dark:bg-transparent'>
                <img
                  className='block h-10 w-10  object-contain'
                  src='https://bostamireact.ibthemespro.com/static/media/icon-6.7a458dd3dce6df96d462489320d4a456.svg'
                  alt=''
                />
                <div className='space-y-2 break-all'>
                  <h3 className='text-xl font-semibold dark:text-white'>Web Development</h3>
                  <p className=' leading-8 text-[#44566C] dark:text-[#A6A6A6]'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  )
}

export default About
