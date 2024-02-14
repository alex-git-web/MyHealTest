import React from "react";
import { Moment } from "moment";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import AccessibleIcon from "@mui/icons-material/Accessible";
import CalendarIconSvg from "img/CalendarIconSvg";

interface Props {
  //   value: Moment | null;
  //   setValue: Function;
}

export const CustomCalendarInput = (props: Props) => {
  // const {value, setValue} = props
  const [value, setValue] = React.useState<Moment | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        format="DD.MM.YYYY"
        label={"Від"}
        views={["year", "month", "day"]}
        slots={{
          openPickerIcon: () => <CalendarIconSvg />,
        }}
        slotProps={{
          textField: { size: "small" },
          layout: {
            sx: {
              ".MuiPickersCalendarHeader-label": {
                color: "#000",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
              },
              ".MuiPickersMonth-monthButton, .MuiPickersYear-yearButton": {
                color: "#000",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,

                "&:hover": {
                  backgroundColor: "rgba(23, 50, 54, 0.1)",
                  opacity: 0.7,
                },
              },
              ".MuiPickersMonth-monthButton.Mui-selected, .MuiPickersYear-yearButton.Mui-selected":
                {
                  color: "#fff",
                  backgroundColor: "#173236 !important",

                  "&:hover": {
                    backgroundColor: "#173236",
                    opacity: 1,
                  },
                },
              ".MuiDayCalendar-weekDayLabel": {
                color: "#000",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 500,
              },
              ".MuiPickersDay-today": {
                border: "unset",
                backgroundColor: "rgba(23, 50, 54, 0.25)",
                color: "#000",

                "&:hover": {
                  backgroundColor: "rgba(23, 50, 54, 0.25)",
                  opacity: 0.7,
                },
              },
              ".MuiPickersDay-root": {
                color: "#000",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "rgba(23, 50, 54, 0.1)",
                  opacity: 0.7,
                },
              },
              ".MuiPickersDay-root.Mui-selected": {
                color: "#fff",
                backgroundColor: "#173236 !important",
                "&:hover": {
                  backgroundColor: "#173236",
                  opacity: 1,
                },
              },
            },
          },
        }}
        sx={{
          width: "100%",
          "& .MuiInputLabel-root.Mui-focused": { color: "#173236" }, //styles the label
          "& .MuiOutlinedInput-root": {
            "&:hover > fieldset": { border: "1px solid #173236" },
            "&.Mui-focused > fieldset": { border: "1px solid #173236" },
            height: "40px",
            borderRadius: "30px",
            border: "1px solid #d2e1f5",
            color: "#173236",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
          },
          "& .MuiInputLabel-root": {
            color: "#173236",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
          },
        }}
      />
    </LocalizationProvider>
  );
};
