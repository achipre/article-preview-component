import Imagen from './assets/drawers.jpg'
import Avatar from './assets/avatar-michelle.jpg'
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
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and
          uninviting. I’ve got some simple tips to help you make any room feel complete.
        </p>
        <div className="article-footer">
          <img src={Avatar} alt="Avatar of Michelle" />
          <div>
            <p className="footer-name">Michelle Appleton</p>
            <p className="footer-date">28 Jun 2020</p>
          </div>
          <div className={activate ? 'card-shared-activate' : 'card-shared'}>
            <input type="checkbox" checked={activate} hidden />
            <svg
              style={{ backgroundColor: activate ? '#6d7f97' : '#ecf2f8' }}
              onClick={showSocial}
              className="footer-icon__shared"
              width="15"
              height="13"
            >
              <path
                fill={activate ? 'white' : '#6E8098'}
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
            {activate && (
              <div className="card-toltip">
                <p>SHARE</p>
                <img src={Facebook} alt="Icon of Facebook" />
                <img src={Twitter} alt="Icon of Twitter" />
                <img src={Pinterest} alt="Icon of Pinterest" />
                {activate && <div className='toaltip-arrow'></div>}
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  )
}
