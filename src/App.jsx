import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Menu from './pages/Menu';
import Game from './pages/Game';

const App = () => {
  const { mode } = useSelector((state) => state.game);

  return (
    <main className="bg-dark-navy text-silver h-full w-full flex  items-center justify-center">
      <Routes>
        <Route path="/" element={<Navigate to="menu" />} />
        <Route path="*" element={<Navigate to="menu" />} />
        <Route path="menu" element={<Menu />} />
        <Route path="game" element={mode ? <Game /> : <Navigate to="/menu" />} />
      </Routes>
    </main>
  );
};

export default App;
