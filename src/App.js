// import './styles/App.css';
import React, { useState } from 'react';
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

import layout from './styles/Layout.module.css';

function App() {
  const [info, setInfo] = useState({
    fname: 'John',
    lname: 'Smith',
    job: 'Underwater basket weaver',
    phone: '8555555555',
    email: 'johnsmith@gmail.com',
  });

  const updateInfo = (feature, data) => {
    setInfo({ ...info, [feature]: data });
  };

  return (
    <div>
      <Navbar />
      <main className={layout.mainSection}>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route
            path="/ctnt"
            element={
              <>
                <Header title="Contact Info" content="Please enter your contact info" />
                <ContactForm handleChange={updateInfo} />
                <div className={layout.coupleSpaced}>
                  <NavButton text="Back" fill="outline" color="blue" link="/" />
                  <NavButton text="Next: Work History" fill="block" color="red" link="/work/" />
                </div>
              </>
            }
          />
          <Route
            path="/work/"
            element={
              <>
                <Header title="Work Experience" content="Please enter your relevant work experience" />
                <WorkForm handleChange={updateInfo} />
                <div className={layout.coupleSpaced}>
                  <NavButton text="Back" fill="outline" color="blue" link="/ctnt/" />
                  <NavButton text="Next: Education" fill="block" color="red" link="/edu/" />
                </div>
              </>
            }
          />
          <Route
            path="/edu/"
            element={
              <>
                <Header title="Education" content="Include your past education, even if you haven't graduated yet." />
                <EduForm handleChange={updateInfo} />
                <div className={layout.coupleSpaced}>
                  <NavButton text="Back" fill="outline" color="blue" link="/work/" />
                  <NavButton text="Next: Skills" fill="block" color="red" link="/skills/" />
                </div>
              </>
            }
          />
          <Route
            path="/skills/"
            element={
              <>
                <Header title="Skills" content="" />
                <SkillsForm handleChange={updateInfo} />
                <div className={layout.coupleSpaced}>
                  <NavButton text="Back" fill="outline" color="blue" link="/edu/" />
                  <NavButton text="Finish" fill="block" color="red" link="/work/" />
                </div>
              </>
            }
          />
        </Routes>
        <Preview info={info} />
      </main>
    </div>
  );
}

export default App;
