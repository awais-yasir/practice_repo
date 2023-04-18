const VALID_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isValidPassword = (password) => {
  if (password.length < 6) {
    return false;
  }
  let includesCapital = false;
  let includesLower = false;
  let includesNumber = false;

  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i].toUpperCase()) {
      includesCapital = true;
    }
    if (password[i] === password[i].toLowerCase()) {
      includesLower = true;
    }
    if (isNaN(password[i]) === false) {
      includesNumber = true;
    }
  }

  if (!includesCapital || !includesLower || !includesNumber) {
    return false;
  }

  return true;
}

export const validateFields = (values, required, optional) => {
  for (const field of required) {
    if (!values[field.name] || required.types.indexOf(typeof values[field.name]) == -1) {
      return `${field.name} is required and must be of correct type.`;
    }
    if (field.name.includes('email') && !VALID_EMAIL_REGEX.test(values[field.name])) {
      return `${field.name} is not a valid email.`;
    }
    if (field.name.includes('password') && !isValidPassword(values[field.name])) {
      return `${field.name} is not a valid password.`;
    }
  }
  
  for (const field in values) {
    if (required.findIndex(x => x.name == field) == -1) {
      return `${field} is not allowed.`;
    }
  }
}