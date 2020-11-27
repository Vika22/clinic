import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import menuList from '../assets/images/menu-list.svg'
import lock from '../assets/images/lock.svg'
import arrow from '../assets/images/arrow.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
const Header = () => {
    const languages = [
        'Укр',
        'Рус',
        'Eng'
    ]
    const [lang, setLang] = useState(languages[0])
    const chooseLang = (i) => {
        setLang(i)
        setIsShown(false)
    }
    const [isShown, setIsShown] = useState(false);
    return (
        <header>
            <Container>
                <Navbar className="justify-content-between">
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <div className="search">
                        <Form inline className="position-relative">
                            <FormControl type="text" placeholder="Пошук фахівця" className="w-100 rounded-4 border-grey" />
                            <Button className="position-absolute rounded-2" >Знайти</Button>
                        </Form>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex flex-column lang position-relative"
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}>
                            <span>{lang}<img src={arrow} alt="arrow" className={isShown ? "rotate-180 pl-2" : 'pl-2'} /></span>
                            <div className="position-absolute">
                                {isShown &&
                                    languages.filter(language => language !== lang)
                                        .map((language) =>
                                            <span className="d-flex flex-column " onClick={() => chooseLang(language)} key={language}>{language}</span>
                                        )}
                            </div>
                        </div>
                        <div className='log'>
                            <Button className="w-100">
                                <img src={lock} alt="lock" />Увійти
                            </Button>
                        </div>
                        <div className='menu'>
                            Меню
                            <img src={menuList} alt="menu" />
                        </div>
                    </div>
                </Navbar>
            </Container >
        </header>
    )
}

export default Header
