<script>
  function convertToWebP() {
    var img = document.getElementById("image");
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    var dataUrl = canvas.toDataURL("image/webp");
    var webpImg = document.createElement("img");
    webpImg.src = dataUrl;
    document.body.appendChild(webpImg);
  }
</script>
