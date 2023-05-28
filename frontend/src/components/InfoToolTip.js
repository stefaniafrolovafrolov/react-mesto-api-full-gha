import SuccessIcon from "../images/SuccessIcon.svg";
import FailIcon from "../images/FailIcon.svg";
/*import closeIcon from "../images/CloseIcon.svg";*/
import React from "react";

function InfoToolTip(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__content">
        {props.isSuccess ? (
          <>
            <img
              src={`${SuccessIcon}`}
              alt="Регистрация прошла успешно."
              className="popup__tooltip_image"
            />
            <p className="popup__tooltip_message">
              Вы успешно зарегистрировались!
            </p>
          </>
        ) : (
          <>
            <img
              src={`${FailIcon}`}
              alt="Регистрация не была выполнена."
              className="popup__tooltip_image"
            />
            <p className="popup__tooltip_message">
              Что-то пошло не так. Попробуйте ещё раз!
            </p>
          </>
        )}

        <button type="button" className="popup__close" onClick={props.onClose}>
         {/*  <img src={closeIcon} alt="кнопка закрытия попапа" />*/}
        </button>
      </div>
    </div>
  );
}

export default InfoToolTip;