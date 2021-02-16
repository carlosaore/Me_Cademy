import StyledDiv from '../atoms/StyledDiv';
import { textData } from '../../data/textData';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import P from '../atoms/P';
import './accordion.css';

export default function CoachesAccordion() {
    return (
        <StyledDiv>
            <Accordion
                allowMultipleExpanded
                allowZeroExpanded
            >
                {textData.coachesAccordion.map((item, index) => (
                    <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <P last>
                            {item.panel}
                        </P>
                    </AccordionItemPanel>
                </AccordionItem>
                ))}
            </Accordion>
        </StyledDiv>
    )
}

