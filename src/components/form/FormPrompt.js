import { Text } from "@chakra-ui/react";

export default function FormPrompt({ text }) {
  return (
    <>
      <Text fontSize="xs" color="primary.500">
        {text}
      </Text>
    </>
  );
}
