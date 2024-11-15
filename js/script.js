document.addEventListener('DOMContentLoaded', function() {
   let toggleBtn = document.getElementById('toggle-btn');
   let body = document.body;

   let profile = document.querySelector('.header .flex .profile');
   let search = document.querySelector('.header .flex .search-form');
   let sideBar = document.querySelector('.side-bar');

   // Toggle profile section
   document.querySelector('#user-btn').onclick = () => {
       profile.classList.toggle('active');
       if (search) search.classList.remove('active');
   };

   // Toggle search section
   document.querySelector('#search-btn').onclick = () => {
       search.classList.toggle('active');
       if (profile) profile.classList.remove('active');
   };

   // Toggle sidebar
   document.querySelector('#menu-btn').onclick = () => {
       sideBar.classList.toggle('active');
       body.classList.toggle('active');
   };

   // Close sidebar
   const closeSideBarBtn = document.querySelector('.close-side-bar');
   if (closeSideBarBtn) {
       closeSideBarBtn.onclick = () => {
           sideBar.classList.remove('active');
           body.classList.remove('active');
       };
   }

   // Scroll event to manage active classes
   window.onscroll = () => {
       if (profile) profile.classList.remove('active');
       if (search) search.classList.remove('active');

       if (window.innerWidth < 1200) {
           sideBar.classList.remove('active');
           body.classList.remove('active');
       }
   };

   // Fungsi untuk mendapatkan query parameter dari URL
   function getQueryParameter(param) {
       const urlParams = new URLSearchParams(window.location.search);
       return urlParams.get(param);
   }

   // Ambil data dari URL
   const videoSrc = getQueryParameter('video');
   const videoTitle = getQueryParameter('title');
   const videoPoster = getQueryParameter('poster');

   // Update elemen video dan judul jika elemen tersedia
   if (videoSrc) {
       const videoPlayer = document.getElementById('video-player');
       if (videoPlayer) {
           videoPlayer.src = 'images/' + videoSrc;  
           videoPlayer.poster = 'images/' + videoPoster;  
       }
   }

   if (videoTitle) {
       const videoTitleElement = document.getElementById('video-title');
       if (videoTitleElement) {
           videoTitleElement.innerText = decodeURIComponent(videoTitle);
       }
   }
});
