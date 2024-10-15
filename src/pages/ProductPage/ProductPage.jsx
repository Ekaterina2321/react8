import { useParams } from 'react-router-dom'
import s from './ProductPage.module.css'
import { products } from '../../data/data';
import { Link } from 'react-router-dom'

export function ProductPage() {
    const { id } = useParams();
    const product = products.find(product => product.id == id);
    return (
        <section className={s.product__block}>
            <Link className={s.btn__home} to="/catalog"><span>←</span>На главную</Link>
            <div className={s.product}>
                <div className={s.product__img}>
                    <img src={product.img} alt="" />
                </div>

                <div className={s.product__about}>
                    <h1 className={s.product__name}>
                        {product.name}
                    </h1>

                    <p className={s.desc}>{product.desc}</p>

                    <p className={s.product__price}>
                        <p className={s.price__p}><span>{product.price}</span> ₽</p>
                        <button className={s.active}>Добавить в корзину</button>
                    </p>
                </div>
            </div>
        </section>
    )
}