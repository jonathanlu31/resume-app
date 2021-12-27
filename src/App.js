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
import NavButton from './components/NavButton';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route
            path="/ctnt"
            element={
              <>
                <Header title="Contact Info" content="Please enter your contact info" />
                <ContactForm />
                <NavButton text="Back" outline="true" color="blue" link="/" />
                <NavButton text="Next: Work History" outline="false" color="red" link="/work/" />
              </>
            }
          />
          <Route
            path="/work/"
            element={
              <>
                <Header title="Work Experience" content="Please enter your relevant work experience" />
                <WorkForm />
                <NavButton text="Back" outline="true" color="blue" link="/ctnt/" />
                <NavButton text="Next: Work History" outline="false" color="red" link="/edu/" />
              </>
            }
          />
          <Route
            path="/edu/"
            element={
              <>
                <Header />
                <EduForm />
                <NavButton text="Back" outline="true" color="blue" link="/work/" />
                <NavButton text="Next: Work History" outline="false" color="red" link="/skills/" />
              </>
            }
          />
          <Route
            path="/skills/"
            element={
              <>
                <Header />
                <SkillsForm />
                <NavButton text="Back" outline="true" color="blue" link="/edu/" />
                <NavButton text="Next: Work History" outline="false" color="red" link="/work/" />
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
