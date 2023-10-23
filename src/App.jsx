import Imagen from './assets/drawers.jpg'
import Avatar from './assets/avatar-michelle.jpg'
import ShareIcon from './assets/icon-share.svg'
import Facebook from './assets/icon-facebook.svg'
import Pinterest from './assets/icon-pinterest.svg'
import Twitter from './assets/icon-twitter.svg'
import './App.css'
import { useState } from 'react'

export const App = () => {
  const [activate, setActivate] = useState(false)
  const showSocial = () => {
    setActivate(!activate)
  }
  return (
    <main className="card">
      <img src={Imagen} alt="Imagen de Ejemplo de una planta" />
      <article className="card-article">
        <h1 className="article-title">
          Shift the overall look and feel by adding these wonderful touches to furniture in your
          home
        </h1>
        <p className="article-pagraph">
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
        </p>
        <div className="article-footer">
          <img src={Avatar} alt="Avatar of Michelle" />
          <div>
            <p className="footer-name">Michelle Appleton</p>
            <p className="footer-date">28 Jun 2020</p>
          </div>
          <div className={activate ? 'card-shared-activate' : 'card-shared'}>
            <input type="checkbox" checked={activate} hidden />
            <img
              onClick={showSocial}
              className="footer-icon__sahred"
              src={ShareIcon}
              alt="Icon of Shared"
            />
            {activate && <div className='card-toltip'>
              <p>SHARE</p>
              <img src={Facebook} alt="Icon of Facebook" />
              <img src={Twitter} alt="Icon of Twitter" />
              <img src={Pinterest} alt="Icon of Pinterest" />

            </div>}
          </div>
        </div>
      </article>
    </main>
  )
}
