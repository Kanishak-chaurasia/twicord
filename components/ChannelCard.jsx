import React from 'react'
const styles = {
  channelImage: `w-14 h-14 object-cover`,
  channelHeader: `bg-blue-400 text-center  rounded-full text-3xl py-2 px-1 font-serif`,
}
const channelData = {
  name: 'Channel Name',
  description: 'Channel Description',
  image: 'https://via.placeholder.com/150',
  members: [
    {
      name: 'User Name',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'User Name',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'User Name',
      image: 'https://via.placeholder.com/150'
    },
  ],

}
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
      <div>
        <h1 className={styles.channelHeader}>Channel</h1>
      </div>

      <div className='flex flex-row py-5  my-5  w-[300px] justify-center'>
        <div className='flex flex-row'>
          <div className='flex flex-row justify-center'>
            <img className={styles.channelImage} src={channelData.image} alt='channel' />
          </div>
          <div className='flex flex-col px-2 justify-center'>
            <h1 className='text-3xl font-serif'>{channelData.name}</h1>
          
            <p className='text-xl font-serif'>{channelData.description}</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ChannelCard