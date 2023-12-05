export const validateFormData = (email, password) => {
  console.log(email + "\t" + password);
  const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // Pooja@123

  const isValidEmail = emailPattern.test(email);
  const isValidPassword = passwordPattern.test(password);

  if (!isValidEmail) return "Email ID is not correct";
  if (!isValidPassword) return "Password is not correct";
  return null;
};
