import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import ConnectPage from './ConnectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/connect" element={<ConnectPage/>} />
      </Routes>
    </Router>
  );
}

export default App;