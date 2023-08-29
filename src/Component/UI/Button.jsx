function Button({ name, type, handleClick }) {
  return (
    <>
      <button type={type} className='border p-2' onClick={handleClick}>
        {name}
      </button>
    </>
  );
}

export default Button;
