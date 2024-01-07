
import './App.css';
import AnnouncementBar from './Components/AnnouncementBar/AnnouncementBar';
import CalltoAction from './Components/CalltoAction/CalltoAction';
import Component1 from './Components/Component1/Component1';
import Feature1 from './Components/Feature1/Feature1';
import Feature2 from './Components/Feature2/Feature2';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/HeroSection/HeroSection';
import LogoCloud from './Components/LogoCloud/LogoCloud';
import NavBar from './Components/NavBar/NavBar';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <AnnouncementBar/>
      <NavBar/>
      <HeroSection/>
      <LogoCloud/>
      <Feature1/>
      <Feature2/>
      <Component1/>
      <Testimonials/>
      <CalltoAction/>
      <Footer/>
    </div>
  );
}

export default App;
