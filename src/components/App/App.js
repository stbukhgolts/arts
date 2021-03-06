import { Route, Routes } from 'react-router-dom';
import Artists from '../Artists/Artists';
import Main from '../Main/Main';
import MainPageContent from '../MainPageContent/MainPageContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<MainPageContent />} />
          <Route path="/artists" element={<Artists />} />
          <Route path='/artists/:workId' element={<div>work</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
