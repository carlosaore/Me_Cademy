import styled from "styled-components";
import Div from "../atoms/Div";
import P from "../atoms/P";



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