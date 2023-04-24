import Footer from 'src/components/Footer'

function About() {
  return (
    <section>
      <div className='bg-white dark:bg-[#111111] lg:rounded-2xl'>
        <div className='aos-init aos-animate' data-aos='fade'>
          <div className='px-2 pt-12 sm:px-5 md:px-10 md:py-12 lg:px-14'>
            <h2 className='after-effect after:left-52'>About Me</h2>
            <div className='lg:hidden'>
              <div>
                <div className='relative mx-auto mb-6  mt-[180px]   w-full rounded-[20px] bg-white px-6 text-center dark:bg-[#111111] md:mt-[220px] lg:mb-0 lg:mt-0 '>
                  <img
                    src='/static/media/avatar.418c8afc380507acd425.jpg'
                    className='absolute left-[50%] mx-auto -mt-[140px] h-[240px] w-[240px] -translate-x-[50%] transform  rounded-[20px] drop-shadow-xl'
                    alt=''
                  />
                  <div className='pb-8 pt-[100px]'>
                    <h1 className='mb-1 mt-6 text-3xl font-semibold  dark:text-white'>Monalisa Ashley</h1>
                    <h3 className='mb-4 inline-block rounded-lg px-5 py-1.5 text-[#7B7B7B] dark:bg-[#1D1D1D] dark:text-[#A6A6A6]  '>
                      Ui/Ux Designer
                    </h3>
                    <div className='flex justify-center space-x-3'>
                      <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                        <span className='socialbtn text-[#1773EA]'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth={0}
                            viewBox='0 0 320 512'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' />
                          </svg>
                        </span>
                      </a>
                      <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                        <span className='socialbtn text-[#1C9CEA]'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth={0}
                            viewBox='0 0 512 512'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' />
                          </svg>
                        </span>
                      </a>
                      <a href='https://dribbble.com/' target='_blank' rel='noopener noreferrer'>
                        <span className='socialbtn text-[#e14a84] '>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth={0}
                            viewBox='0 0 512 512'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z' />
                          </svg>
                        </span>
                      </a>
                      <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
                        <span className='socialbtn text-[#0072b1]'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth={0}
                            viewBox='0 0 448 512'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z' />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <div className='mt-7 rounded-2xl bg-[#F3F6F6]  p-7 dark:bg-[#1D1D1D]'>
                      <div className='flex border-b border-[#E3E3E3] pb-2.5 dark:border-[#3D3A3A]'>
                        <span className='socialbtn flex-shrink-0 bg-white text-[#E93B81] shadow-md dark:bg-black'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth={0}
                            viewBox='0 0 320 512'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z' />
                          </svg>
                        </span>
                        <div className='ml-2.5 text-left'>
                          <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>Phone</p>
                          <p className='break-all dark:text-white'>
                            {' '}
                            <a className='transition duration-300 hover:text-[#FA5252]' href='tel:+1234567890'>
                              +123 456 7890
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className='flex  border-b border-[#E3E3E3] py-2.5 dark:border-[#3D3A3A]'>
                        <span className='socialbtn flex-shrink-0 bg-white text-[#6AB5B9] shadow-md dark:bg-black'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth={0}
                            viewBox='0 0 512 512'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z' />
                          </svg>
                        </span>
                        <div className='ml-2.5 text-left'>
                          <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>Email</p>
                          <p className='break-all dark:text-white'>
                            {' '}
                            <a
                              className='transition duration-300 hover:text-[#FA5252]'
                              href='mailto:ibthemes21@gmail.com'
                            >
                              example@mail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className='flex border-b border-[#E3E3E3] py-2.5 dark:border-[#3D3A3A]'>
                        <span className='socialbtn flex-shrink-0 bg-white text-[#FD7590] shadow-md dark:bg-black'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth={0}
                            viewBox='0 0 384 512'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z' />
                          </svg>
                        </span>
                        <div className='ml-2.5 text-left'>
                          <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>Location</p>
                          <p className='break-all dark:text-white'>Hong kong china</p>
                        </div>
                      </div>
                      <div className='flex  py-2.5'>
                        <span className='socialbtn flex-shrink-0 bg-white text-[#C17CEB] shadow-md dark:bg-black'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth={0}
                            viewBox='0 0 448 512'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z' />
                          </svg>
                        </span>
                        <div className='ml-2.5 text-left'>
                          <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>Birthday</p>
                          <p className='break-all dark:text-white'>May 27, 1990</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href='/static/media/cv.174d8bc4469f8aa7c5fa.webp'
                      download
                      className='mx-auto mt-6 inline-flex items-center rounded-[35px] bg-gradient-to-r  from-[#FA5252] to-[#DD2476] px-8  py-3 text-lg text-white transition duration-200 ease-linear hover:bg-gradient-to-l'
                    >
                      <img
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAAP6L+eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgB7VXRccIwDJV6HcAjhA0yAkzQdAM2aDdoO0HpBFwnACaADcgGwASECcITUTjFl9g+Dv54dzr5FOlZliyHKYK6rnMo55krZi7pVoD0qx7GZyiWI8RrqBPEJ/mFOGQ9GYp9pTiOINh7G8pmLhT0Qg/Ck/jxxJ1bgW5nUHNIpibp/H4gdgz/na4ryLu9PewRr5X035hLBCw9vwIqN6Y3yAF+BfUBATPIUTNPgvhK5pB5yMlBtuqYUTqpxLiYcxJ5jJTVOKXuiMr6g5rGTXpGOoNq+/FHTfNaiO9SiBdYjL2PdoPKkhtSF4gpSZ/AKfUft1OWlJoKlxAGBwRZXrLVzCTLrTlBFYqNTp4hX1FTzyupZpfryb47zQ6VIga98zMlFxRtKVIe+hBGpKcC10ga3CbJZt43dB9cfr5sHp57Qer/cwZ+0yM9HiHHMQAAAABJRU5ErkJggg=='
                        alt='icon'
                        className='mr-2'
                      />
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
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
              <div className='about-box dark:bg-transparent' style={{ background: 'rgb(252, 244, 255)' }}>
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
              <div className='about-box dark:bg-transparent' style={{ background: 'rgb(254, 250, 240)' }}>
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
              <div className='about-box dark:bg-transparent' style={{ background: 'rgb(255, 240, 248)' }}>
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
              <div className='about-box dark:bg-transparent' style={{ background: 'rgb(243, 250, 255)' }}>
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
