import React, { useState, useEffect } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import PopupWithForm from "./PopupWithForm"

function EditProfilePopup({
  isOpen,
  onUpdateUser,
  onLoading,
  onClose,
  onCloseOverlay,
}) {
  const currentUser = React.useContext(CurrentUserContext)
  const [about, setAbout] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    setName(currentUser.name)
    setAbout(currentUser.about)
  }, [currentUser, isOpen])

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateUser({
      name: name,
      about: about,
    })
  }

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeAbout(e) {
    setAbout(e.target.value)
  }

  return (
    <PopupWithForm
      name="popupEditProfile"
      title="Редактировать профиль"
      buttonText={onLoading ? `Сохранение...` : `Сохранить`}
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      onCloseOverlay={onCloseOverlay}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_name"
          id="nameInput"
          name="name"
          type="text"
          value={name || ""}
          onChange={handleChangeName}
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="nameInput-error error" />
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_job"
          id="jobInput"
          name="about"
          type="text"
          value={about || ""}
          onChange={handleChangeAbout}
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="jobInput-error error" />
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup
