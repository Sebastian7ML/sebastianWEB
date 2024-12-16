import logo from './assets/sm.svg'
import './App.css'
import AvionicsPics from './components/avionicsPics';

const images = [
  'https://images.desenio.com/zoom/wb0125-8batman-portrait50x70-55544-10774.jpg', // Replace these URLs with actual image URLs
  'https://i.pinimg.com/736x/6a/11/09/6a11097af8e1e205ee946c3b2d62e125.jpg',
  'https://static.eldiario.es/clip/f073a34b-1712-4ed0-a9d5-706fd12f3061_16-9-aspect-ratio_default_0.jpg'
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
    </>
  )

}

export default App


