export default function Increment(props) {
  return (
    <div>
      <button
        className="hover:scale-110 transition ease-in-out delay-80 border-2 border-myblue hover:border-white font-borealis text-2xl  text-myblue hover:text-white font-bold py-2 px-10"
        onClick={props.increment}
      >
        +
      </button>
    </div>
  );
}
