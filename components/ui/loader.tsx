
import BeatLoader from "react-spinners/BeatLoader";


const Loader = ()=>{

    return(
        <>
        <BeatLoader  className="block absolute top-1/2 -translate-y-1/2 w-full text-center left-0 " color="#36d7b7" size={24} />
        </>
    )
}


export default Loader ;