import React from 'react'
import { Product } from '../Product/Product'
import './catalog.css'

export const Catalog = () => {
const products = [
    {
        id: 1,
        image:'/images/xr.jpg',
        name: 'iPhone XR',
        price:37000,
        desc: 'Инновационные технологии позволили нам создать дисплей, закруглённый по углам и занимающий всю переднюю панель. Результат — iPhone с самым большим ЖК‑дисплеем, который всё так же удобно держать в руке.'
    },
    {   
        id: 2,
        image:'/images/i11.jpg',
        name: 'iPhone 11',
        price:47000,
        desc: 'Совершенно новая система двух камер со сверхширокоугольной камерой. Ночной режим и потрясающее качество видео. Защита от воды и пыли. Целый день без подзарядки. Шесть прекрасных цветов. 11 станет вашим любимым числом.'
    },
    {
        id: 3,
        image:'/images/12.png',
        name: 'iPhone 12',
        price:57000,
        desc: 'Мощный чип. Система двух камер. Невероятно прочная передняя панель Ceramic Shield. И великолепный яркий дисплей OLED. Всё это есть в iPhone 12. В двух размерах.'
    },
    {
        id: 4,
        image:'/images/12 pro.png',
        name: 'iPhone 12 Pro',
        price:65000,
        desc: 'A14 Bionic, самый быстрый процессор iPhone. И система камер Pro, которая гораздо лучше работает при слабом освещении, — а на iPhone 12 Pro Max ещё лучше.'
    },
    {
        id: 5,
        image:'/images/13.png',
        name: 'iPhone 13',
        price:70000,
        desc: 'Чип A15 Bionic отвечает за превосходную работу игр со сложной графикой, а также работу новых функций камеры, таких как режим «Киноэффект» и Фотогра­фические стили. А ещё новый чип увеличивает время работы от аккумулятора.'
    },
    {
        id: 6,
        image:'/images/13pro.png',
        name: 'iPhone 13 Pro',
        price:75000,
        desc: 'Дисплей Super Retina XDR с технологией ProMotion и быстрым, плавным откликом. Грандиозный апгрейд системы камер, открывающий совершенно новые возможности. Исключительная прочность. A15 Bionic — самый быстрый чип для iPhone. И впечатляющее время работы без подзарядки. Всё это Pro.'
    }
]

  return (
    <div className='catalog'>
        {products.map(product => <Product product={product} key={product.id}/> )}
    </div>
  )
}
