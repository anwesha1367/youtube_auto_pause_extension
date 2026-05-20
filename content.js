let wasPlaying = false;

document.addEventListener("visibilitychange", () => {

    // Find video every time
    const video = document.querySelector("video");

    if (!video) return;

    // User switched tab
    if (document.hidden) {

        // Remember current state
        wasPlaying = !video.paused;

        // Pause
        video.pause();

        console.log("Video paused");
    }

    // User returned
    else {

        // Play only if previously playing
        if (wasPlaying) {

            video.play().catch(err => console.log(err));

            console.log("Video resumed");
        }
    }
});