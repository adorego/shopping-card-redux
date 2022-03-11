import ProductItem from './ProductItem';
import classes from './Products.module.css';

const ProductList = [
  {
    id:"id1",
    title:"NewBook 1",
    price: 30,
    description:"New Book"
  },
  {
    id:"id2",
    title:"NewBook 2",
    price: 40,
    description:"New Book"
  }
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {ProductList.map(
          (product) =>{
            return <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
          }
        )}
        
      </ul>
    </section>
  );
};

export default Products;
