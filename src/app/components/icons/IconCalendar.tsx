import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export default function IconCalendar() {
  return (
    <div className='text-3xl pb-2'>
      <FontAwesomeIcon icon={faCalendarDays} />
    </div>
  );
}
