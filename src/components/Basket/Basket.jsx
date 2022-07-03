import React from 'react'
import { useSelector } from "react-redux"
import { CartItem } from '../CartItem/CartItem'
import './basket.css'

export const Basket = () => {
  const items = useSelector((state) => state.cart.itemsInCart)
  const totalPrice = items.reduce((acc, item) => (acc += item.price), 0)

  return (
    <div className='basket'>
      {items.length < 1 ? 
      <div>
        <div className='basket_title'>Ваш заказ</div>
        <div className="empty">Корзина пуста</div>
        <div className='total'>
          <span class="total_price">Итого:</span>
          <span class="total_amount"> 0</span>
          <span class="rouble"> ₽</span>
        </div>
      </div>
        :
      <div>
        <div className='basket_title'>Ваш заказ</div>
        {items.map((product) => <CartItem
          key={product.image}
          name={product.name}
          image={product.image}
          price={product.price}
          id={product.id} />)
        }
        <span className='deliver'>Доставка: </span>
        {totalPrice > 50000 ?
          <span className='green'>Бесплатно</span>
          :
          <span style={{ fontWeight: '700' }}>500 руб.</span>
        }
        <div className='total'>
          <span class="total_price">Итого: </span>
          <span class="total_amount">
          {totalPrice > 50000 ?
             totalPrice
             :
             totalPrice + 500
          }
           </span>
          <span class="rouble"> ₽</span>
          </div>
          <div className='order'>
            <span className="order-title">Оформить заказ</span>
            <form>
              <div class="form-group">
                <input type="text" className="form-control" placeholder="Ваш номер телефона" />
              </div>
              <button className='submit'>Заказать</button>
            </form>
          </div>
        </div>
      }
    </div>
  )
}
