import Footer from 'src/components/Footer'

function Blog() {
  return (
    <section className='bg-white dark:bg-[#111111] lg:rounded-2xl'>
      <div data-aos='fade' className=''>
        <div className='container px-4 sm:px-5 md:px-10 lg:px-[60px]'>
          <div className='py-12'>
            <h2 className='after-effect mt-12 after:left-32 lg:mt-0'>Blogs</h2>
            <div className='mb-6 mt-[30px] grid  grid-cols-1 gap-x-10   gap-y-7 sm:grid-cols-2  lg:grid-cols-2'>
              <div className='mb-2 h-full rounded-lg bg-[#FCF4FF] p-5 dark:border-2 dark:border-[#212425] dark:bg-transparent'>
                <div className='overflow-hidden rounded-lg'>
                  <img
                    className='w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110'
                    src='https://bostamireact.ibthemespro.com/static/media/1.5da97bc494017804e9df.jpg'
                    alt='blog'
                  />
                </div>
                <div className='text-tiny mt-4 flex text-[#44566C] dark:text-[#A6A6A6]'>
                  <span>177 April</span>
                  <span className='after:bg-gray-lite relative transform pl-6 after:absolute after:left-2 after:top-[50%] after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full'>
                    Inspiration
                  </span>
                </div>
                <h3 className='mt-3 cursor-pointer pr-4 text-lg font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]'>
                  How to Own Your Audience by Creating an Email List.
                </h3>
              </div>
              <div className='mb-2 h-full rounded-lg bg-[#EEFBFF] p-5 dark:border-2 dark:border-[#212425] dark:bg-transparent'>
                <div className='overflow-hidden rounded-lg'>
                  <img
                    className='w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110'
                    src='https://bostamireact.ibthemespro.com/static/media/4.0e4876b305a3d30ecf1e.jpg'
                    alt='blog'
                  />
                </div>
                <div className='text-tiny mt-4 flex text-[#44566C] dark:text-[#A6A6A6]'>
                  <span>000 April</span>
                  <span className='after:bg-gray-lite relative transform pl-6 after:absolute after:left-2 after:top-[50%] after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full'>
                    Inspiration
                  </span>
                </div>
                <h3 className='mt-3 cursor-pointer pr-4 text-lg font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]'>
                  Everything You Need to Know About Web Accessibility.
                </h3>
              </div>
              <div className='mb-2 h-full rounded-lg bg-[#FFF0F0] p-5 dark:border-2 dark:border-[#212425] dark:bg-transparent'>
                <div className='overflow-hidden rounded-lg'>
                  <img
                    className='w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110'
                    src='https://bostamireact.ibthemespro.com/static/media/2.2a5042442f4461042991.jpg'
                    alt='blog'
                  />
                </div>
                <div className='text-tiny mt-4 flex text-[#44566C] dark:text-[#A6A6A6]'>
                  <span>21 April</span>
                  <span className='after:bg-gray-lite relative transform pl-6 after:absolute after:left-2 after:top-[50%] after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full'>
                    Web Design
                  </span>
                </div>
                <h3 className='mt-3 cursor-pointer pr-4 text-lg font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]'>
                  The window know to say beside you
                </h3>
              </div>
              <div className='mb-2 h-full rounded-lg bg-[#FCF4FF] p-5 dark:border-2 dark:border-[#212425] dark:bg-transparent'>
                <div className='overflow-hidden rounded-lg'>
                  <img
                    className='w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110'
                    src='data:image/jpeg;base64,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'
                    alt='blog'
                  />
                </div>
                <div className='text-tiny mt-4 flex text-[#44566C] dark:text-[#A6A6A6]'>
                  <span>27 April</span>
                  <span className='after:bg-gray-lite relative transform pl-6 after:absolute after:left-2 after:top-[50%] after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full'>
                    Inspiration
                  </span>
                </div>
                <h3 className='mt-3 cursor-pointer pr-4 text-lg font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]'>
                  Top 10 Toolkits for Deep Learning in 2021.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}

export default Blog
