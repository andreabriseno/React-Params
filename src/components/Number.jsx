import { useParams } from "react-router-dom";

const Number = (props) =>{
    const {number} = useParams();

    return (
        <h1 style={{textAlign:"center"}}>The number is: {number}  </h1>
    )
}

export default Number;