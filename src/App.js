import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader } from './components/Loader';

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"))
const Work = lazy(() => import("./pages/Work"))

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='work' element={<Work />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
