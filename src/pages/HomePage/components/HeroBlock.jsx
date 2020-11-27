import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Rectangle255 from '../../../assets/images/Rectangle255.png'
import Rectangle256 from '../../../assets/images/Rectangle256.png'
import media from '../../../assets/images/media.svg'
import map from '../../../assets/images/map.svg'
import ModalMedia from './ModalMedia';
import ModalMap from './ModalMap'
const HeroBlock = () => {
    const [showMedia, setShowMedia] = useState(false);
    const handleCloseMedia = () => setShowMedia(false);
    const handleShowMedia = () => setShowMedia(true);
    const [showMap, setShowMap] = useState(false);
    const handleCloseMap = () => setShowMap(false);
    const handleShowMap = () => setShowMap(true);
    return (
        <div className="hero">
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={6} className='p-0'>
                        <div className="hero__container-left">

                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6} className='p-0'>
                        <div className="hero__container-right">
                            <div className="hero__wrapper">
                                <img src={Rectangle255} alt="photos" className="hero__img" />
                                <div className="overlay h-100">
                                    <div className="cursor-pointer  d-flex align-items-sm-end" onClick={handleShowMedia}>
                                        <img src={media} alt="media" />
                                        <div className="text-white">
                                            Переглянути 12 Фото
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ModalMedia show={showMedia} handleClose={handleCloseMedia} />
                            <div className="hero__wrapper">
                                <img src={Rectangle256} alt="map" className="hero__img" />
                                <div className="cursor-pointer  d-flex align-items-sm-end" onClick={handleShowMap}>
                                    <div className="overlay">
                                        <img src={map} alt="map" />
                                        <div className="text-white">
                                            Клініка на мапі
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ModalMap show={showMap} handleClose={handleCloseMap} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroBlock
