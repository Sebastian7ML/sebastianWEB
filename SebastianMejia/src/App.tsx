import logo from './assets/sm.svg'
import './App.css'
import AvionicsPics from './components/AvionicsPics';
import ImageRow from './components/ImageRow';
import Nav from './components/Nav';

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
      <AvionicsPics images={avionicsImages} />
      
      <h4 id='avionics'>Avionics Technician</h4>
      <p className='avionicsLife'>I worked for about 8 years at <a href="https://www.avionicacolombia.com.co" className='gulf-link' target='blank'>Gulf Coast Avionics Colombia</a>, performing preventive and corrective maintenance, as well as avionics modifications on airplanes and helicopters. I also had the opportunity to work in the quality control area, managing audits and developing procedure manuals. In the photos above, you can see me working on helicopters, Rotorcfrats are my favorites, a masterpiece of engineering.</p>
      <Nav/>
      
      {/* <ImageRow /> */}
    </>
  )

}

export default App


