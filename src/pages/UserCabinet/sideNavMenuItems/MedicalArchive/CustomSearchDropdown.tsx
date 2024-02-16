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
  Button,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { MedicalSpecialistsDefault } from "./components/activePanels/MyRecords/contentDefault";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { MedicalSpecialistType } from "./components/activePanels/MyRecords/types";

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
  const [allOptions, setAllOptions] = useState<MedicalSpecialistType[]>(
    MedicalSpecialistsDefault
  );
  const [selectedOption, setSelectedOption] = useState<MedicalSpecialistType>();

  const [searchText, setSearchText] = useState<string>("");
  const displayedOptions = useMemo(
    () =>
      allOptions.filter((option) =>
        containsText(JSON.stringify(option), searchText)
      ),
    [searchText]
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Box className={classes.container}>
      <Box className={classes.labelContainer}>
        <Typography className={`${classes.label} ${isOpen ? "active" : ""}`}>
          {!selectedOption
            ? "Оберіть фахівця"
            : `${selectedOption.name} ${selectedOption.lastName}`}
        </Typography>

        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          className={classes.arrowBtn}
        >
          <KeyboardArrowDownOutlinedIcon
            htmlColor="#173236"
            sx={{
              "&:hover": {
                cursor: "pointer",
                background: "transparent",
              },
              transform: `rotate(${isOpen ? "180" : "0"}deg)`,
            }}
          />
        </Button>
      </Box>

      <List
        className={`${classes.dropdownMenu} ${isOpen ? "active" : ""}`}
        subheader={<li />}
      >
        <li>
          <ul>
            <ListSubheader>
              <TextField
                size="small"
                // Autofocus on textfield
                autoFocus
                placeholder="Оберіть фахівця"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
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

            {allOptions.map((item, index) => {
              return (
                <ListItem key={`list-item-${index}`} disablePadding>
                  <ListItemButton className={classes.item}>
                    <ListItemIcon>
                      <img
                        src={item.photo}
                        alt=""
                        className={classes.userPhoto}
                      />
                    </ListItemIcon>

                    <Stack className={classes.userInfo}>
                      <Typography className={classes.fullName}>
                        {item.name + " " + item.lastName}
                      </Typography>
                      <Typography className={classes.specialization}>
                        {item.specialization}
                      </Typography>
                    </Stack>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </ul>
        </li>
      </List>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {},
  labelContainer: {
    background: "#FFF",
    border: "1px solid #2BBB97",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "50px",
    padding: "15px",
    boxSizing: "border-box",
  },
  label: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    color: "#90A4BE",
    border: "none",
    padding: 0,
    width: "max-content",
    "&.active": { color: "#000" },
  },
  arrowBtn: {
    padding: 0,
    width: "max-content",
    minWidth: 0,
  },
  dropdownMenu: {
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: "20px",
    background: "#FFF",
    position: "relative",
    overflow: "auto",
    "::-webkit-scrollbar": {
      display: "none",
    },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    transition: "max-height 0.3s ease 0s",
    maxHeight: "0px",
    padding: "0px",

    "& ul": { padding: 0 },

    "&.active": {
      maxHeight: "400px",
      padding: "10px",
    },
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userPhoto: {
    width: "40px",
    height: "40px",
    borderRadius: "100%",
  },
  userInfo: {
    flexDirection: "column",
    marginRight: "10px",
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
}));
