import { Btn } from '../Btn/Btn'
import { Reg } from '../Reg/Reg'
import { Logo } from '../Logo/Logo'
import s from './Header.module.css'
import banner from '/banner.png'

import { Link, NavLink } from 'react-router-dom'
import { Banner } from '../Banner/Banner'

export function Header() {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.header__inner}>
                    <div className={s.nav}>
                        <NavLink to="/">Главная</NavLink>
                        <NavLink to="">О нас</NavLink>
                        <NavLink to="/catalog">Каталог</NavLink>
                        <NavLink to="/users">Пользователи</NavLink>
                    </div>
                    <Logo />
                    <div className={s.btns}>
                        <Reg />
                        <Btn />
                    </div>
                </div>
            </div>
        </header>


    )
}