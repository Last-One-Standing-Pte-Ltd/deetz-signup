import { Center, HStack, Text } from "@chakra-ui/react";

export default function ToastDefault({ icon, text }) {
  return (
    <Center>
      <HStack
        bgColor="black"
        py={2}
        px={3}
        borderRadius={99}
        justifyContent="center"
        w="fit-content"
      >
        {icon}
        <Text color="white" fontWeight={"500"}>{text}</Text>
      </HStack>
    </Center>
  );
}
