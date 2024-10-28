export default function handleErrors(error) {
  let errorMessage = null;
  console.log(error);
  switch (error.message) {
    case "400":
      errorMessage = "bad request";
      break;
    case "404":
      errorMessage = "could not find this currency";
      break;
    case "500":
      errorMessage = "internal server error";
      break;
    default:
      errorMessage =  "An unexpected error occurred";
      break;
  }
  return errorMessage;
}
