export default function (values) {
  const errors = {};
  const requiredFields = [
    'password',
    'password_confirmation',
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (values.password_confirmation !== values.password) {
    errors.password_confirmation = 'Does not match with password';
  }

  return errors;
}
