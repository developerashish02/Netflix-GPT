export const validateValues = (values) => {
  const errors = {};

  // email validation
  if (!values.email) {
    errors.email = "Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Please enter a valid email address ";
  }

  // password validation
  if (!values.password) {
    errors.password = "Required!";
  }

  if (!/(?=.*\d)/.test(values.password)) {
    errors.password = "Password must contain at least one digit.";
  }

  if (!/(?=.*[a-z])/.test(values.password)) {
    errors.password = "Password must contain at least one lowercase letter.";
  }

  if (!/(?=.*[A-Z])/.test(values.password)) {
    errors.password = "Password must contain at least one uppercase letter.";
  }

  if (!/(?=.*[!@#$%^&*()\-_=+{};:,<.>ยง?[\] \\|])/.test(values.password)) {
    errors.password = "Password must contain at least one special character.";
  }

  if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  return errors;
};
