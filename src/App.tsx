import { ShoppingCart } from 'phosphor-react'
import './App.css'
import './global.css'

function App() {

  return (
    <div className="App">
      <div className="home">
        <nav className="navbar">
          <img src="./public/Logo.svg" alt="" className="logo" />
          <div className="actions">
            <div className="location">Location</div>
            <div className="cart">Cart</div>
          </div>
        </nav>
        <main className="intro">
          <div className="subIntro">
          <title className="title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </title>
          <div className="items">
            <span>Compra simples e segura</span>
            <span>Embalagem mantém o café intacto</span>
            <span>Entrega rápida e rastreada</span>
            <span>O café chega fresquinho até você</span>
          </div>
          </div>
          <img src="./public/coffe.svg" alt="" className="coffe" />
        </main>
        <div className="coffeList">
          <div className="subCoffeList">
          <h1 className="coffeListTitle">Nossos Cafés</h1>
          <div className="filters">
            <span>Tradicional</span>
            <span>Especial</span>
            <span>Com Leite</span>
            <span>Alcoólico</span>
            <span>Gelado</span>
          </div>
          </div>
          <div className="list">
            <ul className="coffeCards">
              <li className="cardsList">
                <div className="buyDiv">
                  <img src="./public/coffeList.svg" alt="" className="coffeImg" />
                  <span className="tags">Tradicional</span>
                  <h4 className="coffeName">Expresso Tradicional</h4>
                  <p className="description">O tradicional café feito com água quente e grãos moídos</p>
                  <footer className="footerActionBuy">
                  <span className="value">R$ 9,90</span>
                  <div className="actionBuy">
                    <div className="countAmount">
                      <div>-</div>
                      <div>1</div>
                      <div>+</div>
                    </div>
                    <button className="carButton"><ShoppingCart size={22} /></button>
                  </div>
                  </footer>
                </div>
              </li>
              <li className="cardsList">
                <div className="buyDiv">
                  <img src="./public/coffeList.svg" alt="" className="coffeImg" />
                  <span className="tags">Tradicional</span>
                  <h4 className="coffeName">Expresso Tradicional</h4>
                  <p className="description">O tradicional café feito com água quente e grãos moídos</p>
                  <footer className="footerActionBuy">
                  <span className="value">R$ 9,90</span>
                  <div className="actionBuy">
                    <div className="countAmount">
                      <div>-</div>
                      <div>1</div>
                      <div>+</div>
                    </div>
                    <button className="carButton"><ShoppingCart size={22} /></button>
                  </div>
                  </footer>
                </div>
              </li>
              <li className="cardsList">
                <div className="buyDiv">
                  <img src="./public/coffeList.svg" alt="" className="coffeImg" />
                  <span className="tags">Tradicional</span>
                  <h4 className="coffeName">Expresso Tradicional</h4>
                  <p className="description">O tradicional café feito com água quente e grãos moídos</p>
                  <footer className="footerActionBuy">
                  <span className="value">R$ 9,90</span>
                  <div className="actionBuy">
                    <div className="countAmount">
                      <div>-</div>
                      <div>1</div>
                      <div>+</div>
                    </div>
                    <button className="carButton"><a href=""><ShoppingCart size={22} /></a></button>
                  </div>
                  </footer>
                </div>
              </li>
              <li className="cardsList">
                <div className="buyDiv">
                  <img src="./public/coffeList.svg" alt="" className="coffeImg" />
                  <span className="tags">Tradicional</span>
                  <h4 className="coffeName">Expresso Tradicional</h4>
                  <p className="description">O tradicional café feito com água quente e grãos moídos</p>
                  <footer className="footerActionBuy">
                  <span className="value">R$ 9,90</span>
                  <div className="actionBuy">
                    <div className="countAmount">
                      <div>-</div>
                      <div>1</div>
                      <div>+</div>
                    </div>
                    <button className="carButton"><a href=""><ShoppingCart size={22} /></a></button>
                  </div>
                  </footer>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
