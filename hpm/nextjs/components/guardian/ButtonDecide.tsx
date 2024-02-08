import { Button } from "@filament/react";
import React from "react";

type buttonProps = {
  type: string;
  state: any;
};
const ButtonDecide = (props: buttonProps) => {
  const { type, state } = props;
  return (
    <div>
      <Button
        variant="primary"
        style={{ marginTop: "40px" }}
        isDisabled={!state?.files?.name}
      >
        {type === "activation" ? "Activate" : "Deactivate"}
      </Button>
    </div>
  );
};

export default ButtonDecide;
