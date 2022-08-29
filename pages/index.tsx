import type { NextPage } from 'next'
import Navbar from '../components/navBar'
import Pizza from '../components/pizza'
import Phone from '../components/phone'
import Info from '../components/info'
import HotSales from '../components/hotSales'
import WeAre from '../components/weAre'
import Footer from '../components/footer'
import BtnTop from '../components/atom/btnTop'




const Home: NextPage = () => {
  return (
    <div className="bg-black w-screen h-auto relative">
      <Phone />
      <Navbar />
      <Pizza />
      <Info />
      <HotSales />
      <WeAre />
      <Footer />
      <BtnTop />
    </div>
  );
}

export default Home
