import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Error from './pages/Error';
import Favorites from './pages/Favorites';

import Home from './pages/Home';
import Movie from './pages/Movie';

function RouterApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path='/movie/:id' element={ <Movie /> }></Route>
                <Route path='/favorites' element={ <Favorites /> }></Route>
                <Route path='*' element={ <Error /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;