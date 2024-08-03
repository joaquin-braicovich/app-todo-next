import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function IconClock() {
  return (
    <div className='text-3xl pb-2'>
      <FontAwesomeIcon icon={faClock} />
    </div>
  );
}
