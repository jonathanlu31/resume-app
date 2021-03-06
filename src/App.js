// import './styles/App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ContactForm from './pages/ContactForm';
import Navbar from './components/Navbar';
import WorkForm from './pages/WorkForm';
import SkillsForm from './pages/SkillsForm';
import EduForm from './pages/EduForm';
import Preview from './pages/Preview';
import Start from './pages/Start';
import NavButton from './components/NavButton';
import SummaryPage from './pages/SummaryPage';
import WorkSummaryTab from './components/WorkSummaryTab';
import EduSummaryTab from './components/EduSummaryTab';

import layout from './styles/Layout.module.css';

import { v4 as uuidv4 } from 'uuid';

//TODO: print
function App() {
  const [previewOpen, setOpen] = useState(false);
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
        start: '2021-03',
        end: 'Present',
      },
      {
        id: 1,
        title: 'Accountant',
        company: 'Amazon.com, Inc.',
        city: 'Seattle',
        state: 'Washington',
        start: '2019-07',
        end: '2020-02',
      },
    ],
    edu: [
      {
        id: 0,
        degree: 'Bachelor of Arts',
        major: 'Computer Science',
        uni: 'University of California, Berkeley',
        location: 'Berkeley',
        start: '2020-08',
        end: '2024-05',
      },
    ],
    skills: [
      {
        text: 'JavaScript',
        rating: 4,
        id: 0,
      },
    ],
  });
  const [curr_work_id, setWorkId] = useState('null');
  const [curr_edu_id, setEduId] = useState('null');

  const checkEmpty = (curr_id, type) => {
    const item = info[type].find((item) => item.id === curr_id);
    let itemStr = '';
    for (let prop in item) {
      if (prop !== 'id') {
        itemStr += item[prop];
      }
    }
    return itemStr.length <= 4;
  };

  const removeEmpty = (type) => {
    let curr_id;
    if (type === 'edu') {
      curr_id = curr_edu_id;
    } else {
      curr_id = curr_work_id;
    }
    const isEmpty = checkEmpty(curr_id, type);
    if (isEmpty) {
      if (type === 'edu') {
        deleteEdu(curr_id);
        setEduId('null');
      } else {
        deleteWork(curr_id);
        setWorkId('null');
      }
    }
  };

  const addIfEmpty = (type) => {
    if (type === 'work' && curr_work_id === 'null') {
      setWorkId(addWork());
    } else if (curr_edu_id === 'null') {
      setEduId(addEdu());
    }
  };

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
      degree: 'null',
      major: '',
      uni: '',
      location: '',
      start: '',
      end: '',
    };
    setInfo({ ...info, edu: [...info.edu, newEdu] });
    return newEdu.id;
  };

  const addSkill = (title) => {
    const newSkill = {
      id: uuidv4(),
      text: title,
      rating: 0,
    };
    setInfo({ ...info, skills: [...info.skills, newSkill] });
    return newSkill.id;
  };

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
    const newEduList = info.edu.filter((school) => school.id !== id);
    updateInfo('edu', newEduList);
  };

  const deleteSkill = (id) => {
    const newSkillList = info.skills.filter((skill) => skill.id !== id);
    updateInfo('skills', newSkillList);
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
                <Header previewClick={() => setOpen(true)} title="Contact Info" content="Please enter your contact info" />
                <ContactForm handleChange={updateInfo} />
                <div className={layout.coupleSpaced}>
                  <NavButton text="Back" fill="outline" color="blue" link="/" />
                  <NavButton text="Next: Work History" fill="block" color="red" link="/work/" onClick={() => addIfEmpty('work')} />
                </div>
              </>
            }
          />
          <Route
            path="/work/"
            element={
              <>
                <Header previewClick={() => setOpen(true)} title="Work Experience" content="Please enter your relevant work experience" />
                <WorkForm workList={info.work} handleChange={updateInfo} curr_id={curr_work_id} />
                <div className={layout.coupleSpaced}>
                  <NavButton
                    text="Back"
                    fill="outline"
                    color="blue"
                    link="/ctnt/"
                    onClick={() => {
                      removeEmpty('work');
                    }}
                  />
                  <NavButton
                    text="Next"
                    fill="block"
                    color="red"
                    link="/expr/"
                    onClick={() => {
                      removeEmpty('work');
                    }}
                  />
                </div>
              </>
            }
          />
          <Route
            path="/expr/"
            element={
              <>
                <Header previewClick={() => setOpen(true)} title="Work Experience Summary" content="" />
                <SummaryPage deleteItem={deleteWork} switchItem={switchWork} addItem={addWork} itemHistory={info.work} to="/work" displayText="Add Another Position" Component={WorkSummaryTab} />
                <div className={layout.coupleSpaced}>
                  <NavButton text="Back" fill="outline" color="blue" link="/work/" onClick={() => addIfEmpty('work')} />
                  <NavButton text="Next: Education" fill="block" color="red" link="/edu/" onClick={() => addIfEmpty('edu')} />
                </div>
              </>
            }
          />
          <Route
            path="/edu/"
            element={
              <>
                <Header previewClick={() => setOpen(true)} title="Education" content="Include your past education, even if you haven't graduated yet." />
                <EduForm handleChange={updateInfo} curr_id={curr_edu_id} eduList={info.edu} />
                <div className={layout.coupleSpaced}>
                  <NavButton
                    onClick={() => {
                      return removeEmpty('edu');
                    }}
                    text="Back"
                    fill="outline"
                    color="blue"
                    link="/expr/"
                  />
                  <NavButton
                    onClick={() => {
                      return removeEmpty('edu');
                    }}
                    text="Next"
                    fill="block"
                    color="red"
                    link="/eduh/"
                  />
                </div>
              </>
            }
          />
          <Route
            path="/eduh/"
            element={
              <>
                <Header previewClick={() => setOpen(true)} title="Education summary" content="" />
                <SummaryPage deleteItem={deleteEdu} switchItem={switchEdu} addItem={addEdu} itemHistory={info.edu} to="/edu" displayText="Add another degree" Component={EduSummaryTab} />
                <div className={layout.coupleSpaced}>
                  <NavButton text="Back" fill="outline" color="blue" link="/edu/" onClick={() => addIfEmpty('edu')} />
                  <NavButton text="Next: Skills" fill="block" color="red" link="/skills/" />
                </div>
              </>
            }
          />
          <Route
            path="/skills/"
            element={
              <>
                <Header previewClick={() => setOpen(true)} title="Skills" content="" />
                <SkillsForm handleChange={updateInfo} skills={info.skills} addSkill={addSkill} deleteSkill={deleteSkill} />
                <div className={layout.coupleSpaced}>
                  <NavButton text="Back" fill="outline" color="blue" link="/eduh/" />
                  <NavButton text="Finish" fill="block" color="red" link="/fin/" />
                </div>
              </>
            }
          />
          <Route
            path="/fin"
            element={
              <>
                <Preview info={info} status="final" />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '105%',
                  }}
                >
                  <NavButton text="Back" fill="outline" color="blue" link="/skills/" />
                  <NavButton text="Generate PDF" fill="block" color="red" link="/fin/" />
                </div>
              </>
            }
          />
        </Routes>
        {previewOpen && <Preview status="active" info={info} closePreview={() => setOpen(false)} />}
      </main>
    </div>
  );
}

export default App;
