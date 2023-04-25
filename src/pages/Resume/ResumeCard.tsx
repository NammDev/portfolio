interface Props {
  item: {
    iconHeader: JSX.Element
    header: string
    school: {
      bgColor: string
      year: string
      title: string
      where: string
    }[]
  }
}

function ResumeCard({ item }: Props) {
  // const Icon = item.iconHeader as unknown as React.ElementType

  return (
    <div>
      <div className='mb-4 flex items-center space-x-2 '>
        {item.iconHeader}
        <h4 className='text-3xl font-medium dark:text-white'>{item.header}</h4>
      </div>
      {item.school.map((place, index) => (
        <div
          key={index}
          className={`mb-6 space-y-2 rounded-lg ${place.bgColor} py-4 pl-5 pr-3 dark:border-2 dark:border-[#212425] dark:bg-transparent`}
        >
          <span className='text-tiny text-[#44566C] dark:text-[#b7b7b7]'>{place.year}</span>
          <h3 className='text-xl dark:text-white'>{place.title}</h3>
          <p className='dark:text-[#b7b7b7]'>{place.where}</p>
        </div>
      ))}
    </div>
  )
}

export default ResumeCard
