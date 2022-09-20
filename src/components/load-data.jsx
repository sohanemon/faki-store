import { useEffect, useState } from "react";
import Card from "./card";
import Modal from "./modal";

const LoadData = ({ setShowFooter }) => {
  const [products, setProducts] = useState();
  const [product, setProduct] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);
  const getDetails = (id) => {
    setShowFooter(false);
    setModalOpen(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
    console.log(product);
  };
  if (modalOpen) {
    return (
      <Modal
        setOpenModal={setModalOpen}
        setShowFooter={setShowFooter}
        product={product}
      />
    );
  } else {
    return (
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {products?.map((e) => (
              <Card
                id={e.id}
                key={e.id}
                price={e.price}
                category={e.category}
                src={e.image}
                title={e.title}
                getDetails={getDetails}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default LoadData;
