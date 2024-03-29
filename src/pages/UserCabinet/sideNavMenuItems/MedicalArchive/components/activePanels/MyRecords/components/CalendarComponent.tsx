import React from 'react';
import DatePicker from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import { forwardRef } from 'react';

export const CalendarComponent = ({
  value,
  setValue,
  placeholder,
}: {
  value: Date | null;
  setValue: Function;
  placeholder?: string;
}) => {
  const CustomInput = forwardRef(({ value, onClick }: any, ref) => (
    <div className="custom-input__container">
      <input type="text" className="input" value={value} onClick={onClick} placeholder={placeholder} readOnly />
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4.16667 18.3334C3.70833 18.3334 3.31597 18.1702 2.98958 17.8438C2.66319 17.5174 2.5 17.1251 2.5 16.6667V5.00008C2.5 4.54175 2.66319 4.14939 2.98958 3.823C3.31597 3.49661 3.70833 3.33341 4.16667 3.33341H5V1.66675H6.66667V3.33341H13.3333V1.66675H15V3.33341H15.8333C16.2917 3.33341 16.684 3.49661 17.0104 3.823C17.3368 4.14939 17.5 4.54175 17.5 5.00008V16.6667C17.5 17.1251 17.3368 17.5174 17.0104 17.8438C16.684 18.1702 16.2917 18.3334 15.8333 18.3334H4.16667ZM4.16667 16.6667H15.8333V8.33341H4.16667V16.6667ZM4.16667 6.66675H15.8333V5.00008H4.16667V6.66675Z"
            fill="#173236"
          />
        </svg>
      </div>
    </div>
  ));

  return (
    <DatePicker
      selected={value}
      onSelect={(date: any) => setValue(date)}
      onChange={(date: any) => setValue(date)}
      locale={uk}
      calendarClassName="input-calendar"
      customInput={<CustomInput />}
      dateFormat={'dd-MM-yyyy'}
    />
  );
};
