const Filter = ({ filterInputHandler }) => {
  return (
    <div>
      find countries <input onChange={filterInputHandler} />
    </div>
  );
};

export default Filter;
