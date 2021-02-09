import Div from "../atoms/Div";
import P from "../atoms/P";
import QuoteFormWrapper from '../atoms/QuoteFormWrapper';

const Quote = () => (
    <QuoteFormWrapper>
        <Div
            height="100px"
            marginTop="30px"
            border="5px solid black"
            display="flex"
        >
            <P 
                color="white" 
                fontSize="30px"
            >
                "Find your next job!"
            </P>
        </Div>
    </QuoteFormWrapper>
)


export default Quote;