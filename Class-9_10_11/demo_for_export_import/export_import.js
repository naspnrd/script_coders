const downloadButton = document.getElementById("download");
const upload = document.getElementById("upload");

let jsonData = {
  name: "Neeraj",
  age: 22,
  profession: "Software Developer",
};
downloadButton.addEventListener("click", () => {
  // TODO: download the json file
  // .json extension
  const stringifiedData = JSON.stringify(jsonData);
  // syntax for blob
  // const blob = new Blob([], { type: "text/plain" });
  const blob = new Blob([stringifiedData], { type: "application/json" });
  const downloadableUrl = URL.createObjectURL(blob);
  console.log(downloadableUrl); // blob:http://127.0.0.1:5500/04029099-3555-4b3e-a0ba-0fb2c587a7fa

  let a = document.createElement("a");
  a.download = "sheet.json";
  a.href = downloadableUrl;
  //   a.innerText = "Download the file";
  a.click(); // implicitily click the anchor tag
  //   document.body.appendChild(a);
});

upload.addEventListener("change", () => {
  console.log(upload.files);
  console.log(upload.files[0]);
  let file = upload.files[0];
  if (file.type !== "application/json") {
    alert("Please upload the json file");
    return;
  }
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    console.log(JSON.parse(event.target.result));
  };
  fileReader.onerror = function () {
    console.error("Error occurred while reading the file");
  };
  fileReader.readAsText(file);
});
