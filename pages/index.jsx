import ChannelCard from "../components/ChannelCard"
import LivemeetsCard from '../components/LivemeetsCard'
import TrendCard from '../components/TrendCard'
const styles={
  wrapper: `flex justify-center w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}
function  Home(){
  return (
    <div className={`${styles.wrapper} px-10`}>
      <div className={styles.content}>
      <div>
        <ChannelCard />
        <LivemeetsCard />
      </div>
      <div>
        <TrendCard />
        <div>MessageCallout</div>
      </div>
      <div>

        <div>OnlineCard</div>
        <div>chatrrom</div>
      </div>
      </div>
      
    </div>
  )
}

export default Home
