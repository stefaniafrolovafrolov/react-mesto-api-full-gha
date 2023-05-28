import { useContext } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"


function Card(props){
  const currentUser = useContext(CurrentUserContext)
  const isLiked = props.card.likes.some((user) => user._id === currentUser._id)
  const likeButtonClassName = `element__like-button ${
    isLiked ? "element__like-button_active" : ""
  }`
  const isOwner = props.card.owner._id === currentUser._id

  /*const deleteButtonClassName = `element__trash ${
    isOwner ? "element__trash_active" : ""
  }`*/

  function handleLikeClick() {
    props.onCardLike(props.card)
  }

  function handleDeleteClick() {
    console.log("click");
    props.onCardDelete(props.card)
    props.onConfirmationPopup(true)
  }

  function handleCardClick() {
    props.onCardClick(props.card)
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
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <div className="element__group">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__container-like">
          <button
            className={likeButtonClassName}
            onClick={handleLikeClick}
            type="button"
          ></button>
          <p className="element__count-like">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
