export default function handleErrors(error) {
  let errorMessage = null;
console.log(error.message);
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
      errorMessage = error.message.includes("Network" | "net")
        ? "Network error, please check your connection"
        : "An unexpected error occurred";
      break;
  }
  return errorMessage;
}
