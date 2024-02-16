import React, { useState, useMemo } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  ListSubheader,
  TextField,
  InputAdornment,
  Theme,
  styled,
  Stack,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MedicalSpecialistsDefault } from "./components/activePanels/MyRecords/contentDefault";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { MedicalSpecialistType } from "./components/activePanels/MyRecords/types";
import SearchIconSvg from "img/SearchIconSvg";

const containsText = (text: string, searchText: string) => {
  return text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
};

interface Props {
  inputStyles?: React.CSSProperties;
  inputLabelStyles?: React.CSSProperties;
  dropdownInputStyles?: React.CSSProperties;
  dropdownMenuStyles?: React.CSSProperties;
}

export const CustomSearchDropdown = (props: Props) => {
  const {
    inputStyles,
    inputLabelStyles,
    dropdownInputStyles,
    dropdownMenuStyles,
  } = props;
  const classes = useStyles();
  const [allOptions, setAllOptions] = useState<string[]>(
    MedicalSpecialistsDefault.map((i) => JSON.stringify(i))
  );
  const [selectedOption, setSelectedOption] = useState<string>(allOptions[0]);

  const [searchText, setSearchText] = useState<string>("");
  const displayedOptions = useMemo(
    () =>
      allOptions.filter((option) =>
        containsText(JSON.stringify(option), searchText)
      ),
    [searchText]
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value as string);
  };

  return (
    <Box className={classes.container}>
      <FormControl fullWidth>
        <CustomInputLabel id="search-select-label" sx={inputLabelStyles}>
          {"Фахівець"}
        </CustomInputLabel>

        <Select
          // Disables auto focus on MenuItems and allows TextField to be in focus
          MenuProps={{
            autoFocus: false,
            className: classes.menuProps,
            sx: dropdownMenuStyles,
          }}
          labelId="search-select-label"
          id="search-select"
          value={selectedOption}
          onChange={handleChange}
          onClose={() => setSearchText("")}
          // This prevents rendering empty string in Select's value
          // if search text would exclude currently selected option.
          renderValue={() => {
            const { name, lastName }: MedicalSpecialistType =
              JSON.parse(selectedOption);
            return name + " " + lastName;
          }}
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
            className: classes.inputProps,
            sx: dropdownInputStyles,
          }}
          className={classes.select}
          sx={inputStyles}
        >
          {/* TextField is put into ListSubheader so that it doesn't
              act as a selectable item in the menu
              i.e. we can click the TextField without triggering any selection.*/}
          <ListSubheader sx={{ lineHeight: "1px", padding: "10px" }}>
            <TextField
              size="small"
              // Autofocus on textfield
              autoFocus
              placeholder="Оберіть фахівця"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIconSvg />
                  </InputAdornment>
                ),
                classes: { input: classes.inputText, root: classes.inputRoot },
              }}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
              className={classes.input}
            />
          </ListSubheader>
          {displayedOptions.map((option, i) => {
            const {
              photo,
              name,
              lastName,
              specialization,
            }: MedicalSpecialistType = JSON.parse(option);
            return (
              <MenuItem key={i} value={option}>
                <img
                  src={JSON.parse(option).photo}
                  alt=""
                  className={classes.userPhoto}
                />

                <Stack className={classes.userInfo}>
                  <Typography className={classes.fullName}>
                    {name + " " + lastName}
                  </Typography>
                  <Typography className={classes.specialization}>
                    {specialization}
                  </Typography>
                </Stack>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export const CustomInputLabel = styled(Typography)(({ theme }) => ({
  color: "#173236",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  marginBottom: "10px",

  "&.Mui-focused": {
    color: "#173236",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
  },
}));

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: "400px",
  },
  select: {
    height: "50px",
    minHeight: 0,

    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #2BBB97",
      borderRadius: "10px",
      outline: "none",
    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${"#173236"}`,
    },
  },
  inputProps: {
    color: "#173236",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
  },
  menuProps: {
    "& .MuiMenu-paper": {
      backgroundColor: "#fff",
      marginTop: "6px",
      borderRadius: "10px",
      maxHeight: "20vh",
    },
    "& .MuiMenuItem-root": {
      height: "max-content",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,

      "&:hover": {
        backgroundColor: "rgba(23, 50, 54, 0.05)",
      },
    },

    "& .Mui-selected": {
      backgroundColor: `${"#F1F6FA"} !important`,

      "&:hover": {
        backgroundColor: "#F1F6FA",
        opacity: "1",
      },
    },
  },

  arrow: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  userPhoto: {
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    marginRight: "10px",
  },
  userInfo: {
    flexDirection: "column",
  },
  fullName: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    color: "#000",
  },
  specialization: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    color: "#000",
  },
  input: {
    height: "40px",
    background: "#F1F6FA",
    borderRadius: "30px",

    "&:hover, &:focus": {
      border: `1px solid ${"#173236"}`,
    },
  },
  inputRoot: {
    "& > fieldset": {
      border: "none",
    },
  },
  inputText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    color: "#000",
    border: "none",

    "&::placeholder": {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      color: "#A5BDDB",
    },
  },
}));
