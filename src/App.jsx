import Imagen from './assets/drawers.jpg'
import Avatar from './assets/avatar-michelle.jpg'
import ShareIcon from './assets/icon-share.svg'
import './App.css'

export const App = () => {
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
          <img className="footer-icon__sahred" src={ShareIcon} alt="Icon of Shared" />
        </div>
      </article>
    </main>
  )
}
