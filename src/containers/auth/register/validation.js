import * as validators from '../../../helpers/validations';

export default function (values) {
  const errors = {};
  const requiredFields = [
    'firstname',
    'middlename',
    'lastname',
    'email',
    'password',
    'confirm_password',
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (values.email && !validators.validEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.confirm_password !== values.password) {
    errors.confirm_password = 'Does not match with password';
  }

  return errors;
}
