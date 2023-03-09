import Head from "next/head";
import {
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Spacer,
  Stack,
  FormControl,
  FormErrorMessage,
  Checkbox,
  Divider,
  Center,
  Link,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { VendorSignupSchema } from "@/utils/tools";
import { createUser } from "@/utils/fetch";
import SuccessToast from "@/components/toast/SuccessToast";

export default function Vendor() {
  const toast = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async (values) => {
    try {
      setIsSubmitting(true);

      let payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        contactNumber: {
          nationalNumber: values.contactNumber,
          internationalNumber: values.dialCode + values.contactNumber,
          isoCode: values.isoCode,
          dialCode: values.dialCode,
        },
        password: values.password,
        confirmPassword: values.confirmPassword,
        userType: values.userType,
        vendorName: values.vendorName,
        agreeToPrivacy: values.agreeToPrivacy,
        agreeToUserTerms: values.agreeToUserTerms,
      };

      // const res = await createUser(payload);

      // if (res.result.statusCode === 200) {
      //   toast({
      //     position: "top",
      //     render: () => <SuccessToast text={res.result.message} />,
      //   });
      //   router.push("verify-email");
      // } else {
      //   toast({
      //     position: "top",
      //     render: () => <ErrorToast text={res.result.message} />,
      //   });
      // }
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          minH={{ md: "100vh" }}
          alignItems="center"
          py={{ base: 7, md: "80px" }}
          pb={{ base: 10, md: "80px" }}
        >
          <Stack spacing={7} w={{ base: "80%", md: "60%" }}>
            <Heading size="lg">Create Vendor Account</Heading>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                isoCode: "",
                dialCode: "",
                contactNumber: "",
                password: "",
                confirmPassword: "",
                userType: ["customer", "vendor"],
                vendorName: "",
                agreeToPrivacy: false,
                agreeToUserTerms: false,
              }}
              validationSchema={VendorSignupSchema}
              validateOnChange={true}
              onSubmit={(values) => {
                handleSignUp(values);
              }}
            >
              {({
                handleSubmit,
                handleBlur,
                setFieldValue,
                errors,
                touched,
                isValid,
                dirty,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Stack spacing={7}>
                    <Stack spacing={4} align="flex-start">
                      <FormControl
                        isInvalid={!!errors.firstName && touched.firstName}
                      >
                        <Field
                          as={Input}
                          id="firstName"
                          name="firstName"
                          borderRadius={99}
                          placeholder="First Name"
                        />
                        <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.lastName && touched.lastName}
                      >
                        <Field
                          as={Input}
                          id="lastName"
                          name="lastName"
                          borderRadius={99}
                          placeholder="Last Name"
                        />
                        <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.email && touched.email}>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          borderRadius={99}
                          placeholder="Email Address"
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={
                          !!errors.contactNumber && touched.contactNumber
                        }
                      >
                        <PhoneInput
                          enableSearch={true}
                          disableSearchIcon={true}
                          inputProps={{ name: "contactNumber" }}
                          onChange={(value, country, e, formattedValue) => {
                            setFieldValue(`isoCode`, country.countryCode);
                            setFieldValue(`dialCode`, country.dialCode);
                            setFieldValue(
                              `contactNumber`,
                              value.substring(country.dialCode.length)
                            );
                          }}
                          onBlur={handleBlur}
                          isValid={
                            errors.contactNumber && touched.contactNumber
                          }
                          country="sg"
                          preferredCountries={["sg"]}
                          containerStyle={{ borderRadius: 99 }}
                          inputStyle={{
                            borderRadius: 99,
                            height: "40px",
                            width: "100%",
                          }}
                          buttonStyle={{
                            borderRadius: "99px 0 0 99px",
                            backgroundColor: "transparent",
                            border: "none",
                            paddingLeft: "10px",
                          }}
                          countryCodeEditable={false}
                          searchStyle={{ width: "93%" }}
                        />
                        <FormErrorMessage>
                          {errors.contactNumber}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.password && touched.password}
                      >
                        <Field
                          as={Input}
                          id="password"
                          name="password"
                          type="password"
                          borderRadius={99}
                          placeholder="Password"
                        />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={
                          !!errors.confirmPassword && touched.confirmPassword
                        }
                      >
                        <Field
                          as={Input}
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          borderRadius={99}
                          placeholder="Confirm Password"
                        />
                        <FormErrorMessage>
                          {errors.confirmPassword}
                        </FormErrorMessage>
                      </FormControl>
                    </Stack>
                    <Center py={2}>
                      <Divider w="15%" border="1px" borderColor="gray.200" />
                    </Center>
                    <FormControl
                      isInvalid={!!errors.vendorName && touched.vendorName}
                    >
                      <Field
                        as={Input}
                        id="vendorName"
                        name="vendorName"
                        borderRadius={99}
                        placeholder="Vendor Name"
                      />
                      <FormErrorMessage>{errors.vendorName}</FormErrorMessage>
                    </FormControl>
                    <Stack>
                      <Field
                        as={Checkbox}
                        id="agreeToPrivacy"
                        name="agreeToPrivacy"
                        colorScheme="primary"
                      >
                        I agree to the{" "}
                        <Link
                          href="https://www.deetz.events/privacy-policy"
                          isExternal
                          color="primary.500"
                        >
                          privacy policy, terms and conditions
                        </Link>
                      </Field>
                      <Field
                        as={Checkbox}
                        id="agreeToUserTerms"
                        name="agreeToUserTerms"
                        colorScheme="primary"
                      >
                        I agree to the{" "}
                        <Link
                          href="https://www.deetz.events/terms-user"
                          isExternal
                          color="primary.500"
                        >
                          users terms and conditions
                        </Link>
                      </Field>
                    </Stack>
                    <Button
                      type="submit"
                      width="full"
                      bgColor="primary.500"
                      color="white"
                      borderRadius={99}
                      isLoading={isSubmitting}
                      isDisabled={!(isValid && dirty)}
                    >
                      Sign Up
                    </Button>
                  </Stack>
                </form>
              )}
            </Formik>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
