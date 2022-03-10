import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: ReactNode;
}

export default function ModalPortals({ children }: Props) {
  const modalElement = document.querySelector("#option");
  return ReactDOM.createPortal(children, modalElement as Element);
}
