document.getElementById("convertImageUrl").onclick = async () => {
  const url = document.getElementById("url").value;
  const image = await fetch(url);
  const blob = await image.blob();
  iframe.contentWindow.postMessage(blob, "*");
}


document.getElementById("convertImage").onclick = async () => {
  const files = document.getElementById("image").files;
  if (!files || files.length === 0 || !files[0] || files[0].size === 0) {
    alert("Please select image first.");
    return;
  }
  iframe.contentWindow.postMessage(files[0], "*");
}