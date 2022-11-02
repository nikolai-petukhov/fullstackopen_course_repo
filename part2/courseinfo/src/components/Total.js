const Total = ({ parts }) => {
  const total = parts.map((part) => part.exercises).reduce((s, p) => s + p);

  return (
    <p>
      <b>total of exercises {total}</b>
    </p>
  );
};

export default Total;
