import { Component } from 'react';
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
            dots: false,
            focusOnSelect: true,
            centerMode: true,
            centerPadding: "75px",
            infinite: true,
            speed: 500,
            swipeToSlide: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            initialSlide: 0,
            responsive: [
                {
                breakpoint: 999,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
                },
                {
                breakpoint: 767,
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
                        <div key={index}>
                            <CarouselImg src={coach.image} alt=""/>
                            <TextDiv>
                                <H3 small salmon last >{coach.name}</H3>
                                <P small last ><strong>{coach.title}</strong></P>
                                <P small last >{coach.text}</P>
                            </TextDiv>   
                        </div>
                        ))}
                        
                    </Slider>
                </CarouselDiv>
        );
    }
}

export default CoachesCarousel;