import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/Details" element={<Details />}>Details</Route>
      </Routes>
    </div>
  );
}

export default App;
