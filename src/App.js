import './App.css';
import NavBar from './navbar';
import Header from './header';
import Project from './project';
import Technologies from './technologies';
import About from './about'
import Footer from'./footer'


export default function App() {
  return (
    <div ClassName='App_div'>
      <NavBar />
      <Header />
      <Project />
      <Technologies />
      <About />  
      <Footer />
    </div>
  );
}