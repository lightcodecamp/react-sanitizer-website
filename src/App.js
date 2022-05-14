import Navbar from './components/Navbar/Navbar'
import Hero from './container/Hero/Hero'
import Aboutus from './container/Aboutus/Aboutus'
import Services from './container/Services/Services'
import Ceo from './container/Ceo/Ceo'
import Intro from './container/Intro/Intro'
import Prevention from './container/Prevention/Prevention'
import FindUs from './container/FindUs/FindUs'
import Footer from './container/Footer/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutus />
      <Services />
      <Ceo />
      <Intro />
      <Prevention />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
