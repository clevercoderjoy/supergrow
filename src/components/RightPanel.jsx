import PropTypes from 'prop-types';

const RightPanel = ({ events }) => {
  return (
    <>
      <h2 className='text-2xl font-bold text-center my-8'>Scheduled Thoughts</h2>
      <div className='border-black border-2 px-2 py-4 rounded lg:w-[25rem] text-center mx-4 lg:mx-4'>
        <ul>
          {
            events.map((event, index) => (
              <li className="border-black border-2 rounded pb-2 mb-2 font-bold" key={index}>
                {event.text} - {new Date(event.date).toLocaleString()}
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
};

RightPanel.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired
    })
  ).isRequired
};

export default RightPanel;
