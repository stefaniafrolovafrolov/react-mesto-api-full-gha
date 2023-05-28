import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import Card from "./Card"
import profileEditAvatar from "../images/profile__edit-avatar.svg"
import Loader from "./Loader"

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext)

  return (
    <main className="content">
      {props.isLoading && <Loader />}

      <section
        className={`profile ${props.isLoading && "page__profile_hidden"}`}
      >
        <div className="profile__container">
          <div className="profile__wrapper-relative">
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Изображенна фото Жак-Ив Кусто в красной шапке"
            />
            <button
              className="profile__edit-avatar"
              type="button"
              onClick={() => {
                props.onEditAvatar(true)
              }}
            >
              <img
                className="profile__edit-pen"
                src={profileEditAvatar}
                alt="изображение письменной ручки"
              />
            </button>
          </div>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={() => {
              props.onEditProfile(true)
            }}
          ></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={() => {
            props.onAddPlace(true)
          }}
        ></button>
      </section>
      <section className="elements">
        {props.cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardDelete={props.onDeletedCard}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onConfirmationPopup={props.onConfirmationPopup}
          />
        ))}
      </section>
    </main>
  )
}

export default Main
