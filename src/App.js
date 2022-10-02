import './App.css';
import { AllRoutes } from './Components/AllRoutes';
import { NavbarMain } from "./Components/NavbarMain"


function App() {
  return <div style={{ paddingTop: '150px' }}>
    <NavbarMain />
    <AllRoutes />
  </div>
}

export default App;
