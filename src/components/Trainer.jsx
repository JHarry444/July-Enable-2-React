import PropTypes from 'prop-types';

function Trainer(props) {
  // console.log("PROPS: ", props);
  const { name, age, specialism } = props;

  return (
    <div>
      <p>
        Name:
        {name}
      </p>
      <p>
        Age:
        {age}
      </p>
      <p>
        Specialism:
        {specialism}
      </p>
    </div>
  );
}

export default Trainer;

Trainer.defaultProps = {
  age: 20,
};

Trainer.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  specialism: PropTypes.string.isRequired,
};
