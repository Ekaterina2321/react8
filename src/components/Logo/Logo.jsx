import s from './Logo.module.css'
import reactLogo from '/logo.svg'

export function Logo() {
    return (
        <img src={reactLogo} className="logo" alt="Vite logo" />
    )
}