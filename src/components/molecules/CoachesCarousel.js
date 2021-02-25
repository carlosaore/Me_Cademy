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
import Button from '../atoms/Button';
import { textData } from '../../data/textData';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');



class CoachesCarousel extends Component {

    constructor () {
        super();
        this.state = {
          showModal: []
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        };
      
        handleOpenModal (index) {
            let newShowModal = this.state.showModal;
            newShowModal[index] = true;
            this.setState({ showModal: newShowModal });
        };
        
        handleCloseModal () {
            let newShowModal = this.state.showModal.map(element => false);
            this.setState({ showModal: newShowModal });
        };

        componentDidMount() {
            let newShowModal = textData.coachesData.map(coach => false);
            this.setState({ showModal : newShowModal })
        };


    render() {
        const settings = {
            arrows: true,
            dots: false,
            focusOnSelect: false,
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
                    slidesToScroll: 1,
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
                                <P small last alignCenter><strong>{coach.title}</strong></P>
                                <Button id={index} onClick={event => this.handleOpenModal(event.target.id)}>···</Button>
                                <ReactModal
                                    isOpen={this.state.showModal[index]}
                                    shouldCloseOnEsc={true}
                                    onRequestClose={this.handleCloseModal}
                                    className="modal"
                                    overlayClassName="overlay"
                                >
                                    <Button right onClick={this.handleCloseModal}>✖</Button>
                                    <H3 salmon last>{coach.name}</H3>
                                    <P last alignCenter><strong>{coach.title}</strong></P>
                                    <P last>{coach.text}</P>
                                </ReactModal>
                            </TextDiv>   
                        </div>
                        ))}
                        
                    </Slider>
                </CarouselDiv>
        );
    }
}

export default CoachesCarousel;