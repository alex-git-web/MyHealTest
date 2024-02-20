import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Button,
  Checkbox,
  ListItem,
  ListItemText,
  MenuItem,
  Popover,
  Popper,
  Stack,
  Theme,
  styled,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomModalCloseButton } from "./CustomModalCloseButton";
import { ClickAwayListener, Fade } from "@material-ui/core";
import { CustomSearchDropdown } from "./CustomSearchDropdown";
import {
  ArchiveRecordType,
  MedicalSpecialistType,
} from "./components/activePanels/MyRecords/types";
import {
  ArchiveRecordsDefault,
  MedicalSpecialistsDefault,
} from "./components/activePanels/MyRecords/contentDefault";
import { containsText } from "./utils";
// import { CustomPopper } from '../../../../../shared/CustomPopper';

export type SelectedValuesType = {
  medicalSpecialist: MedicalSpecialistType | null;
  archiveRecords: ArchiveRecordType[];
};

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
}

const a = ["Аналіз крові"];
export const CreateAccessModal = (props: Props) => {
  const { isOpen, setIsOpen } = props;
  const classes = useStyles();

  const [selectedValues, setSelectedValues] = useState<SelectedValuesType>({
    medicalSpecialist: null,
    archiveRecords: [],
  });
  const [isInfoCardOpen, setIsInfoCardOpen] = useState<boolean>(false);

  const handleCloseModal = () => setIsOpen(false);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClickInfoCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsInfoCardOpen(true);
  };

  const handleCloseInfoCard = () => {
    setAnchorEl(null);
    setIsInfoCardOpen(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "access-info-card" : undefined;

  const MedicalSpecialistItemContent = ({
    item,
  }: {
    item: MedicalSpecialistType;
  }) => {
    const { photo, name, lastName, specialization }: MedicalSpecialistType =
      item;

    return (
      <CustomListItem sx={{ justifyContent: "flex-start" }}>
        <DoctorAvatar src={photo} alt="User avatar" />

        <Stack sx={{ flexDirection: "column" }}>
          <DoctorFullName>{name + " " + lastName}</DoctorFullName>

          <DoctorSpecialization>{specialization}</DoctorSpecialization>
        </Stack>
      </CustomListItem>
    );
  };

  const ArchiveRecordItemContent = ({ item }: { item: ArchiveRecordType }) => {
    return (
      <CustomListItem>
        <CustomListItemText primary={item.title} />
        <Checkbox
          sx={{
            width: "20px",
            height: "20px",
            color: "#D2E1F5",
            "&.Mui-checked": {
              color: "#173236",
            },
          }}
          checked={Array.from(
            selectedValues.archiveRecords,
            (i) => i.title
          ).includes(item.title)}
        />
      </CustomListItem>
    );
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Box className={classes.modalContainer}>
          <CustomModalCloseButton onClick={handleCloseModal} />

          <Box className={classes.modalTitle}>
            <Typography
              id="modal-modal-title"
              className={classes.modalTitleText}
            >
              Новий доступ
            </Typography>

            <div>
              <Button
                aria-describedby={id}
                className={classes.infoBtn}
                onClick={handleClickInfoCard}
                sx={{
                  background: "#173236",
                  ":hover": {
                    opacity: 0.7,
                    background: "#173236",
                  },
                }}
              >
                <Typography
                  id="modal-modal-title"
                  className={classes.infoBtnLabel}
                  sx={{
                    color: "#29F499",
                  }}
                >
                  i
                </Typography>
              </Button>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseInfoCard}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                classes={{
                  paper: classes.infoCardContainer,
                }}
              >
                <Typography className={classes.infoCardDescription}>
                  Тут ви можете надати доступ до власного медичного архіву або
                  тільки до певних його розділів для cімейних лікарів та
                  лікарів, у яких ви замовляли послугу. Виберіть спеціаліста,
                  якому надається доступ, категорію записів та період їх
                  додавання, а також термін дії доступу для фахівця. Доступ до
                  медичного архіву для сімейного лікаря відкривається
                  автоматично, але Ви можете у будь-який момент його змінити!
                </Typography>
              </Popover>
            </div>
          </Box>

          <CustomSearchDropdown
            label={"Фахівець"}
            inputLabel={"Oберіть фахівця"}
            searchInputPlaceholder={"Шукати фахівця"}
            menuItems={MedicalSpecialistsDefault}
            itemComponent={({ item }: { item: MedicalSpecialistType }) => (
              <MedicalSpecialistItemContent item={item} />
            )}
            renderValue={(selected: any) => {
              const { name, lastName }: MedicalSpecialistType = selected[0];

              return name + " " + lastName;
            }}
            selectedValues={
              selectedValues.medicalSpecialist
                ? [JSON.stringify(selectedValues.medicalSpecialist)]
                : []
            }
            setSelectedValues={(value: MedicalSpecialistType) => {
              return setSelectedValues((state: any) => {
                return {
                  ...state,
                  medicalSpecialist: value,
                };
              });
            }}
            styles={{
              marginBottom: "20px",
            }}
          />

          <CustomSearchDropdown
            label={"Записи з архіву"}
            inputLabel={"Оберіть запис"}
            searchInputPlaceholder={"Шукати запис"}
            menuItems={ArchiveRecordsDefault}
            itemComponent={({ item }: { item: ArchiveRecordType }) => (
              <ArchiveRecordItemContent item={item} />
            )}
            renderValue={(selected: any) => {
              return Array.from(
                selected,
                (i: ArchiveRecordType) => i.title
              ).join(", ");
            }}
            multiple={true}
            selectedValues={
              selectedValues.archiveRecords.length
                ? selectedValues.archiveRecords.map((i) => JSON.stringify(i))
                : []
            }
            setSelectedValues={(value: ArchiveRecordType[]) => {
              return setSelectedValues((state: any) => {
                return {
                  ...state,
                  archiveRecords: value,
                };
              });
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 0px",
}));

export const CustomListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiTypography-root": {
    color: "#000",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
  },
}));

