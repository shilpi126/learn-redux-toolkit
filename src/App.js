
import { useSelector } from 'react-redux';
import './App.css';
import Authentication from './components/Authentication';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {

  const isAuth = useSelector((state) => state.auth.isAuthentication) 
  return (
   <div>
    <Header/>
    {!isAuth && <Authentication/>}
    {isAuth && <UserProfile/>}
    <Counter/>
   </div>
  );
}

export default App;
