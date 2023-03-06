export const DEFAULT_EMAIL_PATTERN =
  /^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/;
export const CONTACT_NUMBER_PATTERN = /^([+][0-9]{3}|[0-9]{2})?[0-9]{1,15}$/;
export const PASSWORD_VALIDATION_CONSTRAINTS = {
  LowerCase: /[a-z]/g,
  UpperCase: /[A-Z]/g,
  Number: /[0-9]/g,
  SpecialCharacter: /[!#$%&()*+,-./:;<=>?@\\^_`{|}~[\]:\x27\x22]/g,
};