const useStyles = makeStyles((theme: Theme) => ({
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    boxShadow: "0px 10px 40px 0px rgba(23, 50, 54, 0.15)",
    minWidth: "452px",
    maxWidth: "452px",
    borderRadius: "30px",
    padding: "20px",
    overflow: "auto",
    "::-webkit-scrollbar": {
      display: "none",
    },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    outline: "none",
  },
  modalTitle: {
    position: "relative",
    width: "max-content",
    marginTop: "26px",
  },
  modalTitleText: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    color: "#000",
    marginBottom: "30px",
  },
  infoBtn: {
    position: "absolute",
    top: "0",
    right: "-18px",
    minWidth: 0,
    width: "16px",
    height: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    padding: 0,
  },
  infoBtnLabel: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "10px",
  },
  filesBtnContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    marginTop: "30px",
  },
  filesButton: {
    border: "1px solid #E5EEFF !important",
    background: "#FFF",
    width: "50px",
    height: "40px",
    justifyContent: "center",
  },
  descriptionMainText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    color: "#000",
  },
  descriptionSubText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    color: "#000",
  },
  actionBtnsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    justifyContent: "flex-end",
    marginTop: "43px",
  },
  actionBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    padding: "5px 20px",
    borderRadius: "40px",
  },
  actionBtnText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    color: "#000",
  },
  infoCardContainer: {
    borderRadius: "15px",
    boxShadow: "0px 10px 40px 0px rgba(23, 50, 54, 0.15) !important",
    background: "#173236",
    padding: "20px",
    maxWidth: "330px",
  },
  infoCardDescription: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    color: "#fff",
  },
}));

export const DoctorAvatar = styled("img")(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "100%",
  marginRight: "10px",
}));

export const DoctorFullName = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  color: "#000",
}));

export const DoctorSpecialization = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "12px",
  color: "#000",
}));
