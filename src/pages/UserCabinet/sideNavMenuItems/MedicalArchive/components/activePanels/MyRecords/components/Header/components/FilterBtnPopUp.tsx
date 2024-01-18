import React, { useState } from "react";
import { CalendarComponent, DropdownComponent } from "../../common";

type PropsType = {
  setFilterProps: Function;
};

export default function FilterBtnPopUp(props: PropsType) {
  const { setFilterProps } = props;

  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedStatus, setSelectedStatus] = useState<string>();
  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());

  const [categories, setCategories] = useState<string[]>([
    "one",
    "two",
    "three",
  ]);
  const [statuses, setStatuses] = useState<string[]>(["one", "two", "three"]);

  const setFilter = () => {
    if (selectedCategory || selectedStatus || fromDate || toDate) {
      setFilterProps({
        selectedCategory,
        selectedStatus,
        fromDate,
        toDate,
      });
    }
  };

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

      <div className="filter-btn-pop-up__calendars-input-wrapper">
        <CalendarComponent value={fromDate} setValue={setFromDate} />
        <CalendarComponent value={toDate} setValue={setFromDate} />
      </div>

      <button className="filter-btn-pop-up__confirm-btn" onClick={setFilter}>
        Застосувати фільтр
      </button>
    </div>
  );
}
