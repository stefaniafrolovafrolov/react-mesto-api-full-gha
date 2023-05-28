import React from "react"
import PopupWithForm from "./PopupWithForm"

function PopupConfirmation({ onLoading, onClose, isOpen, onCardDelete, card, onCloseOverlay }) {
  function handleSubmit(event) {
    event.preventDefault()
    onCardDelete(card)
  }

  return (
    <PopupWithForm
      name="popupConfirmation"
      title="Вы уверены?"
      buttonText={onLoading ? `Удаление...` : `Да`}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onCloseOverlay={onCloseOverlay}
    />
  )
}

export default PopupConfirmation
