import { useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';

const initClock = {
  name: '',
  time: '',
};

function CreateClock() {
  const [createClock, setCreateClock] = useState({ ...initClock });
  const handleClick = (e) => {
    e.preventDefault();
    setCreateClock({
      ...createClock,
      [e.target.name]: e.target.value,
    });
    console.log(createClock);
  };
  return (
    <>
      <div className='flex'>
        <form>
          <Input type='text' name='name' placeholder='Name' />
          <Input type='time' />
          <Button type='submit' name='Create' handleClick={handleClick} />
        </form>
      </div>
    </>
  );
}
export default CreateClock;
