import PropTypes from 'prop-types';

function Search({ currentVal, setter }) {
  return <input value={currentVal} onChange={setter} />;
}

export default Search;

Search.propTypes = {
  currentVal: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
};
