import logo from './assets/sm.svg'
import './App.css'
import AvionicsPics from './components/AvionicsPics';
import ImageRow from './components/ImageRow';
import Nav from './components/Nav';
import Emigration from './components/Emigration';
import image1 from './assets/bell.jpg';
import image2 from './assets/ec.jpg';
import ImageInfoCard from './components/ImageInfoCard';
import Footer from './components/Footer';

const avionicsImages = [
  'https://i.postimg.cc/wTDPqKxn/bo.jpg',
  'https://i.postimg.cc/bY7WfYPQ/ec.jpg',
  'https://i.postimg.cc/7PGdRGFH/bell.jpg'
];

function App() {

  return (
    <>
      <div>
        <a href="https://github.com/Sebastian7ML" target="_blank">
          <img src={logo} className="logo" alt="Sebas logo" />
        </a>
      </div>
      <h1>Sebastian Mejia</h1>
      <h2>Software Engineer & Avionics Technician</h2>
      <h3>// in short: Tech Enthusiast</h3>

      <div className='avionics-container'>
        <AvionicsPics images={avionicsImages} />

        <div className='lateral-title-container'>
          <h4 id='avionics'>Avionics Technician</h4>
        </div>

        <div><p className='avionicsLife'>I worked for about 8 years at <a href="https://www.avionicacolombia.com.co/pages/avionics-installations" className='gulf-link' target='blank'>Gulf Coast Avionics Colombia</a>, performing preventive and corrective maintenance, as well as avionics modifications on airplanes and helicopters. I also had the opportunity to work in the quality control area, managing audits and developing procedure manuals. In the photos above, you can see me working on helicopters, Rotorcfrats are my favorites, a masterpiece of engineering.</p></div>

      </div>

      <ImageInfoCard
        title="Our Coffee"
        description="We source our coffee beans from the finest farms."
        image={image1}
        fromRight={false} // Set to true to position the first image on the right
      />

      <ImageInfoCard
        title="Our Process"
        description="We roast our beans to perfection."
        image={image2}
        fromRight={true} // Set to false to position the second image on the left
      />
      
      <Nav />
      <Footer />
      {/* <Emigration imgSrc="../emi.png" imgAlt="colombia-españa" /> */}
      {/* <ImageRow /> */}
    </>
  )

}

export default App


