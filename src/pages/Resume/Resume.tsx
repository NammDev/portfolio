import Footer from 'src/components/Footer'

function Resume() {
  return (
    <section className='bg-white  dark:bg-[#111111] lg:rounded-2xl'>
      <div data-aos='fade' className=''>
        <div className='container sm:px-5 md:px-10 lg:px-14'>
          <div className='px-4 py-12 md:px-0'>
            <h2 className='after-effect after:left-44'>Resume</h2>
            <div className='mt-[30px] grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-2'>
              <div>
                <div className='mb-4 flex items-center space-x-2 '>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 24 24'
                    className='text-6xl text-[#F95054]'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path fill='none' d='M0 0h24v24H0V0z' />
                    <path d='M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z' />
                  </svg>
                  <h4 className='text-3xl font-medium dark:text-white'>Education</h4>
                </div>
                <div
                  className='mb-6 space-y-2 rounded-lg py-4 pl-5 pr-3  dark:border-2 dark:border-[#212425]'
                  style={{ background: 'rgb(255, 244, 244)' }}
                >
                  <span className='text-tiny text-[#44566C] dark:text-[#b7b7b7]'>2021-2023</span>
                  <h3 className='text-xl dark:text-white'>Ph.D in Horriblensess </h3>
                  <p className='dark:text-[#b7b7b7]'>ABC University, Los Angeles, CA</p>
                </div>
                <div
                  className='mb-6 space-y-2 rounded-lg py-4 pl-5  pr-3 dark:border-2 dark:border-[#212425]'
                  style={{ background: 'rgb(255, 241, 251)' }}
                >
                  <span className='text-tiny text-[#44566C] dark:text-[#b7b7b7]'>2019 - Present</span>
                  <h3 className='text-xl dark:text-white'>Sr. Software Tester</h3>
                  <p className='dark:text-[#b7b7b7]'>Google Inc.</p>
                </div>
                <div
                  className='space-y-2 rounded-lg py-4 pl-5 pr-3  dark:border-2 dark:border-[#212425]'
                  style={{ background: 'rgb(255, 244, 244)' }}
                >
                  <span className='text-tiny text-[#44566C] dark:text-[#b7b7b7]'>2021</span>
                  <h3 className='text-xl dark:text-white'>Best Developer </h3>
                  <p className='dark:text-[#b7b7b7]'>University Of Melbourne, NA</p>
                </div>
              </div>
              <div>
                <div className='mb-4 flex items-center space-x-2 '>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 24 24'
                    className='text-6xl text-[#F95054]'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path fill='none' d='M0 0h24v24H0V0z' />
                    <path d='M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z' />
                  </svg>
                  <h4 className='text-3xl font-medium dark:text-white'>Experience</h4>
                </div>
                <div
                  className='mb-6 space-y-2 rounded-lg py-4 pl-5 pr-3  dark:border-2 dark:border-[#212425]'
                  style={{ background: 'rgb(238, 245, 250)' }}
                >
                  <span className='text-tiny text-[#44566C] dark:text-[#b7b7b7]'>2017-2021</span>
                  <h3 className='text-xl dark:text-white'>Computer Science</h3>
                  <p className='dark:text-[#b7b7b7]'>Imperialize Technical Institute</p>
                </div>
                <div
                  className='mb-6 space-y-2 rounded-lg py-4 pl-5  pr-3 dark:border-2 dark:border-[#212425]'
                  style={{ background: 'rgb(242, 244, 255)' }}
                >
                  <span className='text-tiny text-[#44566C] dark:text-[#b7b7b7]'>2015-2017</span>
                  <h3 className='text-xl dark:text-white'>Cr. Web Developer</h3>
                  <p className='dark:text-[#b7b7b7]'>ib-themes ltd.</p>
                </div>
                <div
                  className='space-y-2 rounded-lg py-4 pl-5 pr-3  dark:border-2 dark:border-[#212425]'
                  style={{ background: 'rgb(238, 245, 250)' }}
                >
                  <span className='text-tiny text-[#44566C] dark:text-[#b7b7b7]'>2008</span>
                  <h3 className='text-xl dark:text-white'>Best Writter</h3>
                  <p className='dark:text-[#b7b7b7]'>Online Typodev Soluation Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container bg-[#F8FBFB] px-2 py-12 dark:bg-[#0D0D0D] sm:px-5 md:px-10 lg:px-20'>
          <div className='grid grid-cols-1  gap-8 md:grid-cols-2'>
            <div className='col-span-1'>
              <h4 className='mb-6 text-3xl font-medium dark:text-white'>Working Skills</h4>
              <div className=' mb-7'>
                <div className='flex justify-between py-1'>
                  <span className=' text-base font-semibold text-[#44566C] dark:text-[#A6A6A6]'>Web Design</span>
                  <span className=' pr-5 text-base font-semibold text-[#44566C] dark:text-[#A6A6A6]'>80%</span>
                </div>
                <svg className='rc-progress-line' viewBox='0 0 100 1' preserveAspectRatio='none'>
                  <path
                    className='rc-progress-line-trail'
                    d='M 0.5,0.5
   L 99.5,0.5'
                    strokeLinecap='round'
                    stroke='#EDF2F2'
                    strokeWidth={1}
                    fillOpacity={0}
                  />
                  <path
                    className='rc-progress-line-path'
                    d='M 0.5,0.5
   L 99.5,0.5'
                    strokeLinecap='round'
                    stroke='#FF6464'
                    strokeWidth={1}
                    fillOpacity={0}
                    style={{
                      strokeDasharray: '79.2px, 100px',
                      strokeDashoffset: 0,
                      transition:
                        'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s'
                    }}
                  />
                </svg>
              </div>
              <div className=' mb-7'>
                <div className='flex justify-between py-1'>
                  <span className=' text-base font-semibold text-[#44566C] dark:text-[#A6A6A6]'>Mobile App </span>
                  <span className=' pr-5 text-base font-semibold text-[#44566C] dark:text-[#A6A6A6]'>95%</span>
                </div>
                <svg className='rc-progress-line' viewBox='0 0 100 1' preserveAspectRatio='none'>
                  <path
                    className='rc-progress-line-trail'
                    d='M 0.5,0.5
   L 99.5,0.5'
                    strokeLinecap='round'
                    stroke='#EDF2F2'
                    strokeWidth={1}
                    fillOpacity={0}
                  />
                  <path
                    className='rc-progress-line-path'
                    d='M 0.5,0.5
   L 99.5,0.5'
                    strokeLinecap='round'
                    stroke='#9272D4'
                    strokeWidth={1}
                    fillOpacity={0}
                    style={{
                      strokeDasharray: '94.05px, 100px',
                      strokeDashoffset: 0,
                      transition:
                        'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s'
                    }}
                  />
                </svg>
              </div>
              <div className=' mb-7'>
                <div className='flex justify-between py-1'>
                  <span className=' text-base font-semibold text-[#44566C] dark:text-[#A6A6A6]'>Illustrator</span>
                  <span className=' pr-5 text-base font-semibold text-[#44566C] dark:text-[#A6A6A6]'>65%</span>
                </div>
                <svg className='rc-progress-line' viewBox='0 0 100 1' preserveAspectRatio='none'>
                  <path
                    className='rc-progress-line-trail'
                    d='M 0.5,0.5
   L 99.5,0.5'
                    strokeLinecap='round'
                    stroke='#EDF2F2'
                    strokeWidth={1}
                    fillOpacity={0}
                  />
                  <path
                    className='rc-progress-line-path'
                    d='M 0.5,0.5
   L 99.5,0.5'
                    strokeLinecap='round'
                    stroke='#5185D4'
                    strokeWidth={1}
                    fillOpacity={0}
                    style={{
                      strokeDasharray: '64.35px, 100px',
                      strokeDashoffset: 0,
                      transition:
                        'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s'
                    }}
                  />
                </svg>
              </div>
              <div className=' mb-7'>
                <div className='flex justify-between py-1'>
                  <span className=' text-base font-semibold text-[#44566C] dark:text-[#A6A6A6]'>Photoshope</span>
                  <span className=' pr-5 text-base font-semibold text-[#44566C] dark:text-[#A6A6A6]'>75%</span>
                </div>
                <svg className='rc-progress-line' viewBox='0 0 100 1' preserveAspectRatio='none'>
                  <path
                    className='rc-progress-line-trail'
                    d='M 0.5,0.5
   L 99.5,0.5'
                    strokeLinecap='round'
                    stroke='#EDF2F2'
                    strokeWidth={1}
                    fillOpacity={0}
                  />
                  <path
                    className='rc-progress-line-path'
                    d='M 0.5,0.5
   L 99.5,0.5'
                    strokeLinecap='round'
                    stroke='#CA56F2'
                    strokeWidth={1}
                    fillOpacity={0}
                    style={{
                      strokeDasharray: '74.25px, 100px',
                      strokeDashoffset: 0,
                      transition:
                        'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s'
                    }}
                  />
                </svg>
              </div>
            </div>
            <div className='col-span-1'>
              <h4 className='mb-8 text-3xl font-medium dark:text-white'>Knowledges</h4>
              <div className='flex flex-wrap gap-x-2.5 gap-y-5'>
                <button className='resume-btn'>Digital Design</button>
                <button className='resume-btn'>Marketing</button>
                <button className='resume-btn'>Social Media</button>
                <button className='resume-btn'>Print</button>
                <button className='resume-btn'>Time Management</button>
                <button className='resume-btn'>Flexibility</button>
                <button className='resume-btn'>Print</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}

export default Resume
