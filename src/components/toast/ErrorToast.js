import { Icon } from "@chakra-ui/react";
import { IoCloseCircle } from "react-icons/io5";
import ToastDefault from "./ToastDefault";

export default function ErrorToast({ text }) {
  return (
    <ToastDefault icon={<Icon as={IoCloseCircle} color="#C33333" fontSize="20px"/>} text={text}/>
  );
}
