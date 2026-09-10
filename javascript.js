// const search= document.getElementById('search')
// const searchbtn=document.getElementsByClassName('bi bi-search')
// const songname=document.getElementById('songname')




// const searchBox = document.getElementById("search");
// const songElement = document.getElementById("song");
// const songNameDiv = document.getElementById("songname");
// const imageBox = document.querySelector(".imagebox");
// const range = document.getElementById("range");

// // जब user Enter दबाएगा तो API call होगी
// searchBox.addEventListener("keypress", async function(e) {
//     if (e.key === "Enter") {
//         const searchText = searchBox.value.trim();
//         if (!searchText) return;

//         // iTunes API URL
//         const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchText)}&entity=song&limit=1`;

//         try {
//             const response = await fetch(url);
//             const data = await response.json();

//             if (data.results.length > 0) {
//                 const songData = data.results[0];

//                 // audio source set करना
//                 songElement.src = songData.previewUrl;

//                 // song name दिखाना
//                 songNameDiv.textContent = songData.trackName + " - " + songData.artistName;

//                 // album artwork दिखाना
//                 imageBox.innerHTML = `<img src="${songData.artworkUrl100}" alt="Album Art">`;

//                 songElement.play();
//             } else {
//                 songNameDiv.textContent = "No song found!";
//                 imageBox.innerHTML = "";
//             }
//         } catch (error) {
//             console.error("Error fetching song:", error);
//         }
//     }
// });

// // Range slider से audio control
// songElement.addEventListener("timeupdate", () => {
//     range.value = (songElement.currentTime / songElement.duration) * 100;
// });

// range.addEventListener("input", () => {
//     songElement.currentTime = (range.value / 100) * songElement.duration;
// });





// **********************************  With Button Using  ************************************


const searchBox = document.getElementById("search");
const songElement = document.getElementById("song");
const songNameDiv = document.getElementById("songname");
// const imageBox = document.querySelector(".imagebox");
const range = document.getElementById("range");

// Buttons
const playBtn = document.querySelector(".bi-play-fill");
const prevBtn = document.querySelector(".bi-skip-backward-circle-fill");
const nextBtn = document.querySelector(".bi-skip-forward-circle-fill");

// Playlist array
let playlist = [];
let currentIndex = 0;

// Search functionality
searchBox.addEventListener("keypress", async function(e) {
    if (e.key === "Enter") {
        const searchText = searchBox.value.trim();
        if (!searchText) return;

        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchText)}&entity=song&limit=10`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.results.length > 0) {
                playlist = data.results;
                currentIndex = 0;
                loadSong(playlist[currentIndex]);
                songElement.play();
            } 
            else {
                songNameDiv.textContent = "No song found!";
                imageBox.innerHTML = "";
            }
        } catch (error) {
            console.error("Error fetching song:", error);
        }
    }
});

// Load song function
function loadSong(songData) {
    songElement.src = songData.previewUrl;
    songNameDiv.textContent = songData.trackName + " - " + songData.artistName;
    imageBox.innerHTML = `<img src="${songData.artworkUrl100}" alt="Album Art">`;
}

// Play / Pause button
playBtn.addEventListener("click", () => {
    if (songElement.paused) {
        songElement.play();
        playBtn.classList.remove("bi-play-fill");
        playBtn.classList.add("bi-pause-fill");
    } else {
        songElement.pause();
        playBtn.classList.remove("bi-pause-fill");
        playBtn.classList.add("bi-play-fill");
    }
});

// Next button
nextBtn.addEventListener("click", () => {
    if (playlist.length > 0) {
        currentIndex = (currentIndex + 1) % playlist.length;
        loadSong(playlist[currentIndex]);
        songElement.play();
    }
});

// Previous button
prevBtn.addEventListener("click", () => {
    if (playlist.length > 0) {
        currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        loadSong(playlist[currentIndex]);
        songElement.play();
    }
});

// Range slider update
songElement.addEventListener("timeupdate", () => {
    range.value = (songElement.currentTime / songElement.duration) * 100;
});

range.addEventListener("input", () => {
    songElement.currentTime = (range.value / 100) * songElement.duration;
});










// // ****************************Without Asynchronous Function********************************

// // .then ao cathch
// const searchBox = document.getElementById("search");
// const songElement = document.getElementById("song");
// const songNameDiv = document.getElementById("songname");
// // const imageBox = document.querySelector(".imagebox");
// const range = document.getElementById("range");

// // Buttons
// const playBtn = document.querySelector(".bi-play-fill");
// const prevBtn = document.querySelector(".bi-skip-backward-circle-fill");
// const nextBtn = document.querySelector(".bi-skip-forward-circle-fill");

// let playlist = [];
// let currentIndex = 0;

// // Search functionality with .then()
// searchBox.addEventListener("keypress", function(e) {
//     if (e.key === "Enter") {
//         const searchText = searchBox.value.trim();
//         if (!searchText) return;

//         const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchText)}&entity=song&limit=100`;

//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.results.length > 0) {
//                     playlist = data.results;
//                     currentIndex = 0;
//                     loadSong(playlist[currentIndex]);
//                     songElement.play();
//                 } 
//                 else {
//                     songNameDiv.textContent = "No song found!";
//                     imageBox.innerHTML = "";
//                 }
//             })
//             .catch(error => console.error("Error fetching song:", error));
//     }
// });

// // Load song function
// function loadSong(songData) {
//     songElement.src = songData.previewUrl;
//     songNameDiv.textContent = songData.trackName + " - " + songData.artistName;
//     // imageBox.innerHTML = `<img src="${songData.artworkUrl100}" alt="Album Art">`;
// }

// // Play / Pause button
// playBtn.addEventListener("click", () => {
//     if (songElement.paused) {
//         songElement.play();
//         playBtn.classList.remove("bi-play-fill");
//         playBtn.classList.add("bi-pause-fill");
//     } else {
//         songElement.pause();
//         playBtn.classList.remove("bi-pause-fill");
//         playBtn.classList.add("bi-play-fill");
//     }
// });

// // Next button
// nextBtn.addEventListener("click", () => {
//     if (playlist.length > 0) {
//         currentIndex = (currentIndex + 1) % playlist.length;
//         loadSong(playlist[currentIndex]);
//         songElement.play();
//     }
// });

// // Previous button
// prevBtn.addEventListener("click", () => {
//     if (playlist.length > 0) {
//         currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
//         loadSong(playlist[currentIndex]);
//         songElement.play();
//     }
// });

// // Range slider update
// songElement.addEventListener("timeupdate", () => {
//     range.value = (songElement.currentTime / songElement.duration) * 100;
// });

// range.addEventListener("input", () => {
//     songElement.currentTime = (range.value / 100) * songElement.duration;
// });