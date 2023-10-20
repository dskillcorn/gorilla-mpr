import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Topics from './components/Topics';
const Main = () => {
return (         
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/topics' element={<Topics/>} />
    </Routes>
);
}
export default Main;