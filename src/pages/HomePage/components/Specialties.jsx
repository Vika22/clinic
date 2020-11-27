import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Specialties = () => {
    const [showAll, setShowAll] = useState(false);
    const handleCloseShowAll = () => setShowAll(false);
    const handleShowShowAll = () => setShowAll(true);

    const doctors = [
        { id: 1, prof: 'Акушер-Гінеколог', count: 16 },
        { id: 2, prof: 'Алерголог', count: 7 },
        { id: 3, prof: 'Алерголог Дитячий', count: 1 },
        { id: 4, prof: 'Генетик', count: 12 },
        { id: 5, prof: 'Гематолог', count: 1 },
        { id: 6, prof: 'Гінеколог-Онколог', count: 3 },
        { id: 7, prof: 'Вірусолог', count: 3 },
        { id: 8, prof: 'Токсиколог', count: 11 },
        { id: 9, prof: 'Хірург-Онколог', count: 2 },
        { id: 10, prof: 'Педіатр', count: 9 },
        { id: 11, prof: 'Акушер-Гінеколог', count: 16 },
        { id: 12, prof: 'Алерголог', count: 7 },
        { id: 13, prof: 'Алерголог Дитячий', count: 1 },
        { id: 14, prof: 'Генетик', count: 12 },
        { id: 15, prof: 'Гематолог', count: 1 },
        { id: 16, prof: 'Гінеколог-Онколог', count: 3 },
        { id: 17, prof: 'Вірусолог', count: 3 },
        { id: 18, prof: 'Токсиколог', count: 11 },
        { id: 19, prof: 'Хірург-Онколог', count: 2 },
        { id: 20, prof: 'Педіатр', count: 9 },
        { id: 21, prof: 'Акушер-Гінеколог', count: 16 },
        { id: 22, prof: 'Алерголог', count: 7 },
        { id: 23, prof: 'Алерголог Дитячий', count: 1 },
        { id: 24, prof: 'Генетик', count: 12 },
        { id: 25, prof: 'Гематолог', count: 1 },
        { id: 26, prof: 'Гінеколог-Онколог', count: 3 },
        { id: 27, prof: 'Вірусолог', count: 3 },
        { id: 28, prof: 'Токсиколог', count: 11 },
        { id: 29, prof: 'Хірург-Онколог', count: 2 },
        { id: 30, prof: 'Педіатр', count: 9 },
        { id: 31, prof: 'Акушер-Гінеколог', count: 16 },
        { id: 32, prof: 'Алерголог', count: 7 },
        { id: 33, prof: 'Алерголог Дитячий', count: 1 },
        { id: 34, prof: 'Генетик', count: 12 },
        { id: 35, prof: 'Гематолог', count: 1 },
        { id: 36, prof: 'Гінеколог-Онколог', count: 3 },
        { id: 37, prof: 'Вірусолог', count: 3 },
        { id: 38, prof: 'Токсиколог', count: 11 },
        { id: 39, prof: 'Хірург-Онколог', count: 2 },
        { id: 40, prof: 'Педіатр', count: 9 },
        { id: 41, prof: 'Вірусолог', count: 3 },
        { id: 42, prof: 'Токсиколог', count: 11 },
        { id: 43, prof: 'Хірург-Онколог', count: 2 },

    ]
    return (
        <div>
            <Container>

                <div className="title">
                    Спеціальності ({doctors.length})
                    </div>
                {showAll ? <Button onClick={handleCloseShowAll}>Скрити всі</Button> : <Button onClick={handleShowShowAll}>Показати всі</Button>}

                <Row>
                    {doctors.map(doctor =>
                        doctor.id <= (showAll ? doctors.length : 9) ?
                            <Col key={doctor.id} lg={4} md={6} sm={12}>
                                <p>{doctor.prof}</p>
                            </Col> : ''
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default Specialties
