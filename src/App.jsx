import { useState } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => [event, ...prevEvents]);
  };

  return (
    <div className="app py-8 my-2 mx-2 flex items-start justify-around border-black rounded border-2 h-auto">
      <div className="left-panel">
        <LeftPanel addEvent={addEvent} />
      </div>
      <div>
        <hr className='w-1 h-[30rem] border-gray border-2' />
      </div>
      <div className="right-panel">
        <RightPanel events={events} />
      </div>
    </div>
  );
};

export default App;
