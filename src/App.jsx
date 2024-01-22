
import Animated from "./components/Animated";
import About from "./components/About";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import SideNav from "./components/SideNav";
function App() {
  return (
    <>
    <div className="">
     <SideNav/>
      <Animated />
     <Landing />
      

      <About/>
     <Contact/> 
      
    </div>
    </>
  );
}

export default App;
