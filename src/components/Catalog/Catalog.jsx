import { useState } from 'react'
import { products } from '../../data/data'
import { Card } from '../Card/Card'
import s from './Catalog.module.css'
import item from '/item.png'
import { Search } from '../Search/Search'

export function Catalog() {
    const [query , setQuery] = useState('')
    function handleChange(e) {
        setQuery(e.target.value)
    }
    const filteredProducts = products.filter((product)=>{
        return product.name.toLowerCase().includes(query.toLowerCase());
    })
    return (
        <section>
            <div className={s.container}>

                <div className={s.catalog__block}>
                    <div className={s.title}>
                        <h2>Каталог товаров</h2>

                        <Search handleChange={handleChange}/>
                    </div>

                    <div className={s.category}>
                        <p>Категории:</p>

                        <div className={s.btns}>
                            <button className={s.active}>Все товары</button>
                            <button>Шины/колеса</button>
                            <button>Масла</button>
                            <button>Ароматизаторы</button>
                        </div>
                    </div>

                    <div className={s.items}>

                        {
                            filteredProducts.length ?
                            filteredProducts.map((product)=>{
                                return(
                                <Card id={product.id} image={product.img} name={product.name} desc={product.desc} price={product.price}/>
                                )
                            })
                            :
                            <p className={s.error}>Ничего не найдено по запросу "{query}"</p>
                        }
                    </div>

                    <div className={s.add__more}>
                        <button>Загрузить еще товары</button>
                    </div>
                </div>
            </div>


        </section>
    )
}