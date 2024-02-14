import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const data = ["Весна", "Осінь", "Літо"];
export default function CustomDropdown() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box>
      <FormControl fullWidth size="small">
        <InputLabel
          sx={{
            color: "#173236",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            letterSpacing: "-3%",

            "&.Mui-focused": {
              color: "#173236",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              letterSpacing: "-3%",
            },
          }}
          id="demo-simple-select-label"
        >
          Пора року
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Пора року"
          onChange={handleChange}
          IconComponent={(props) => (
            <KeyboardArrowDownOutlinedIcon
              htmlColor="#173236"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              {...props}
            />
          )}
          inputProps={{
            sx: {
              color: "#173236",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
            },
          }}
          MenuProps={{
            sx: {
              "& .MuiMenu-paper": {
                background: "#fff",
                marginTop: "5px",
                borderRadius: "10px",
              },
              "& .MuiMenuItem-root": {
                padding: "0px 15px",
                height: "40px",
                color: "#173236",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,

                "&:hover": {
                  backgroundColor: "rgba(23, 50, 54, 0.05)",
                },
              },

              "& .Mui-selected": {
                backgroundColor: "#173236 !important",
                color: "#fff",

                "&:hover": {
                  backgroundColor: "#173236",
                  opacity: "1",
                },
              },
            },
          }}
          sx={{
            height: "40px",

            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #d2e1f5",
              borderRadius: "30px",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #173236",
            },
          }}
        >
          {data.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
