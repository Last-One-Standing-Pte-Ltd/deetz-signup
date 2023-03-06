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
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

export default function Vendor() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    email: Yup.string()
      .email("Email is invalid.")
      .required("Email is required."),
    contactNumber: Yup.string().required("Phone number is required."),
    password: Yup.string()
      .required("Password is required.")
      .matches(/[A-Z]/, "Password must contain an uppercase letter.")
      .matches(/[0-9]/, "Password must contain a number.")
      .matches(
        /[!#$%&()*+,-./:;<=>?@\\^_`{|}~[\]:\x27\x22]/,
        "Password must contain a special character."
      )
      .min(8, "Password must contain at least 8 characters."),
    confirmPassword: Yup.string()
      .required("Confirm password is required.")
      .oneOf([Yup.ref("password"), null], "Passwords must match."),
    vendorName: Yup.string().required("Vendor name is required."),
    agreeToPrivacy: Yup.bool().oneOf([true], "Field must be checked."),
    agreeToUserTerms: Yup.bool().oneOf([true], "Field must be checked."),
  });

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
          py={{ base: 7, md: "70px" }}
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
              validationSchema={SignupSchema}
              validateOnChange={true}
              onSubmit={(values) => {
                setIsSubmitting(true);
                alert(JSON.stringify(values, null, 2));
                router.push("verify-email");
                setIsSubmitting(false);
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
