export const formatFirebaseErrors = (errorCode) => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "Email is already in use. Please choose a different email.";
    case "auth/invalid-email":
      return "Invalid email address.";
    case "auth/invalid-credential":
      return "Invalid password. Please try again.";
    case "auth/weak-password":
      return "Password is too weak. Choose a stronger password.";
    case "auth/too-many-requests":
      return "Too many requests. Please try again after sometime.";
    default:
      return `Error creating user : ${errorCode}`;
  }
};
