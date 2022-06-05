import React from 'react'
const styles = {
  channelImage: `w-16 h-16 object-cover`,
  channelHeader: `bg-blue-400 text-center  rounded-full text-3xl py-2 px-1 font-serif`,
}


const data=[
  {
    name: 'python',
    image: 'https://via.placeholder.com/150',
    description: 'python is a programming language',
  },
  {
    name: 'java',
    image: 'https://via.placeholder.com/150',
    description: 'java is a programming language',
  },
  {
    name: 'javascript',
    image: 'https://via.placeholder.com/150',
    description: 'javascript is a programming language',
  },
  {
    name: 'c++',
    image: 'https://via.placeholder.com/150',
    description: 'c++ is a programming language',
  },
  {
    name: 'c',
    image: 'https://via.placeholder.com/150',
    description: 'c is a programming language',
  },
]
const channel =() =>{
  return(
    <div>
      <ChannelCard />
    </div>
  )
}
const ChannelCard = () => {
  return (
    <div className='pt-20 '>
      <div className='py-5'>
        <h1 className={styles.channelHeader}>Channel</h1>
      </div>
{data.map(item=>{
  return(
    <div className='flex flex-row     w-[300px] justify-center'>
        <div className='flex flex-row'>
          <div className='justify-center'>
            <img className={styles.channelImage} src={item.image} alt='channel' />
          </div>
          <div className='flex flex-col px-2 justify-center'>
            <h1 className='text-xl font-serif'>{item.name}</h1>
          
            <p className='text-lg font-serif'>{item.description}</p>
          </div>
        </div>
        </div>
  )
})}
    
      
    </div>
  )
}

export default ChannelCard