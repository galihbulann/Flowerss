window.onload = () => {
    document.body.classList.remove("container");
    const audioElement = document.querySelector("audio");
    if(audioElement) {
        audioElement.play();
    }
};
