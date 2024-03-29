export default function Reset(props) {
  return (
    <button
      onClick={props.reset}
      className="hover:scale-110 transition ease-in-out delay-80 border-2 border-white hover:border-white font-borealis text-2xl  text-myblue hover:text-white font-bold py-2 px-10"
    >
      Reset
    </button>
  );
}
