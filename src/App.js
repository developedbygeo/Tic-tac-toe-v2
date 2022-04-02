import { Routes, Route, Navigate } from 'react-router-dom';
import Menu from './pages/Menu';

const App = () => (
  <main className="bg-dark-navy text-silver h-full w-full flex  items-center justify-center">
    <Routes>
      <Route path="/" element={<Navigate to="/menu" />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  </main>
);

export default App;
