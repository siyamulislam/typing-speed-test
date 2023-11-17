import PropTypes from 'prop-types';

const ItemList = ({ name, data, symbol, ...rest }) => {
  return (
    <li className="list-item my-1 py-4 border rounded" {...rest}>
      {name}
      <span className="d-block display-4">
        {data}
        {symbol && data > 0 ? <small>{symbol}</small> : ''}
      </span>
    </li>
  );
};

ItemList.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired, // Adjust the type based on your actual data type
  symbol: PropTypes.string, // Optional prop, can be a string or undefined
};

export default ItemList;
