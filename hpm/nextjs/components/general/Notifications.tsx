import {
  Button,
  FlexBox,
  H3,
  type CloseNotification,
  NotificationRenderer,
  NotificationsQueue,
  NotificationActions,
  NotificationHeader,
  NotificationTimestamp,
  NotificationContent,
} from "@filament/react";
import React from "react";
import { separatorHorizontal } from "@filament-theme/atomics";
import { ExclamationMarkCircle } from "@filament-icons/dls4-react";

const Notifications = ({ close }: { close: CloseNotification }) => {
  return (
    <>
      <NotificationHeader>
        <ExclamationMarkCircle />
        <H3>Notification Title</H3>
        <NotificationTimestamp>20min ago</NotificationTimestamp>
      </NotificationHeader>
      <NotificationContent>
        Reprehenderit dolor officia qui tempor dolore reprehenderit duis laboris
        ipsum aliqua anim.
      </NotificationContent>
      <hr className={separatorHorizontal} />
      <NotificationActions>
        <Button
          variant="quiet"
          onPress={() => {
            close();
          }}
        >
          Close
        </Button>
        <Button
          variant="quiet"
          onPress={() => {
            close();
          }}
        >
          Also close
        </Button>
      </NotificationActions>
    </>
  );
};

export default Notifications;
