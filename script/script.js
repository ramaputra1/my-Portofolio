function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let period = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  if (hours > 12) hours -= 12;
  if (hours === 0) hours = 12; // Midnight case

  // Pad minutes with leading zero if necessary
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const timeString = `${hours}:${minutes} ${period}`;
  clockElement.innerText = timeString;
}

setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Initial call to display time immediately

//--------------------------

// Fungsi untuk menginisialisasi peta
function initMap() {
  // Koordinat BYU-Hawaii
  const byuHawaii = { lat: 21.6396387930170063, lng: -157.92461198371004 };

  // Membuat peta dengan lokasi BYU-Hawaii
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15, // Zoom level
    center: byuHawaii, // Pusat peta
  });

  // Menambahkan marker di lokasi BYU-Hawaii
  const marker = new google.maps.Marker({
    position: byuHawaii,
    map: map,
    title: "BYU-Hawaii", // Teks saat hover marker
  });
}

// Memastikan fungsi initMap dipanggil setelah API dimuat
window.initMap = initMap;

//------------------------------

// Function to update the time
function updateHawaiiTime() {
  // Get the current date and time in UTC
  const utcDate = new Date();

  // Convert to Hawaii-Aleutian Standard Time (HST) (UTC -10:00)
  const hawaiiOffset = -10; // Hawaii is UTC -10
  const hawaiiTime = new Date(
    utcDate.getUTCFullYear(),
    utcDate.getUTCMonth(),
    utcDate.getUTCDate(),
    utcDate.getUTCHours() + hawaiiOffset,
    utcDate.getUTCMinutes(),
    utcDate.getUTCSeconds()
  );

  // Get hours and minutes
  let hours = hawaiiTime.getHours();
  let minutes = hawaiiTime.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 hours becomes 12
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const timeString = `${hours}:${minutes} ${ampm}`;

  // Display the time in the div with id 'my-time'
  document.getElementById("my-time").innerText = timeString;
}

// Update the time every minute
setInterval(updateHawaiiTime, 60000);
updateHawaiiTime(); // Call immediately to show the time
