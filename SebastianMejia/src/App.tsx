import logo from './assets/sm.svg'
import './App.css'
import AvionicsPics from './components/AvionicsPics';
import ImageRow from './components/ImageRow';

const images = [
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
      <AvionicsPics images={images} />
      {/* <ImageRow /> */}
    </>
  )

}

export default App


