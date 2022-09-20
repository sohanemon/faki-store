const Card = ({ id, price, src, title, category, getDetails }) => {
  return (
    <div
      onClick={() => {
        getDetails(id);
      }}
      className='lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-md rounded-md cursor-pointer'
    >
      <span className='block relative h-48 rounded overflow-hidden'>
        <img
          alt='{title}'
          className='object-cover object-center w-full h-full block'
          src={src}
        />
      </span>
      <div className='mt-4'>
        <h3 className='uppercase text-gray-500 text-xs tracking-widest title-font mb-1'>
          {category}
        </h3>
        <h2 className='text-gray-900 title-font text-lg font-medium'>
          {title}{" "}
        </h2>
        <p className='mt-1'>${price}</p>
      </div>
    </div>
  );
};

export default Card;
