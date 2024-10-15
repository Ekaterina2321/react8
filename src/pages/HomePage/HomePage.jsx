import { Banner } from "../../components/Banner/Banner";
import s from './HomePage.module.css'

export function HomePage() {
    return ( 
        <section>
            <Banner/>

            <div className={s.section}>
                <h2>Главная</h2>
            </div>

        </section>
    )
}