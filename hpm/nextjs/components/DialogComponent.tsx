import { DeleteTrash, Warning } from "@filament-icons/dls4-react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContainer,
  DialogContainerProps,
  DialogContent,
  DialogTitle,
} from "@filament/react";
import React, { useState, useCallback } from "react";

const DialogComponent = (props) => {
  // console.log("called");
  const { openDialog, setOpenDialog } = props;
  // console.log(openDialog);

  const dismiss = useCallback(() => {
    setOpenDialog(false);
  }, []);
  return (
    <>
      <DialogContainer {...props} onDismiss={dismiss}>
        {openDialog && (
          <Dialog>
            <DialogTitle>
              <Warning /> Confirm Revocation
            </DialogTitle>
            <DialogContent>
              Are you sure you want to revoke Lorem, ipsum?.This action concerns
              293 entitlements 4 customers
            </DialogContent>
            <DialogActions>
              <Button variant="quietEmphasis" onPress={dismiss}>
                Cancel
              </Button>
              <Button variant="primary" onPress={dismiss}>
                <DeleteTrash />
                Revoke
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </DialogContainer>
    </>
  );
};

export default DialogComponent;
