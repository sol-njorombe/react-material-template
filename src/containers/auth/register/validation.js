import * as validators from '../../../helpers/validations';

export default function(values) {
  const errors = {};
  const requiredFields = [
    'first_name',
    'middle_name',
    'last_name',
    'email',
    'password',
    'confirm_password'
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (values.email && !validators.validEmail(values.email)){
     errors.email = 'Invalid email address';
  }
  
  return errors;
}
