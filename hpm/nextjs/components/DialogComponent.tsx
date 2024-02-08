import { DeleteTrash, Warning } from "@filament-icons/dls4-react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContainer,
  DialogContainerProps,
  DialogContent,
  DialogTitle,
  NotificationRenderer,
  NotificationsQueue,
} from "@filament/react";
import React, {
  useState,
  useCallback,
  memo,
  Dispatch,
  SetStateAction,
} from "react";
import Notifications from "./general/Notifications";
export type dialogProps = {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setInfo: () => void;
  invokedBy: string;
};
const DialogComponent = memo(function X(props: dialogProps) {
  const { openDialog, setOpenDialog, setInfo, invokedBy } = props;
  const dismiss = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const callAPI = () => {
    return {
      status: "OK",
    };
  };

  return (
    <>
      {openDialog && (
        <DialogContainer {...props} onDismiss={dismiss}>
          <Dialog>
            <DialogTitle>
              <Warning /> Confirm Revocation
            </DialogTitle>
            <DialogContent>
              Are you sure you want to revoke Lorem, ipsum?.This action concerns
              293 entitlements 4 customers
            </DialogContent>
            <DialogActions>
              <Button
                variant="quietEmphasis"
                onPress={() => {
                  dismiss();
                  if (invokedBy === "eDMR") {
                    setInfo();
                  }
                }}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onPress={() => {
                  NotificationsQueue.bubble(
                    ({ close }) => <Notifications close={close} />,
                    "success",
                    {
                      timeout: 5000,
                    }
                  );
                  // }
                  dismiss();
                  setInfo();
                }}
              >
                <DeleteTrash />
                Revoke
              </Button>
            </DialogActions>
          </Dialog>
        </DialogContainer>
      )}

      <NotificationRenderer variant="bubble" />
    </>
  );
});

export default DialogComponent;
