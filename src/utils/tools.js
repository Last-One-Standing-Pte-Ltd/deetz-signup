import * as Yup from "yup";

export const submitForm = (router, values) => {
  let signUpRequest = {
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

  console.log(JSON.stringify(signUpRequest, null, 2));
  alert(JSON.stringify(signUpRequest, null, 2));
  router.push("verify-email");
};

export const CustomerSignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  email: Yup.string().email("Email is invalid.").required("Email is required."),
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
  agreeToPrivacy: Yup.bool().oneOf([true], "Field must be checked."),
  agreeToUserTerms: Yup.bool().oneOf([true], "Field must be checked."),
});

export const VendorSignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  email: Yup.string().email("Email is invalid.").required("Email is required."),
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
