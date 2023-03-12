import { Icon } from "@chakra-ui/react";
import { IoCheckmarkCircle } from "react-icons/io5";
import ToastDefault from "./ToastDefault";

export default function SuccessToast({ text }) {
  return (
    <ToastDefault icon={<Icon as={IoCheckmarkCircle} color="#30C49D" fontSize="20px"/>} text={text}/>
  );
}
