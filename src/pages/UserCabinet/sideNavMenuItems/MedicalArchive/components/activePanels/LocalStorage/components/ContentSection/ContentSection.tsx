import React, { useState } from "react";
import { localStorageActivePanel } from "../../../../../../../../../images";

// type PropsType = {};

export default function ContentSection() {
  // const {} = props;

  return (
    <div className="content-section__container content-section local_storage">
      <div className="content-section__content-container content-container">
        <h2 className="content-container__title">Локальний медичний архів</h2>
        <p className="content-container__main-info">
          Локальний архів - це додатковий, захищений архів ваших завантажених
          медичних даних (аналізів, заключень, висновків спеціалістів, тощо).
          <br />
          <br />
          При використанні Локального сховища ваші дані будуть зберігатися лише
          на вашому персональному комп’ютері та будуть вилучені з платформи
          MyHeal.
          <br />
          <br />
          Щоб активувати локальне сховище необхідно поставити галочку “Зберігати
          усі дані архіва локально”. Таким чином ви можете керувати сховищем
          вмикаючи/вимикаючи його.
        </p>

        <div className="content-container__sub-info sub-info">
          <h3 className="sub-info__caption">
            Завантажте локальний сервер медичного архіву на свій девайс
          </h3>
          <p className="sub-info__direction">
            Вам потрібно встановити відповідний додаток на свій персональний
            комп’ютер.
            <br />
            Для цього оберіть свою операційну систему та дочекайтеся його
            завантаження.
          </p>
        </div>

        <div className="content-container__functional-buttons functional-buttons">
          <button className="functional-buttons__download-for-windows-btn">
            Windows
          </button>
          <button className="functional-buttons__download-for-mac-os-btn">
            Mac OS
          </button>
          <button className="functional-buttons__download-for-linux-btn">
            Linux
          </button>
        </div>
      </div>

      <div className="content-section__image-container image-container">
        <img src={localStorageActivePanel} alt="Image" />
      </div>
    </div>
  );
}
