import { DefaultService } from "./generated";

async function generateclien() {
const response=await DefaultService.getUsers("122")
const response21=await DefaultService.postUsers("post_user ");
console.log(response);
console.log(response21);
}
generateclien();