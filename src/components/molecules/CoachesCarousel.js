import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselDiv from '../atoms/CarouselDiv';
import TextDiv from '../atoms/TextDiv';
import CarouselImg from '../atoms/Img';
import P from '../atoms/P';
import H3 from '../atoms/H3';
import { textData } from '../../data/textData';

class CoachesCarousel extends Component {
    render() {
        const settings = {
            arrows: true,
            dots: false,
            focusOnSelect: true,
            infinite: true,
            speed: 500,
            swipeToSlide: true,
            slidesToScroll: 4,
            slidesToShow: 4,
            initialSlide: 0,
            responsive: [
                {
                breakpoint: 999,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
                },
                {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
                },
                {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
                }
            ]
        };
        return (
                <CarouselDiv>
                    <Slider {...settings}>
                        {textData.coachesData.map((coach, index) => (
                        <div key={uuidv4()}>
                            <CarouselImg src={coach.image} alt=""/>
                            <TextDiv>
                                <H3 small salmon last>{coach.name}</H3>
                                <P small last justify lastCenter><strong>{coach.title}</strong></P>
                                <button id={index} onClick={event => console.log(textData.coachesData[event.target.id].name)}>...</button>
                            </TextDiv>   
                        </div>
                        ))}
                        
                    </Slider>
                </CarouselDiv>
        );
    }
}

export default CoachesCarousel;