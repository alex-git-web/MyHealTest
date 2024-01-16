import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uk from "date-fns/locale/uk";
registerLocale("uk", uk);

export const DropdownComponent = ({
  data,
  setSelected,
  placeholder,
}: {
  data: string[];
  setSelected: Function;
  placeholder: string;
}) => {
  return (
    <Dropdown
      className="dropdown-container"
      controlClassName="dropdown-control-container"
      placeholderClassName="dropdown-placeholder-container"
      menuClassName="dropdown-menu-container"
      arrowClassName="dropdown-arrow-container"
      options={data}
      onChange={({ value }) => setSelected(value)}
      placeholder={placeholder}
      arrowClosed={
        <span className="dropdown-arrow-closed-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 7L8 10L13 7"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      }
      arrowOpen={
        <span className="dropdown-arrow-open-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 7L8 10L13 7"
              stroke="#1E1E1E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      }
    />
  );
};

export const CalendarComponent = ({
  value,
  setValue,
}: {
  value: Date | null;
  setValue: Function;
}) => {
  const CustomInput = ({ value, onClick }: any) => {
    return (
      <div className="calendar-custom-input">
        <input
          type="text"
          className="calendar-custom-input__input"
          value={value}
          onClick={onClick}
          readOnly
        />
        <div className="calendar-custom-input__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4.16667 18.3334C3.70833 18.3334 3.31597 18.1702 2.98958 17.8438C2.66319 17.5174 2.5 17.1251 2.5 16.6667V5.00008C2.5 4.54175 2.66319 4.14939 2.98958 3.823C3.31597 3.49661 3.70833 3.33341 4.16667 3.33341H5V1.66675H6.66667V3.33341H13.3333V1.66675H15V3.33341H15.8333C16.2917 3.33341 16.684 3.49661 17.0104 3.823C17.3368 4.14939 17.5 4.54175 17.5 5.00008V16.6667C17.5 17.1251 17.3368 17.5174 17.0104 17.8438C16.684 18.1702 16.2917 18.3334 15.8333 18.3334H4.16667ZM4.16667 16.6667H15.8333V8.33341H4.16667V16.6667ZM4.16667 6.66675H15.8333V5.00008H4.16667V6.66675Z"
              fill="#173236"
            />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <DatePicker
      selected={value}
      onSelect={(date: any) => setValue(date)}
      onChange={(date: any) => setValue(date)}
      locale={uk}
      calendarClassName="input-calendar-container"
      customInput={<CustomInput />}
      dateFormat={"dd-mm-yyyy"}
    />
  );
};
