function Input({ type, name, value, handleChange, placeholder }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
        className='border p-2'
      />
    </>
  );
}

export default Input;
