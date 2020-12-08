import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css';

const Carousels = () => {
    
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 carouselimage"
                    src="https://media.bleacherreport.com/f_auto,w_1440,q_auto,c_fill/br-cms/42/fd/dc/da/a458/42dd/b7b8/3dc0cfae3a5a/crop_exact_AP20331630461780.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Bet Keeper</h3>
                    <p className="carouselparagraph">You can create and edit any of your Bet Slips.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carouselimage"
                    src="https://www.thelines.com/wp-content/uploads/2020/12/preview-9.jpg"
                    alt="Second Slide"
                />
                <Carousel.Caption>
                    <h3>Bet Keeper</h3>
                    <p className="carouselparagraph">Drink, Bet, Win!!.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carouselimage"
                    src="https://www.reviewjournal.com/wp-content/uploads/2020/09/14267542_web1_Saints-Raiders-Football-4-1-9.jpg?crop=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Bet Keeper</h3>
                    <p className="carouselparagraph">Never share your username or password.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carouselimage"
                    src="https://deadline.com/wp-content/uploads/2020/09/nfl-2020-opener-chiefs-texans-1-AP.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Bet Keeper</h3>
                    <p className="carouselparagraph">Is it a good time for a drink? It always is.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carouselimage"
                src="https://broncoswire.usatoday.com/wp-content/uploads/sites/68/2020/09/NFL-Power-Rankings-Denver-Broncos.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Bet Keeper</h3>
                    <p className="carouselparagraph">Remember to check your slips before betting any money on them. (No refunds allowed)</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousels;