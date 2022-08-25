import PropTypes from 'prop-types';

function Cake({ name, amount, cost }) {
  return (
    <div>
      <p>
        {`Name: ${name}`}
      </p>
      <p>
        {`Amount: ${amount}`}
      </p>
      <p>
        {`Cost: ${cost}`}
      </p>
    </div>
  );
}

export default Cake;

Cake.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
};
