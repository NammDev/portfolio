import Footer from 'src/components/Footer'

function Work() {
  return (
    <section className='bg-white  dark:bg-[#111111] lg:rounded-2xl'>
      <div data-aos='fade' className='aos-init aos-animate'>
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
                    className='h-auto    w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110 '
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
        </div>
        <Footer />
      </div>
    </section>
  )
}

export default Work
