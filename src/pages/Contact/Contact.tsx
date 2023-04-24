import Footer from 'src/components/Footer'

function Contact() {
  return (
    <div className='bg-white  dark:bg-[#111111] lg:rounded-2xl'>
      <h2 className='after-effect mb-12 pl-4 pt-12 after:left-60 after:top-[76px] md:mb-[30px] md:pl-[60px]'>
        Contact
      </h2>
      <div
        data-aos='fade'
        className=' mx-4 mb-[30px] rounded-xl bg-[#F8FBFB] p-4 dark:border-2 dark:border-[#212425] dark:bg-[#111111] md:mx-[60px] md:mb-[60px] md:p-16'
      >
        <h3 className='text-2xl'>
          <span className='text-[#44566C] dark:text-[#A6A6A6] '>I&apos;m always open to discussing product</span>
          <br />
          <span className='font-semibold dark:text-white'>design work or partnerships.</span>
        </h3>
        <form id='myForm'>
          <div className='group  relative z-0 mb-8 mt-[40px] w-full'>
            <input
              type='text'
              name='name'
              className='peer block w-full appearance-none border-0 border-b-[2px] border-[#B5B5B5] bg-transparent px-0 py-2.5 text-base text-[#44566C] autofill:bg-transparent focus:border-[#FF6464] focus:outline-none focus:ring-0 dark:border-[#333333] dark:text-white dark:focus:border-[#FF6464]'
              placeholder=' '
              required
            />
            <label
              htmlFor='name'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#FF6464] dark:text-[#A6A6A6] peer-focus:dark:text-[#FF6464]'
            >
              Name *
            </label>
          </div>
          <div className='group relative z-0 mb-8 w-full'>
            <input
              type='email'
              name='user_email'
              className='needed peer block w-full appearance-none border-0 border-b-[2px] border-[#B5B5B5] bg-transparent px-0 py-2.5 text-sm text-[#44566C] autofill:text-red-900 focus:border-[#5185D4] focus:outline-none focus:ring-0 dark:border-[#333333] dark:text-white dark:focus:border-[#FF6464]'
              placeholder=' '
              id='user_email'
              required
            />
            <label
              htmlFor='user_email'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#5185D4] dark:text-[#A6A6A6] peer-focus:dark:text-[#FF6464]'
            >
              Email *
            </label>
          </div>
          <div className='group relative z-0 mb-8 w-full'>
            <input
              type='text'
              name='message'
              className='peer block w-full appearance-none border-0 border-b-[2px] border-[#B5B5B5] bg-transparent px-0 py-2.5 text-sm text-[#44566C] autofill:bg-yellow-200 focus:border-[#CA56F2] focus:outline-none focus:ring-0 dark:border-[#333333] dark:text-white dark:focus:border-[#FF6464]'
              placeholder=' '
              id='message'
              required
            />
            <label
              htmlFor='message'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#CA56F2] dark:text-[#A6A6A6] peer-focus:dark:text-[#FF6464]'
            >
              Message *
            </label>
          </div>
          <div className='mt-3 inline-block  rounded-lg from-[#FA5252] to-[#DD2476] transition-all duration-300 ease-in-out  hover:bg-gradient-to-r'>
            <input
              type='submit'
              className=' border-color-910 cursor-pointer rounded-lg border-[2px] px-6 py-2   font-semibold transition  duration-200 ease-in hover:border-transparent  hover:text-white   dark:text-white '
              defaultValue='Submit'
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
