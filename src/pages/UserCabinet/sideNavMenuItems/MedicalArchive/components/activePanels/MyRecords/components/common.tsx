import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { registerLocale } from "react-datepicker";
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      }
    />
  );
};
