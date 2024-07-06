import { useState, useRef } from "react";

let intervalRef = null;
function StopWatch() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [miliseconds, setMiliSeconds] = useState(0);
  const [start, setStart] = useState('Start');
  const [click, updateClick] = useState(0);

  function StartWatch() {
    updateClick(prevClick => {
      const newClick = prevClick + 1;

      if (newClick % 2 === 1) {
        setStart('Stop');
        intervalRef = setInterval(() => {
          setMiliSeconds(prevMili=>{
            if(prevMili >100){
            setMiliSeconds(0)
        setSeconds(prevSeconds => {
          if (prevSeconds >= 59) {
            setSeconds(0);
            setMinutes(prevMinutes => {
              if (prevMinutes >= 59) {
                setMinutes(0);
                setHours(prevHours => prevHours + 1);
              } else {
                return prevMinutes + 1;
              }
            });
          } else {
            return prevSeconds + 1;
          }
        });
      }else{
        return prevMili+1
      }
      })

      }, 10);

      } else {
        setStart('Start');
        clearInterval(intervalRef);
        intervalRef = null;
      }

      return newClick;
    });
  }

  function ResetWatch() {
    clearInterval(intervalRef);
    intervalRef = null;
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setMiliSeconds(0)
    setStart('Start');
    updateClick(0);
  }

  return (
    <div className="container">
      <h2>StopWatch</h2>
      <p style={{ width: '100px', height: '50px', fontSize: '26px' }}>
        {hours}:{minutes}:{seconds}:{miliseconds}
      </p>
      <div className="d-flex flex-row">
        <button onClick={StartWatch} className="btn btn-primary">{start}</button>
        <button onClick={ResetWatch} className="btn btn-primary ms-2">Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
