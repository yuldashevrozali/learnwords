import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Newwords from './pages/Newwords';
import Home from './pages/Home';
import Repeatwords from './pages/Repeatwords';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/newwords" element={<Newwords />} />
        <Route path="/" element={<Home />} />
        <Route path="/repeatwords" element={<Repeatwords />} />
        {/* Repeatwords komponentini keyinchalik qo'shishingiz mumkin */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
