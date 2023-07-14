export default function login_validate(values){
    const errors = {};

    if (!values.email) {
      errors.email = '🔺';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = ' 🔺 ';
    }

  // validation for password
  if(!values.password){
    errors.password = '🔺';
  } else if(values.password.length < 6 || values.password.length > 20){
    errors.password = "🔺";
  } else if(values.password.includes(" ")){
    errors.password = "🔺";
  }

  return errors;
}

export function register_Validate(values){
    const errors = {};


    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

      // validation for password
  if(!values.password){
    errors.password = 'Required';
  } else if(values.password.length < 6 || values.password.length > 20){
    errors.password = "Must be greater than 6 and less than 20 characters long";
  } else if(values.password.includes(" ")){
    errors.password = "Invalid Password";
  }

      // validate confirm password
      if(!values.cpassword){
        errors.cpassword = 'Required';
      } else if(values.cpassword.length < 6 || values.cpassword.length > 20){
        errors.cpassword = "Must be greater than 6 and less than 20 characters long";
      } else if(values.cpassword.includes(" ")){
        errors.cpassword = "Invalid Confirm Password";
      }

      return errors;
    
}