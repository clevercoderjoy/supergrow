import moment from 'moment';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LeftPanel = ({ addEvent }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const scheduledTime = moment(date).toDate();
    const now = new Date();

    if (scheduledTime > now)
    {
      setTimeout(() => {
        addEvent({ text, date: scheduledTime });
      }, scheduledTime - now);
      toast.success("Thought Scheduled!", {
        position: "top-center"
      });
      setDate("");
      setText("");
    }
    else
    {
      toast.error("Selected time can't be in the past", {
        position: "top-center"
      });
    }
  };

  return (
    <>
      <h2 className='text-2xl font-bold text-center mb-8'>What&apos;s on your mind?</h2>
      <form onSubmit={handleSubmit} className='border-black border-2 px-2 py-4 rounded flex flex-col w-[25rem]'>
        <input
          className='border-black border-2 rounded px-2 py-4 font-bold text-center mb-2'
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Spill your mind here..."
          required
        />
        <input
          className='border-black border-2 rounded px-2 py-4 mb-2 text-center font-bold'
          type="datetime-local"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <button className='border-black border-2 rounded p-1 mt-2 hover:bg-black hover:text-white font-bold text-xl' type="submit">Submit</button>
      </form>
      <ToastContainer />
    </>
  );
};

LeftPanel.propTypes = {
  addEvent: PropTypes.func.isRequired,
};

export default LeftPanel;
