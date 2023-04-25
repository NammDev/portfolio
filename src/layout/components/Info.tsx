import {
  FaCalendarAlt,
  FaDribbble,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaTwitter
} from 'react-icons/fa'

function Info() {
  return (
    <div>
      <div className='relative mx-auto mb-6  mt-[180px] w-full rounded-[20px] bg-white px-6 text-center dark:bg-[#111111] md:mt-[220px]  lg:mb-0 lg:mt-0 '>
        <img
          src='https://bostamireact.ibthemespro.com/static/media/avatar.418c8afc380507acd425.jpg'
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
                <FaFacebookF />
              </span>
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
              <span className='socialbtn text-[#1C9CEA]'>
                <FaTwitter />
              </span>
            </a>
            <a href='https://dribbble.com/' target='_blank' rel='noopener noreferrer'>
              <span className='socialbtn text-[#e14a84] '>
                <FaDribbble />
              </span>
            </a>
            <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
              <span className='socialbtn text-[#0072b1]'>
                <FaLinkedinIn />
              </span>
            </a>
          </div>
          <div className='mt-7 rounded-2xl bg-[#F3F6F6]  p-7 dark:bg-[#1D1D1D]'>
            <div className='flex border-b border-[#E3E3E3] pb-2.5 dark:border-[#3D3A3A]'>
              <span className='socialbtn flex-shrink-0 bg-white text-[#E93B81] shadow-md dark:bg-black'>
                <FaMobileAlt />
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
            <div className='flex border-b border-[#E3E3E3] py-2.5 dark:border-[#3D3A3A]'>
              <span className='socialbtn flex-shrink-0 bg-white text-[#6AB5B9] shadow-md dark:bg-black'>
                <FaEnvelopeOpenText />
              </span>
              <div className='ml-2.5 text-left'>
                <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>Email</p>
                <p className='break-all dark:text-white'>
                  {' '}
                  <a className='transition duration-300 hover:text-[#FA5252]' href='mailto:ibthemes21@gmail.com'>
                    example@mail.com
                  </a>
                </p>
              </div>
            </div>
            <div className='flex border-b border-[#E3E3E3] py-2.5 dark:border-[#3D3A3A]'>
              <span className='socialbtn flex-shrink-0 bg-white text-[#FD7590] shadow-md dark:bg-black'>
                <FaMapMarkerAlt />
              </span>
              <div className='ml-2.5 text-left'>
                <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>Location</p>
                <p className='break-all dark:text-white'>Hong kong china</p>
              </div>
            </div>
            <div className='flex  py-2.5'>
              <span className='socialbtn flex-shrink-0 bg-white text-[#C17CEB] shadow-md dark:bg-black'>
                <FaCalendarAlt />
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
            className='mx-auto mt-6 inline-flex items-center rounded-[35px] bg-gradient-to-r from-[#FA5252] to-[#fa5252ef] px-8  py-3 text-lg text-white transition duration-200 ease-linear hover:bg-gradient-to-l'
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
  )
}

export default Info
