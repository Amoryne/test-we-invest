

export default function Multiply(props) {
  return (
    <button
        onClick={props.multiply}
        className="border-2 border-myblue hover:border-white font-borealis text-2xl  text-myblue hover:text-white font-bold py-2 px-10" 
        >Double
    </button>
  )
}
