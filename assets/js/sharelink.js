
let shareLink = {
  FLASH_HOLD_MS: 5000,
  flashBox: null,

  handleClick(link) {
    console.log("share link clicked", link.href);
    
     // Copy the text inside the text field
    navigator.clipboard.writeText(link.href);
  
    console.log("url copied to clipboard");

    shareLink.flashBox.innerHTML = "URL has been copied to clipboard";
    shareLink.flashBox.style.display = "block";

    setTimeout(() => {
      shareLink.flashBox.style.display = "none";  
    }, shareLink.FLASH_HOLD_MS);

    return false;
  },
  
  start() {
    console.log("shareLink.start");

    shareLink.flashBox = document.querySelector(".flash_message");
    shareLink.flashBox.style.display = "none";
  }
};

shareLink.start();