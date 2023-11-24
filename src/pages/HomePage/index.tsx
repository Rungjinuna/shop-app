import CountProducts from './count-products/CountProducts';
import FiltersCategory from './filter-category/FiltersCategory';

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FiltersCategory />
        <CountProducts />
      </div>
    </div>
  );
};

export default HomePage;
