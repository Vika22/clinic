import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = () => {
    const services = [
        {
            id: 1, title: 'Проведение одночасового сеанса психотерапии.',
            subtitle: 'Сеанс психотерапии', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 2, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 3, title: 'Проведение лазерной корекции одного или двух глаз.',
            subtitle: 'Лазерная коррекция глаз', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 4, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 5, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 6, title: 'Проведение одночасового сеанса психотерапии.',
            subtitle: 'Сеанс психотерапии', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 7, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 8, title: 'Проведение лазерной корекции одного или двух глаз.',
            subtitle: 'Лазерная коррекция глаз', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 9, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 10, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 11, title: 'Проведение одночасового сеанса психотерапии.',
            subtitle: 'Сеанс психотерапии', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 12, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 13, title: 'Проведение лазерной корекции одного или двух глаз.',
            subtitle: 'Лазерная коррекция глаз', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 14, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 15, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 16, title: 'Проведение одночасового сеанса психотерапии.',
            subtitle: 'Сеанс психотерапии', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 17, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 18, title: 'Проведение лазерной корекции одного или двух глаз.',
            subtitle: 'Лазерная коррекция глаз', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 19, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 20, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 21, title: 'Проведение одночасового сеанса психотерапии.',
            subtitle: 'Сеанс психотерапии', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 22, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 23, title: 'Проведение лазерной корекции одного или двух глаз.',
            subtitle: 'Лазерная коррекция глаз', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 24, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 25, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 26, title: 'Проведение одночасового сеанса психотерапии.',
            subtitle: 'Сеанс психотерапии', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 27, title: 'Проведение краткой консультации, осмотр пациента.',
            subtitle: 'Консультация', hours: '1 год 10хв', price: '1 200 грн'
        },
        {
            id: 28, title: 'Проведение лазерной корекции одного или двух глаз.',
            subtitle: 'Лазерная коррекция глаз', hours: '1 год 10хв', price: '1 200 грн'
        },

    ]
    const settingsMain = {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        nextArrow: (
            <div >
                <div className="next-slick-arrow"></div>
            </div>
        ),
        prevArrow: (
            <div >
                <div className="prev-slick-arrow"></div>
            </div>
        ),
        fade: false
    };
    return (
        <Container>
            <div className="title">
                Послуги (28)
            </div>
            <Row>
                <Col>
                    <Slider
                        {...settingsMain}
                    >
                        {services.map(service => <Card body>{service.title}</Card>)}
                    </Slider>
                </Col>
            </Row>
        </Container>
    )
}

export default Services