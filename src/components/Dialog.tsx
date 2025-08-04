import { type ReactEventHandler } from "react";
import Button from "./Button";

interface DialogProps {
  onClose?: ReactEventHandler<HTMLDialogElement>;
  onConfirm?: ReactEventHandler<HTMLButtonElement>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Dialog(_props: DialogProps) {
  return (
    <dialog className="rounded-md m-auto p-5">
      <form className="flex flex-col gap-5 items-center" method="dialog">
        <menu className="flex gap-2">
          <Button value="cancel">Cancel</Button>
          <Button value="default">Confirm</Button>
        </menu>
      </form>
    </dialog>
  );
}

export default Dialog;
