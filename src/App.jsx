import { useState, useEffect } from 'react'
import SubjectDetails from './components/SubjectDetails';
import './App.css'

function App() {
  const [subject, setSubject] = useState("");
  const [hour, setHour] = useState("");
  const [subjects, setSubjects] = useState([]);

  function handleSubmit() {
    // console.log(subject);
    // console.log(hour);

    let copyArray = [...subjects];

    copyArray.push({
      subject : subject,
      hour : parseInt(hour)
    });

    setSubjects(copyArray);

    console.log(subjects)
  }

  function increaseHour(index) {
    let copyArray = [...subjects];
    copyArray[index].hour += 1;
    setSubjects(copyArray);
  }

  function decereaseHour(index) {
    if(subjects[index].hour > 0) {
      let copyArray = [...subjects];
      copyArray[index].hour -= 1;
      setSubjects(copyArray);
    }
  }

  useEffect(() => {
    if(subjects.length > 0) {
      localStorage.setItem("subject", JSON.stringify(subjects));
    }
  }, [subjects]);

  useEffect(() => {
    if(localStorage.getItem("subject")) {
      let array = JSON.parse(localStorage.getItem("subject"));
      setSubjects(array);
    }
  }, []);

  return(
    <div className='flex flex-col items-center mt-20 gap-4'>
      <p className='text-3xl'>GEEKSTER EDUCATION PLANNER</p>
      <div className='flex gap-2 items-center justify-center'>
        <input onChange={(e) => setSubject(e.target.value)} className='border-2 rounded-lg p-2 border-neutral-500' placeholder='Subject' type="text" required/>
        <input onChange={(e) => setHour(e.target.value)} className='border-2 rounded-lg p-2 border-neutral-500 w-[20%]' placeholder='Hours' type="number" required/>
        <button onClick={handleSubmit} className='bg-teal-950 text-white p-2 w-[15%] rounded-lg'>Add</button>
      </div>
      <div className='flex flex-col w-full gap-5'>
        {
          subjects.map((item, index) => {
            return <SubjectDetails index={index} subject={item.subject} hour={item.hour} increase={increaseHour} decrease={decereaseHour} />
          })
        }
      </div>
    </div>
  ) 
}

export default App
