import styled, { css } from 'styled-components';

const QuoteFormWrapper = styled.div`
    padding : 2em;
    margin-bottom : 60px;
    
    ${props => props.grey &&
        css`
            background: linear-gradient(180deg, #5f737bc4, #49585f);
        `
    }

    ${props => props.teal &&
        css`
            background: linear-gradient(180deg, ${props.theme.colors.meCademyTeal}, #49585f);
        `
    }

    ${props => props.salmon &&
        css`
            background: linear-gradient(180deg, #5f737bc4, ${props.theme.colors.meCademySalmon});
        `
    }

`

export default QuoteFormWrapper;