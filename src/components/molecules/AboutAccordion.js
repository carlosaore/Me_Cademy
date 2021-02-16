import { textData } from '../../data/textData';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './accordion.css';
import ComponentWrapper from '../atoms/ComponentWrapper';

export default function AboutAccordion() {
    return (
        <ComponentWrapper>
            <Accordion
                allowMultipleExpanded
                allowZeroExpanded
            >
                {textData.aboutAccordion.map((item, index) => (
                    <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            {item.panel}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                ))}
            </Accordion>
        </ComponentWrapper>
    )
}

