import YOUR_API_KEY from "./API_CONSTANTS.js";

const videoContainer = document.querySelector(".video-container");
const searchInput = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");

const video_http = "https://www.googleapis.com/youtube/v3/videos?";
const channel_http = "https://www.googleapis.com/youtube/v3/channels?";
const search_http = "https://www.googleapis.com/youtube/v3/search?";

fetch(
  video_http +
    new URLSearchParams({
      key: YOUR_API_KEY,
      part: "snippet,contentDetails",
      chart: "mostPopular",
      maxResults: 50,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  })
  .catch((err) => console.log(err));

function getChannelIcon(video_data) {
  fetch(
    channel_http +
      new URLSearchParams({
        key: YOUR_API_KEY,
        part: "snippet",
        id: video_data.snippet.channelId,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.items && data.items.length > 0) {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.high.url;
        makeVideoCard(video_data);
      }
    })
    .catch((err) => console.log(err));
}

function makeVideoCard(data) {
  const videoCard = document.createElement("div");
  videoCard.classList.add("video");
  videoCard.addEventListener("click", () => {
    if (typeof data.id === "object") {
      window.location.href = `video.html?id=${data.id.videoId}`;
    } else window.location.href = `video.html?id=${data.id}`;
  });
  //   const img = document.createElement("img");
  //   img.src = data.channelThumbnail;
  //   img.classList.add("thumbnail");
  //   img.alt = "channel thumnail";
  videoCard.innerHTML = `
      <img src="${data.channelThumbnail}" class="thumbnail" alt="channel thumbnail" />
      <div class="content">
          <img src="${data.snippet.thumbnails.default.url}" class="channel-icon" alt="channel icon" />
          <div class="info">
              <h4 class="title">${data.snippet.title}</h4>
              <p class="channel-name">${data.snippet.channelTitle}</p>
          </div>
      </div>
    `;

  videoContainer.appendChild(videoCard);
}

searchBtn.addEventListener("click", () => {
  if (searchInput.value.length) {
    searchVideo(searchInput.value);
  }
});

function searchVideo(query) {
  fetch(
    search_http +
      new URLSearchParams({
        key: YOUR_API_KEY,
        part: "snippet",
        q: query,
        maxResults: 50,
        type: "video",
      })
  )
    .then((res) => res.json())
    .then((data) => {
      videoContainer.innerHTML = "";
      console.log(data);
      data.items.forEach((item) => {
        getChannelIcon(item);
      });
    })
    .catch((err) => console.log(err));
}
