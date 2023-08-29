import { useState } from 'react';

function Input({ type, name, value }) {
  const [input, setInput] = useState(value);
  return (
    <>
      <input
        type={type}
        placeholder={name}
        value={input}
        name={name}
        onChange={(e) => setInput(e.target.value)}
        className='border p-2'
      />
    </>
  );
}

export default Input;
