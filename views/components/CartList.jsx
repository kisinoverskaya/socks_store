const React = require('react');
const Layout = require('../Layout');

module.exports = function CartList({}) {
  return (
    <Layout>
 <div className='cartList'>
  <h3>Корзина:</h3>
  <div className='mainCart'>
    <div className='photo'>
      <img src="https://avatarko.ru/img/avatarka/100na100/text_utka.jpg" alt="Фото носка" />
    </div>
    <div>
      <p>Количество</p>
      <p>10</p>
    </div>
    <div className='items'>
      <p>Носки</p>
      <button>Увеличить</button>
      <button>Уменьшить</button>
    </div>
    </div>

 </div>
    </Layout>
  )
}
