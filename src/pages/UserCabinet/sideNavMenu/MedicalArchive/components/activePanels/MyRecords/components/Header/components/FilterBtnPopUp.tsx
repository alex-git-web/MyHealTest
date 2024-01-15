import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DropdownComponent = ({
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
      className="filter-btn-pop-up__dropdown-container"
      controlClassName="filter-btn-pop-up__dropdown-control-container"
      placeholderClassName="filter-btn-pop-up__dropdown-placeholder-container"
      menuClassName="filter-btn-pop-up__dropdown-menu-container"
      arrowClassName="filter-btn-pop-up__dropdown-arrow-container"
      options={data}
      onChange={({ value }) => setSelected(value)}
      placeholder={placeholder}
      arrowClosed={
        <span className="filter-btn-pop-up__dropdown-arrow-closed-container">
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
      arrowOpen={
        <span className="filter-btn-pop-up__dropdown-arrow-open-container">
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

const CalendarComponent = ({
  value,
  setValue,
}: {
  value: Date | null;
  setValue: Function;
}) => {
  return (
    <DatePicker
      selected={value}
      onSelect={() => console.log(123)}
      onChange={(date: any) => setValue(date)}
    />
  );
};

export default function FilterBtnPopUp() {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedStatus, setSelectedStatus] = useState<string>();
  const [categories, setCategories] = useState<string[]>([
    "one",
    "two",
    "three",
  ]);
  const [statuses, setStatuses] = useState<string[]>(["one", "two", "three"]);
  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());

  return (
    <div className="filter-btn-pop-up__container filter-btn-pop-up">
      <DropdownComponent
        data={categories}
        setSelected={setSelectedCategory}
        placeholder="Категорія"
      />

      <DropdownComponent
        data={statuses}
        setSelected={setSelectedStatus}
        placeholder="Статус"
      />

      <CalendarComponent value={fromDate} setValue={setFromDate} />
    </div>
  );
}
