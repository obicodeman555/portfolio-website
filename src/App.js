import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/loader/Loader';

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"))
const Work = lazy(() => import("./pages/Work"))
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"))

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='portfolio' element={<Work />} />
            <Route path="project/:name" element={<ProjectDetails />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
