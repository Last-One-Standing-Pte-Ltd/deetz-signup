import Head from "next/head";
import { useRouter } from 'next/router';
import { sendMailFunction } from "@/utils/fetch";

import {
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Icon,
  Text,
  HStack,
  Link,
  Button,
} from "@chakra-ui/react";
import { IoMailOutline } from "react-icons/io5";

const sendMail = async () => {
  debugger;
  const router = useRouter();
  const { email, link } = router.query;
  let payload = {
    data: {
      emailId: email,
      link: link,
    }
  };
  const res = await sendMailFunction(payload);
  if(res === null)
  {

  }
}

export default function VerifyEmail() {
  return (
    <>
      <Head>
        <title>Deetz</title>
        <link rel="icon" href="/logo/deetz_logo.png" />
      </Head>
      <Stack
        minH="100vh"
        h={{ md: "100vh" }}
        minW="100vw"
        direction={{ base: "column", md: "row" }}
        spacing={0}
      >
        <Flex
          bgImage="url('/logo/icon-deets-bg.svg')"
          bgPosition="top"
          bgRepeat="no-repeat"
          bgColor="primary.500"
          w={{ base: "100%", md: "40%" }}
          p={10}
          py={{ base: 7, md: 10 }}
          h={{ base: "25vh", md: "100%" }}
          flexDirection="column"
          justifyContent={"center"}
        >
          <Image src="/logo/icon-deets-text.svg" w="50%" />
          <Spacer />
          <Heading
            size="lg"
            color="white"
            fontWeight={"500"}
            pb={{ md: "30px" }}
          >
            Reinvent <br />
            Your Event
          </Heading>
        </Flex>
        <Stack
          overflow="scroll"
          w={{ base: "100%", md: "60%" }}
          h="100%"
          minH={{ base: "75vh", md: "100vh" }}
          alignItems="center"
          justifyContent="center"
          py={{ base: 10, md: "100px" }}
          spacing="60px"
        >
          <Stack spacing="60px" w="80%">
            <Stack spacing={5} alignItems="center" justifyContent="center">
              <Icon as={IoMailOutline} color="green" fontSize="50px" />
              <Button size="lg" onClick= {sendMail()}>Email Verification</Button>
              <Stack alignItems="center" justifyContent="center" spacing={1}>
                <Text textAlign={"center"}>
                  Thank you for signing up on Deetz!
                </Text>
                <Text textAlign={"center"}>
                  Please check your email for the verification link and{" "}
                  <br display={{ base: "none", md: "flex" }} />
                  download our app:
                </Text>
              </Stack>
              <HStack>
                <Link
                  href="https://apps.apple.com/sg/app/deetz-events/id1600707036"
                  isExternal
                >
                  <Image
                    src="/app_store/app_store.png"
                    w={{ base: "50vw", md: "150px" }}
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=events.deetz.app"
                  isExternal
                >
                  <Image
                    src="/app_store/google_play.png"
                    w={{ base: "50vw", md: "150px" }}
                  />
                </Link>
              </HStack>
            </Stack>
            <Stack alignItems={"center"}>
              <Text color="gray.400" fontSize="sm">
                Can't find the email?
              </Text>
              <Button
                fontSize="sm"
                color="white"
                bgColor="primary.500"
                borderRadius={99}
                px={10}
              >
                Resend Link
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
