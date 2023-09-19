import './App.css';
import { BrowserRouter } from 'react-router-dom'
import HomePage from './page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
