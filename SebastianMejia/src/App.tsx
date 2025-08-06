// import logo from './assets/sm.svg'
import HeroSection from './components/HeroSection';
import './App.css'
import AvionicsPics from './components/AvionicsPics';
import Nav from './components/Nav';
import image1 from './assets/student.jpg';
import image2 from './assets/cfac.jpg';
import ImageInfoCard from './components/ImageInfoCard';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ContactForm from './components/ContactForm';


const avionicsImages = [
  'https://i.postimg.cc/wTDPqKxn/bo.jpg',
  'https://i.postimg.cc/bY7WfYPQ/ec.jpg',
  'https://i.postimg.cc/7PGdRGFH/bell.jpg'
];

function App() {

  return (
    <>
      <HeroSection />

      <div className='main-content'>
        <div className='avionics-container'>
          <AvionicsPics images={avionicsImages} />

          <div className='lateral-title-container'>
            <h4>Avionics Technician</h4>
          </div>

          <div><p id='avionics' className='avionicsLife'>I worked for about 8 years at <a href="https://www.avionicacolombia.com.co/pages/avionics-installations" className='gulf-link' target='blank'>Gulf Coast Avionics Colombia</a>, performing preventive and corrective maintenance, as well as avionics modifications on airplanes and helicopters. I also had the opportunity to work in the quality control area, managing audits and developing procedure manuals. In the photos above, you can see me working on helicopters, Rotorcfrats are my favorites, a masterpiece of engineering.</p></div>

        </div>

        <ImageInfoCard
          title="Software Engineer"
          description="While I was working on configuring and updating software in Garmin avionics suites, my curiosity began to grow and I decided to start studying engineering. While studying, my mind opened up and I began to see endless possibilities. That’s when my passion for mobile development began. The idea of creating experiences with just a laptop, a phone, and a lot of imagination fascinated me. I discovered that this small universe of tools can unlock infinite paths, and I wanted to be part of it. I started learning about Android development, and that’s how my journey as a software engineer began."
          image={image1}
          fromRight={false} // Set to true to position the first image on the right
        />

        <ImageInfoCard
          title="Expatriate"
          description="Just after my graduation, I embarked on a new adventure with my family — Spain was our destination. I currently work at Sabadell Airport, an airfield located north of Barcelona. I'm in charge of the technical office at C.F.A.C, S.L., where we perform maintenance on aircraft such as Cessna, Piper, and Robinson helicopters. We also inspect and repair Lycoming and Continental engines, as well as their components."
          image={image2}
          fromRight={true} // Set to false to position the second image on the left
        />

        <Nav />
        <ContactForm formspreeEndpoint="https://formspree.io/f/mdkdwdza" />
        
        <WhatsAppButton />
      </div>
      <Footer />
    </>
  )

}

export default App


