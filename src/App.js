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
import SummaryPage from './pages/SummaryPage';
import WorkSummaryTab from './components/WorkSummaryTab';
import EduSummaryTab from './components/EduSummaryTab';

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
        id: 0,
        degree: 'Bachelor of Arts',
        major: 'Computer Science',
        uni: 'University of California, Berkeley',
        start: '2020-08-01',
        end: '2024-05-01',
      },
      {
        id: uuidv4(),
        degree: '',
        major: '',
        uni: '',
        start: '',
        end: '',
      },
    ],
  });
  const [curr_work_id, setWorkId] = useState(info.work[info.work.length - 1].id);
  const [curr_edu_id, setEduId] = useState(info.work[info.work.length - 1].id);

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
    return newWork.id;
  };

  const addEdu = () => {
    const newEdu = {
      id: uuidv4(),
      title: '',
      company: '',
      city: '',
      state: '',
      start: '',
      end: '',
    };
    setInfo({ ...info, edu: [...info.edu, newEdu] });
    return newEdu.id;
  };

  //TODO: Add warning window when navigating away with empty job description

  const switchWork = (id) => {
    setWorkId(id);
  };

  const switchEdu = (id) => {
    setEduId(id);
  };

  const deleteWork = (id) => {
    const newWorkList = info.work.filter((job) => job.id !== id);
    updateInfo('work', newWorkList);
  };

  const deleteEdu = (id) => {
    const newWorkList = info.work.filter((school) => school.id !== id);
    updateInfo('edu', newWorkList);
  };

  // useEffect(() => addWork(), []);

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
                <SummaryPage deleteItem={deleteWork} switchItem={switchWork} addItem={addWork} itemHistory={info.work} to="/work" displayText="Add Another Position" Component={WorkSummaryTab} />
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
                <EduForm handleChange={updateInfo} curr_id={curr_edu_id} />
                <div className={layout.coupleSpaced}>
                  <NavButton text="Back" fill="outline" color="blue" link="/expr/" />
                  <NavButton text="Next" fill="block" color="red" link="/eduh/" />
                </div>
              </>
            }
          />
          <Route
            path="/eduh/"
            element={
              <>
                <Header title="Education summary" content="" />
                <SummaryPage deleteItem={deleteEdu} switchItem={switchEdu} addItem={addEdu} itemHistory={info.edu} to="/edu" displayText="Add another degree" Component={EduSummaryTab} />
                <div className={layout.coupleSpaced}>
                  <NavButton text="Back" fill="outline" color="blue" link="/edu/" />
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
