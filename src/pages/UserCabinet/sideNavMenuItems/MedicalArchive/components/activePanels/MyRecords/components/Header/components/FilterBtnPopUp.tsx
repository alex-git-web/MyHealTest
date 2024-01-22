import React, { useMemo, useState } from 'react';
import { DropdownComponent } from '../../DropdownComponent';
import { CalendarComponent } from '../../CalendarComponent';
import { FilterPropsType } from '../../../types';

type PropsType = {
  setFilterProps: Function;
};

export default function FilterBtnPopUp(props: PropsType) {
  const { setFilterProps } = props;

  const [filterParams, setFilterParams] = useState<FilterPropsType>({
    selectedCategory: '',
    selectedStatus: '',
    fromDate: null,
    toDate: null,
  });

  const [categories, setCategories] = useState<string[]>(['one', 'two', 'three']);
  const [statuses, setStatuses] = useState<string[]>(['one', 'two', 'three']);

  const setFilter = () => {
    setFilterProps({
      ...filterParams,
    });
  };

  const isConfirmBtnDisabled = useMemo((): boolean => {
    const arr = Array.from(Object.values(filterParams));
    let isEmpty = true;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        isEmpty = false;
        break;
      }
    }
    return isEmpty;
  }, [filterParams]);

  return (
    <div className="filter-btn-pop-up__container filter-btn-pop-up" onClick={e => e.stopPropagation()}>
      <DropdownComponent
        data={categories}
        setSelected={(value: string) =>
          setFilterParams(state => {
            return {
              ...state,
              selectedCategory: value,
            };
          })
        }
        placeholder="Категорія"
      />

      <DropdownComponent
        data={statuses}
        setSelected={(value: string) =>
          setFilterParams(state => {
            return {
              ...state,
              selectedStatus: value,
            };
          })
        }
        placeholder="Статус"
      />

      <div className="filter-btn-pop-up__calendars-input-wrapper">
        <CalendarComponent
          value={filterParams.fromDate}
          setValue={(value: Date | null) =>
            setFilterParams(state => {
              return {
                ...state,
                fromDate: value,
              };
            })
          }
          placeholder="Від"
        />
        <CalendarComponent
          value={filterParams.toDate}
          setValue={(value: Date | null) =>
            setFilterParams(state => {
              return {
                ...state,
                toDate: value,
              };
            })
          }
          placeholder="До"
        />
      </div>

      <button className="filter-btn-pop-up__confirm-btn" onClick={setFilter} disabled={isConfirmBtnDisabled}>
        Застосувати фільтр
      </button>
    </div>
  );
}
