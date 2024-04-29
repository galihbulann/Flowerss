const audioTest = new Audio("Sound.mp3");
audioTest.play().then(() => {
  console.log("Audio played successfully.");
}).catch(error => {
  console.error("Error playing audio:", error);
});
