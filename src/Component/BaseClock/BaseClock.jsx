import { useEffect, useState } from 'react';
import CreateClock from '../CreateClock/CreateClock';

function BaseClock() {
  const [baseTime, setBaseTime] = useState({ time: new Date() });
  const [allClock, setAllClock] = useState([]);
  const [createClock, setCreateClock] = useState(false);
  const [zone, setZone] = useState('');
  // time converter all calculation
  const { time } = baseTime;
  let hour = time.getHours();
  let minute = time.getMinutes();
  let secound = time.getSeconds();
  let day;

  if (zone === 'pst') {
    hour =
      time.getUTCHours() - 7 < 0
        ? time.getUTCHours() - 7 + 12
        : time.getUTCHours() - 7;
  } else if (zone === 'est') {
    hour = Math.abs(time.getUTCHours() - 4);
  }

  if (time.getHours() > 12) {
    day = 'PM';
  } else {
    day = 'AM';
  }

  const tickTime = `${hour > 12 ? hour - 12 : hour}:${
    minute < 10 ? `0${minute}` : minute
  }:${secound < 10 ? `0${secound}` : secound} ${day}`;
  useEffect(() => {
    setInterval(() => {
      setBaseTime({ time: new Date() });
    }, 1000);
  }, []);

  const handleChange = (e) => {
    setZone(e.target.value);
  };

  return (
    <>
      <div className='container mx-auto'>
        <div className='baseClockWrap flex flex-col justify-center items-center space-y-4'>
          <h1 className='text-5xl'>TimeZone Tracker</h1>
          <h2 className='text-3xl'>{tickTime}</h2>
          <span>Change zone: </span>
          <select
            className='outline-none border'
            value={zone}
            onChange={handleChange}
          >
            <option value='gmt'>GMT</option>
            <option value='utc'>UTC</option>
            <option value='pst'>PST</option>
            <option value='est'>EST</option>
          </select>
          <button
            className='border p-2'
            onClick={() => setCreateClock(!createClock)}
          >
            Create a Clock
          </button>
          {createClock ? <CreateClock /> : ''}
        </div>
      </div>
    </>
  );
}

export default BaseClock;
