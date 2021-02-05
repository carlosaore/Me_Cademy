import { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CarouselDiv, TextDiv, Img } from '../Atoms/coachesAtoms';
import { textData } from '../../data/textData';

class CoachesCarousel extends Component {
    render() {
        const settings = {
                dots: true,
                focusOnSelect: true,
                lazyLoad: true,
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "100px", //controls how much of the next and prev slides are visible
                speed: 500,
                swipeToSlide: true,
                slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        };
        return (
                <CarouselDiv>
                    <Slider {...settings}>
                        {textData.coachesData.map((coach, index) => (
                        <div key={index}>
                            <Img src={coach.image} alt=""/>
                            <TextDiv>
                                <h2>{coach.name}</h2>
                                <p><strong>{coach.title}</strong></p>
                                <p>{coach.text}</p>
                            </TextDiv>   
                        </div>
                        ))}
                        
                    </Slider>
                </CarouselDiv>
        );
    }
}

export default CoachesCarousel;