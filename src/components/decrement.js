const Decrement = (props) => {
  return (
    <button
      onClick={props.decrement}
      className="border-2 border-myblue hover:border-white font-borealis text-2xl  text-myblue hover:text-white font-bold py-2 px-10"
    >
      Less
    </button>
  );
};
export default Decrement;
