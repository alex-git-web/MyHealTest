import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Popover, Popper, Theme, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomModalCloseButton } from "./CustomModalCloseButton";
import { ClickAwayListener, Fade } from "@material-ui/core";
import { CustomSearchDropdown } from "./CustomSearchDropdown";
// import { CustomPopper } from '../../../../../shared/CustomPopper';

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
}

export const CreateAccessModal = (props: Props) => {
  const { isOpen, setIsOpen } = props;
  const classes = useStyles();
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

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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

          <CustomSearchDropdown />
        </Box>
      </Modal>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    boxShadow: "0px 10px 40px 0px rgba(23, 50, 54, 0.15)",
    minWidth: "452px",
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
