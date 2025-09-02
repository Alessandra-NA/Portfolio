import './App.css';
import Intro from './Components/Intro';
import Proyectos from './Components/Proyectos';
import Experiencia from './Components/Experiencia';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App min-h-dvh bg-rose-50 text-rose-950 text-lg">
      <div className='mx-auto p-5 sm:p-10 md:px-20 lg:max-w-5xl'>
        <Intro />
        <Experiencia />
        <Proyectos />
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
