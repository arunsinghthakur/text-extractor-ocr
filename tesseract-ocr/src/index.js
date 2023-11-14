const Tesseract = require('tesseract.js');

window.addEventListener("message", (event) => {
  const url = event.data;

  Tesseract.recognize(
    url,
    "eng",
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    document.getElementById("text").innerText = text;
  })

});


const copyButton = document.getElementById("copyText");
copyButton.onclick = function () {
  navigator.clipboard.writeText(document.getElementById("text").innerText).then(() => {
    console.log('Text copied to clipboard!');
  }).catch(err => {
    console.log('Failed to copy text: ', err);
  });
};