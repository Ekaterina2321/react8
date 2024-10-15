import s from './BtnAbout.module.css'

export function About() {
    return (
        <button className={s.btn__about}>О компании <span>АвтоТорг</span></button>
    )
}