import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages';
import { useSelector } from 'react-redux';
import { Loader } from './components';
const App = () => {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App