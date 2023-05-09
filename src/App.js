import './App.css';
import { ChildPage } from './components/Child/Child';
import { LinkPage } from './components/Links/link';
import { LoginPage } from './components/Login/Login';
import { MainPage } from './components/Main/Main';
import { NavbarPage } from './components/Navbar/Navbar.jsx';
import { SectionPage } from './components/Section/Section';


function App() {
  return (
    <>
      <NavbarPage/>
      <MainPage />
      <SectionPage />
      <ChildPage />
      <LinkPage />
      <LoginPage />
    </>
  );
}

export default App;
