import React, {useRef} from 'react';
import '../styles/navigation.scss'
import menu from '../icons/menu.png'

function Navigation() {
    const ulRef = useRef();
    return (
        <nav>
            <div></div>
            <p className={'menu'} onClick={() => ulRef.current.classList.toggle('active')}>
                |||
            </p>
            <ul ref={ulRef}>
                <li onClick={() => {
                    document.querySelector('.info').scrollIntoView({
                        behavior: 'smooth', block: 'center'
                    });
                    ulRef.current.classList.toggle('active')
                }}>
                    Обо мне
                </li>
                <li onClick={() => {
                    document.querySelector('.stack').scrollIntoView({
                        behavior: 'smooth', block: 'center'
                    })
                    ulRef.current.classList.toggle('active')
                }}>
                    Технологии
                </li>
                <li onClick={() => {
                    document.querySelector('.projects').scrollIntoView({
                        behavior: 'smooth', block: 'center'
                    })
                    ulRef.current.classList.toggle('active')
                }}>
                    Проекты
                </li>

            </ul>

        </nav>
    );
}

export default Navigation;