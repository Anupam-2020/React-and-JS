const Input = ({ type, setItemName, value="", onBlur }) => {
  function handleInput(e) {
    setItemName(e.target.value);
  }

  return (
    <div>
      <input
        placeholder={`Type ${type} name`}
        value={value}
        onChange={handleInput}
        onBlur={onBlur}
        autoFocus
      />
    </div>
  );
};

export default Input;
