
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Contact, Work, Home } from "./pages"
import { Body } from './styles';


function App() {
  return (
    <Router>
      <Body>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </Body>
    </Router>
  );
}

export default App;
