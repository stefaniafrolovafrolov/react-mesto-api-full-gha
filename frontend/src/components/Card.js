import { useContext } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Card(
  card,
  onCardClick,
  onCardLike,
  onCardDelete,
  onConfirmationPopup
) {
  const currentUser = useContext(CurrentUserContext)
  const isLiked = card.likes.some((user) => user._id === currentUser._id)
  const likeButtonClassName = `element__like-button ${
    isLiked ? "element__like-button_active" : ""
  }`
  const isOwner = card.owner._id === currentUser._id

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteClick() {
    onCardDelete(card)
    onConfirmationPopup(true)
  }

  function handleCardClick() {
    onCardClick(card)
  }

  return (
    <div className="element">
      {isOwner && (
        <button
          className="element__trash"
          aria-label="Удалить"
          onClick={handleDeleteClick}
          type="button"
        />
      )}
      <img
        className="element__mask"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="element__group">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__container-like">
          <button
            className={likeButtonClassName}
            onClick={handleLikeClick}
            type="button"
          ></button>
          <p className="element__count-like">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
