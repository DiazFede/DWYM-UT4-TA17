import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  return <div>Mostrando información del producto con ID: {id}</div>;
};

export default Product;
