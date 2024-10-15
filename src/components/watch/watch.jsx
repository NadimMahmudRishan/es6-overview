import './watch.css';

const Watch = ({ watch }) => {
  const { brand, model, price } = watch;
  return (
    <div className="box">
      <h3>Brand : {brand}</h3>
      <p>Model : {model}</p>
      <p>Price : {price}</p>
    </div>
  );
};

export default Watch;
