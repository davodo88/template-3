import type { NextPage } from 'next'
import Navbar from '../components/navBar'
import Pizza from '../components/pizza'
import Phone from '../components/phone'
import Info from '../components/info'
import HotSales from '../components/hotSales'


const Home: NextPage = () => {
  return (
    <div className="bg-black w-screen h-auto">
      <Phone />
      <Navbar />
      <Pizza />
      <Info />
      <HotSales />
    </div>
  );
}

export default Home
