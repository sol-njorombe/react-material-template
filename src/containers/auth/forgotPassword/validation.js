import * as validators from '../../../helpers/validations';

export default function(values) {
  const errors = {};
  const requiredFields = [
     'email',
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
