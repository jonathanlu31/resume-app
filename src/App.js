// import './styles/App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ContactForm from './pages/ContactForm';
import Navbar from './components/Navbar';
import WorkForm from './pages/WorkForm';
import SkillsForm from './pages/SkillsForm';
import EduForm from './pages/EduForm';
import Preview from './components/Preview';
import Start from './pages/Start';
import NavButton from './components/NavButton';
import WorkSummary from './pages/WorkSummary';

import layout from './styles/Layout.module.css';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [info, setInfo] = useState({
    fname: 'John',
    lname: 'Smith',
    job: 'Underwater basket weaver',
    city: 'San Diego',
    state: 'California',
    zip: 92121,
    phone: '8555555555',
    email: 'johnsmith@gmail.com',
    work: [
      {
        id: 0,
        title: 'Senior Sales Associate',
        company: 'Target',
        city: 'San Francisco',
        state: 'California',
        start: '2021-03-21',
        end: 'Present',
      },
      {
        id: 1,
        title: 'Accountant',
        company: 'Amazon.com, Inc.',
        city: 'Seattle',
        state: 'Washington',
        start: '2019-07-29',
        end: '2020-02-17',
      },
      {
        id: uuidv4(),
        title: '',
        company: '',
        city: '',
        state: '',
        start: '',
        end: '',
      },
    ],
    edu: [
      {
        degree: 'Bachelor of Arts',
        major: 'Computer Science',
        uni: 'University of California, Berkeley',
      },
    ],
  });

  const updateInfo = (feature, data) => {
    setInfo({ ...info, [feature]: data });
  };

  const addWork = () => {
    const newWork = {
      id: uuidv4(),
      title: '',
      company: '',
      city: '',
      state: '',
      start: '',
      end: '',
    };
    setInfo({ ...info, work: [...info.work, newWork] });
    console.log(info);
  };

  // useEffect(() => addWork(), []);
  const curr_work_id = info.work[info.work.length - 1].id;

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
                <WorkForm workList={info.work} handleChange={updateInfo} curr_id={curr_work_id} />
                <div className={layout.coupleSpaced}>
                  <NavButton text="Back" fill="outline" color="blue" link="/ctnt/" />
                  <NavButton text="Next" fill="block" color="red" link="/expr/" />
                </div>
              </>
            }
          />
          <Route
            path="/expr/"
            element={
              <>
                <Header title="Work Experience Summary" content="" />
                <WorkSummary addWork={addWork} workHistory={info.work} />
                <div className={layout.coupleSpaced}>
                  <NavButton text="Back" fill="outline" color="blue" link="/work/" />
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
