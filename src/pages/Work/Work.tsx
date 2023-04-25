import Footer from 'src/components/Footer'
import Modal from 'react-modal'
import { FiUser, FiCode, FiFilePlus, FiExternalLink } from 'react-icons/fi'
import { BsXCircle } from 'react-icons/bs'
import { useState } from 'react'

const singleData = {
  id: '1',
  tag: 'UI/UX',
  title: 'Chul urina',
  img: 'work1',
  imgSmall: 'workSmall1',
  bg: '#FFF0F0',
  client: 'Envato',
  langages: 'Photoshop, Figma',
  link: 'https://www.envato.com',
  linkText: 'www.envato.com',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!'
}

function Work() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section className='bg-white  dark:bg-[#111111] lg:rounded-2xl'>
      <div data-aos='fade'>
        <div className='container mb-8   px-4 sm:px-5 md:px-10 lg:px-[60px]'>
          <div className='py-12'>
            <h2 className='after-effect  mt-12 after:left-48  lg:mt-0'>Portfolio</h2>
            <ul className='mt-[30px]  flex w-full flex-wrap justify-start  font-medium   md:justify-end'>
              <li className='fillter-btn  mr-4 md:mx-4'>All</li>
              <li className='mr-4 text-[#FA5252] md:mx-4'>Video</li>
              <li className='fillter-btn mr-4 md:mx-4'>Web Design</li>
              <li className='fillter-btn ml-0 mr-4 md:mx-4'>Logo</li>
              <li className='fillter-btn  '>Graphic Design</li>
            </ul>
          </div>
          <div className='my-masonry-grid'>
            <div className='my-masonry-grid_column' style={{ width: '50%' }}>
              <div
                className='rounded-lg border-[#212425] p-6 dark:border-[2px]'
                style={{ background: 'rgb(233, 250, 255)' }}
              >
                <div className=' overflow-hidden rounded-lg'>
                  <img
                    aria-hidden='true'
                    onClick={() => setIsOpen(true)}
                    className='h-auto w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110 '
                    src='https://bostamireact.ibthemespro.com/static/media/4.88cbfcc5617deb5b50bf.jpg'
                    alt=''
                  />
                </div>
                <span className='block pt-5 text-[14px] font-normal text-[#44566C] dark:text-[#A6A6A6]'>Video</span>
                <h2 className='mt-2 cursor-pointer text-xl font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]'>
                  Chul urina
                </h2>
              </div>
            </div>
            <div className='my-masonry-grid_column' style={{ width: '50%' }}>
              <div
                className='rounded-lg border-[#212425] p-6 dark:border-[2px]'
                style={{ background: 'rgb(244, 244, 255)' }}
              >
                <div className='overflow-hidden rounded-lg'>
                  <img
                    className='h-auto w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110 '
                    src='https://bostamireact.ibthemespro.com/static/media/6.32b246bf9e52f0830156.jpg'
                    alt=''
                  />
                </div>
                <span className='block pt-5 text-[14px] font-normal text-[#44566C] dark:text-[#A6A6A6]'>Video</span>
                <h2 className='mt-2 cursor-pointer text-xl font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]'>
                  Chul urina
                </h2>
              </div>
            </div>
          </div>
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            className=' my-8 flex items-center  rounded-2xl p-4  outline-none md:p-8'
          >
            <div className=' absolute left-1/2 top-1/2 mx-auto   flex w-full -translate-x-[50%] -translate-y-[50%] transform items-center rounded-xl bg-white p-4 shadow-lg dark:bg-[#323232] md:w-10/12 md:p-8 lg:w-[850px] '>
              <div className=' no-scrollbar max-h-[80vh] overflow-y-scroll '>
                {/* close button */}
                <BsXCircle
                  onClick={() => setIsOpen(false)}
                  className='absolute -top-12  right-2 z-50 transform cursor-pointer text-7xl text-white  transition duration-300 ease-in-out hover:rotate-45 md:-right-10 md:-top-6 '
                />
                <h2 className='text-center text-4xl font-bold text-[#ef4060] dark:hover:text-[#FA5252]'>
                  {singleData.tag} Project
                </h2>
                <div className='my-6 grid grid-cols-1 lg:grid-cols-2'>
                  <div className='space-y-2'>
                    <p className='flex items-center text-[15px] dark:text-white  sm:text-lg '>
                      <FiFilePlus className='mr-2 hidden sm:block sm:text-lg  md:text-xl' />
                      Project :&nbsp; <span className='font-medium '> Website</span>
                    </p>
                    <p className='flex items-center text-[15px] dark:text-white  sm:text-lg '>
                      <FiCode className='mr-2 hidden text-lg sm:block ' />
                      Langages :&nbsp;
                      <span className='font-medium '>{singleData?.langages}</span>
                    </p>
                  </div>
                  <div className='space-y-2'>
                    <p className='mt-2 flex items-center text-[15px] dark:text-white sm:text-lg  lg:mt-0 '>
                      <FiUser className='mr-2 hidden text-lg sm:block' />
                      Client :&nbsp;
                      <span className='font-medium '>{singleData?.client}</span>
                    </p>
                    <p className='flex items-center text-[15px] dark:text-white sm:text-lg '>
                      <FiExternalLink className='mr-2 hidden text-lg sm:block' />
                      Preview :&nbsp;
                      <span className='font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060] '>
                        <a href={singleData?.link} target='_blank' rel='noopener noreferrer'>
                          {singleData?.linkText}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <p className='text-2line  text-[15px] font-normal dark:text-white sm:text-sm  '>
                  {singleData?.description}
                </p>
                <img className='mt-6 h-auto  w-full rounded-xl object-cover md:h-[450px]' src={singleData.img} alt='' />
              </div>
            </div>
          </Modal>
        </div>
        <Footer />
      </div>
    </section>
  )
}

export default Work
