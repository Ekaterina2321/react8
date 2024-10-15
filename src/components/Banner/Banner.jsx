import s from './Banner.module.css'

import banner from '/banner.png'
import { About } from '../BtnAbout/BtnAbout'
import { Header } from '../Header/Header'

export function Banner() {
    return (



        <div className={s.banner}>

            <About />

        </div>


    )
}