import { ProductList } from 'components/ProductList';
import { Searchbox } from 'components/Searchbox';
import { getProducts } from 'serviceAPI';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const products = getProducts();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const handleInputChange = name => {
    const nextParams = name !== '' ? { name } : '';
    setSearchParams(nextParams);
  };
  return (
    <main>
      <Searchbox value={productName} onChange={handleInputChange} />
      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;
