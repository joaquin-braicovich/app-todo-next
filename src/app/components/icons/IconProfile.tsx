import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function IconProfile() {
  return (
    <div className='text-3xl pb-2'>
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
}
