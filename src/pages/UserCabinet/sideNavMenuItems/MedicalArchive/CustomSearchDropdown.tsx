import React, {
  useState,
  useMemo,
  ReactElement,
  useCallback,
  useEffect,
} from "react";
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
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { MedicalSpecialistType } from "./components/activePanels/MyRecords/types";
import SearchIconSvg from "img/SearchIconSvg";
import { containsText } from "./utils";

interface Props {
  label: string;
  inputLabel: string;
  searchInputPlaceholder: string;
  menuItems: any[];
  itemComponent: Function;
  renderValue?: Function;
  selectedValues: string[];
  setSelectedValues: Function;
  multiple?: boolean;
  inputStyles?: React.CSSProperties;
  labelStyles?: React.CSSProperties;
  inputLabelStyles?: React.CSSProperties;
  dropdownStyles?: React.CSSProperties;
  dropdownInputStyles?: React.CSSProperties;
  dropdownMenuStyles?: React.CSSProperties;
  styles?: React.CSSProperties;
}

export const CustomSearchDropdown = (props: Props) => {
  const {
    label,
    inputLabel,
    searchInputPlaceholder,
    menuItems,
    itemComponent,
    renderValue,
    selectedValues,
    setSelectedValues,
    multiple = false,
    inputLabelStyles,
    labelStyles,
    dropdownStyles,
    dropdownInputStyles,
    dropdownMenuStyles,
    styles,
  } = props;
  const classes = useStyles();

  const [searchText, setSearchText] = useState<string>("");

  const allOptions = useMemo(() => {
    return menuItems.map((i) => JSON.stringify(i));
  }, []);

  const displayedOptions = useMemo(
    () =>
      allOptions.filter((option) =>
        containsText(JSON.stringify(option), searchText)
      ),
    [searchText]
  );

  const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
    const {
      target: { value },
    } = event;

    setSelectedValues(
      !multiple
        ? [event.target.value as string]
        : // On autofill we get a stringified value.
        typeof value === "string"
        ? value.split(",")
        : value
    );
  };

  return (
    <Box sx={styles}>
      <CustomInputLabel sx={labelStyles}>{label}</CustomInputLabel>

      <FormControl fullWidth>
        <CustomSelectInputLabel
          id="search-select-label"
          sx={{
            ...inputLabelStyles,
            display: selectedValues.length ? "none" : "block",
          }}
          shrink={false}
        >
          {inputLabel}
        </CustomSelectInputLabel>
        <Select
          multiple={multiple}
          label={""}
          labelId="search-select-label"
          id="search-select"
          // Disables auto focus on MenuItems and allows TextField to be in focus
          MenuProps={{
            autoFocus: false,
            sx: {
              "& .MuiList-root": {
                paddingTop: 0,
              },

              "& .MuiMenu-paper": {
                backgroundColor: "#fff",
                marginTop: "6px",
                borderRadius: "10px",
                maxHeight: "25vh",
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
              ...dropdownMenuStyles,
            },
          }}
          value={selectedValues}
          onChange={handleChange}
          onClose={() => setSearchText("")}
          renderValue={(selected) => {
            // This prevents rendering empty string in Select's value
            // if search text would exclude currently selected option.
            return !renderValue ? selected : renderValue(selected);
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
            sx: {
              color: "#173236",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              ...dropdownInputStyles,
            },
          }}
          sx={{
            height: "50px",
            minHeight: 0,

            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${
                selectedValues.length ? "#173236" : "#2BBB97"
              }`,
              borderRadius: "10px",
              outline: "none",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${"#173236"}`,
            },
            ...dropdownStyles,
          }}
        >
          {/* TextField is put into ListSubheader so that it doesn't
        act as a selectable item in the menu
        i.e. we can click the TextField without triggering any selection.*/}
          <ListSubheader sx={{ lineHeight: "1px", padding: "10px" }}>
            <SearchInput
              size="small"
              // Autofocus on textfield
              autoFocus
              placeholder={searchInputPlaceholder}
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
            />
          </ListSubheader>
          {displayedOptions.map((option, index) => {
            return (
              <MenuItem key={index} value={option}>
                {itemComponent({ item: JSON.parse(option) })}
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
  marginBottom: "5px",

  "&.Mui-focused": {
    color: "#173236",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
  },
}));

export const CustomSelectInputLabel = styled(InputLabel)(({ theme }) => ({
  color: "#173236",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,

  "&.Mui-focused": {
    color: "#173236",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
  },
}));

export const SearchInput = styled(TextField)(({ theme }) => ({
  height: "40px",
  background: "#F1F6FA",
  borderRadius: "30px",

  "&:hover, &:focus": {
    border: "none",
  },
}));

const useStyles = makeStyles((theme: Theme) => ({
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
    marginLeft: "5px",

    "&::placeholder": {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      color: "#A5BDDB",
    },
  },
}));
