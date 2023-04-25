import Footer from 'src/components/Footer'
import { Line } from 'rc-progress'
import { MdOutlineBusinessCenter, MdOutlineSchool } from 'react-icons/md'
import ResumeCard from './ResumeCard'

const lineArray = [
  {
    id: '01',
    color: '#FF6464',
    name: 'Web Design',
    number: 80
  },
  {
    id: '02',
    color: '#9272D4',
    name: 'Mobile App ',
    number: 95
  },
  {
    id: '03',
    color: '#5185D4',
    name: 'Illustrator',
    number: 65
  },
  {
    id: '03',
    color: '#CA56F2',
    name: 'Photoshope',
    number: 75
  }
]

const experienceArray = [
  {
    iconHeader: <MdOutlineSchool className='text-4xl text-[#F95054]' />,
    header: 'Education',
    school: [
      {
        bgColor: 'bg-[#FFF4F4]',
        year: '2021 - 2023',
        title: 'Ph.D in Horriblensess',
        where: 'ABC University, Los Angeles, CA'
      },
      {
        bgColor: 'bg-[#FFF4F4]',
        year: '2021 - 2023',
        title: 'Ph.D in Horriblensess',
        where: 'ABC University, Los Angeles, CA'
      },
      {
        bgColor: 'bg-[#FFF4F4]',
        year: '2021 - 2023',
        title: 'Ph.D in Horriblensess',
        where: 'ABC University, Los Angeles, CA'
      }
    ]
  },
  {
    iconHeader: <MdOutlineBusinessCenter className='text-4xl text-[#F95054]' />,
    header: 'Education',
    school: [
      {
        bgColor: 'bg-[#FFF4F4]',
        year: '2021 - 2023',
        title: 'Ph.D in Horriblensess',
        where: 'ABC University, Los Angeles, CA'
      },
      {
        bgColor: 'bg-[#FFF4F4]',
        year: '2021 - 2023',
        title: 'Ph.D in Horriblensess',
        where: 'ABC University, Los Angeles, CA'
      },
      {
        bgColor: 'bg-[#FFF4F4]',
        year: '2021 - 2023',
        title: 'Ph.D in Horriblensess',
        where: 'ABC University, Los Angeles, CA'
      }
    ]
  }
]

function Resume() {
  return (
    <section className='bg-white  dark:bg-[#111111] lg:rounded-2xl'>
      <div data-aos='fade' className=''>
        <div className='container sm:px-5 md:px-10 lg:px-14'>
          <div className='px-4 py-12 md:px-0'>
            <h2 className='after-effect after:left-44'>Resume</h2>
            <div className='mt-[30px] grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-2'>
              {experienceArray.map((item, i) => (
                <ResumeCard item={item} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className='container bg-[#F8FBFB] px-2 py-12 dark:bg-[#0D0D0D] sm:px-5 md:px-10 lg:px-20'>
          <div className='grid grid-cols-1  gap-8 md:grid-cols-2'>
            <div className='col-span-1'>
              <h4 className='mb-6 text-3xl font-medium dark:text-white'>Working Skills</h4>
              {lineArray.map((item, i) => (
                <div key={i} className=' mb-7'>
                  <div className='flex justify-between py-1'>
                    <span className=' text-gray-lite text-base font-semibold dark:text-[#A6A6A6]'>{item?.name}</span>
                    <span className=' text-gray-lite pr-5 text-base font-semibold dark:text-[#A6A6A6]'>
                      {item?.number}%
                    </span>
                  </div>
                  <Line
                    percent={item?.number}
                    strokeWidth={1}
                    trailWidth={1}
                    trailColor='#EDF2F2' // #1C1C1C: dark color
                    strokeColor={item?.color}
                  />
                </div>
              ))}
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
