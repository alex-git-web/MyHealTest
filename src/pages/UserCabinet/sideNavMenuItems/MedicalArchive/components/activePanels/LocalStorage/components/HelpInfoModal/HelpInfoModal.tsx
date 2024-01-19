import React from "react";

type PropsType = {
  closeModal: Function;
};

export default function HelpInfoModal(props: PropsType) {
  const { closeModal } = props;

  return (
    <div className="help-info-modal__container" onClick={() => closeModal()}>
      <div
        className="help-info-modal__modal-container modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-container__close-btn"
          onClick={() => closeModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 5L15 15"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M15 5L5 15"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <h3 className="modal-container__title">
          Допомога по роботі з медичним архівом
        </h3>

        <div className="modal-container__article article">
          <h5 className="article__section-caption">
            Як інсталювати локальне сховище?
          </h5>
          <p className="article__text">
            Якщо у вас виникнуть труднощі зі встановленням додатку, будь ласка,
            переконайтесь що на вашому пристрої у системних налаштуваннях -
            розділ “Безпеки та приватності” ввімкнено опцію “Завантажувати
            додатки з невідомих джерел”.
            <br />
            <br />
            Після авторизації у додатку, вам прийде сповіщення - “Локальне
            сховище успішно запущено”. Зверніть увагу що керування локальним
            архівом здійснюється лише з веб-версії платформи!
          </p>
          <h5 className="article__section-caption">Як створити новий запис?</h5>
          <p className="article__text">
            Щоб додати новий документ у сховище у розділі “Мої записи”, у
            верхньому правому кутку натисніть “Новий запис”. Вкажіть назву,
            додайте опис, оберіть дату (за замовчуванням встановлено дату
            створення запису, але доцільно вказувати час, коли саме були
            проведені аналізи, дослідження або консультації). Виберіть категорію
            запису, та додайте файл (фото, скан або текстовий документ) та
            натисніть “Зберегти”.
            <br />
            <br />У “Моїх записах” доступний список усіх завантажених файлів.
            Після синхронізації, можна буде здійснювати зручний пошук документів
            за назвою. Всі файли будуть доступні до перегляду, редагування,
            друку та видалення із сховища.
          </p>
          <h5 className="article__section-caption">Як синхронізувати файли?</h5>
          <p className="article__text">
            Щоб перемістити завантажені файли на свій пристрій потрібно
            натиснути кнопку “Синхронізувати”. У несинхронізованих елементах
            відображається кількість записів що були завантажені та доступні до
            переносу на пристрій. Після “Синхронізації” документи будуть
            збережені локально.
          </p>
        </div>
      </div>
    </div>
  );
}
