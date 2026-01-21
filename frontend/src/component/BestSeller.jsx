import React, {  useContext } from 'react';
import Title from './Title';
import { ShopContext } from "../context/ShopContext";

import ProductItem from './ProductItem';

const BestSeller = () => {

  const { products } = useContext(ShopContext);
  // const [bestSeller, setBestSeller] = useState([]);

  // useEffect(() => {
  //   const bestProduct = products.filter((item) => item.bestSeller);
  //   setBestSeller(bestProduct.slice(0, 5));
  // }, [products]);

  
     const bestSeller = products
    .filter((item) => item.bestSeller)
    .slice(0, 5);


  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <div className='w-3/4 m-auto text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Neque sit molestiae fuga quibusdam. Perspiciatis voluptatibus 
          nostrum unde repellat quas tenetur veniam.
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {bestSeller.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;


