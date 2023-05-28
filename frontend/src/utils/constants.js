//кнопки открытия попапов
const profileUpdateAvatar = document.querySelector(".profile__edit-avatar")
const profileAddButton = document.querySelector(".profile__add-button")
const profileEditButton = document.querySelector(".profile__edit-button")

//константы профиля
const nameProfile = document.querySelector(".profile__title")
const aboutProfile = document.querySelector(".profile__subtitle")
const avatarProfile = document.querySelector(".profile__avatar")

//находим форму редактирования по ее name
const formEditProfile = document.forms.editForm

//находим форму создания карточек по ее name
const formAddProfile = document.forms.addForm

//находим форму обновления аватара по ее name
const formUpdateAvatar = document.forms.editAvatarForm

export {
  profileAddButton,
  profileEditButton,
  formEditProfile,
  formAddProfile,
  formUpdateAvatar,
  profileUpdateAvatar,
  nameProfile,
  aboutProfile,
  avatarProfile,
}
