import Dropzone from "dropzone";

let myDropzone : any = new Dropzone("#my-form");
myDropzone.on("addedfile", file => {
  console.log(`File added: ${file.name}`);
});