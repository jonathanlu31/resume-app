// import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import WorkForm from './components/WorkForm';
import SkillsForm from './components/SkillsForm';
import EduForm from './components/EduForm';
import Preview from './components/Preview';
import Start from './components/Start';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route
            path="/ctnt/"
            element={
              <>
                <Header title="Contact Info" content="Please enter your contact info" />
                <ContactForm />
              </>
            }
          />
          <Route
            path="/work/"
            element={
              <>
                <Header />
                <WorkForm />
              </>
            }
          />
          <Route
            path="/edu/"
            element={
              <>
                <Header />
                <EduForm />
              </>
            }
          />
          <Route
            path="/skills/"
            element={
              <>
                <Header />
                <SkillsForm />
              </>
            }
          />
        </Routes>
        {/* <Preview /> */}
      </main>
    </div>
  );
}

export default App;
