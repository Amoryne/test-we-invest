
export default function Reset(props) {
  return (
    <button
        onClick={props.reset}
        className="border-2 border-myblue hover:border-white font-borealis text-2xl  text-myblue hover:text-white font-bold py-2 px-10" >Reset

    </button>
  )
}
