import { Routes, Route} from 'react-router-dom';
import Home from "./routes/home/home.component";
import NavBar from './routes/navBar/navBar.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/sing-in.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        </Route>
    </Routes>
  );
};

export default App;
