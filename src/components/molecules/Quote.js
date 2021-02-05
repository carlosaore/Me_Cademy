import styled from "styled-components";
import Div from "../Atoms/quoteBoxAtoms/Div";
import P from "../Atoms/quoteBoxAtoms/P";



const Quote = (props) => (
    <Div
    height="100px"
    marginTop="30px"
    border="5px solid black"
    display="flex"
    >
        
        <div>
        <P 
        color="white" 
        fontSize="30px"
        >"Find your next job!"</P>
        </div>
          

    </Div>
)


export default Quote;