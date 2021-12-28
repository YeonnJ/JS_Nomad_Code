function onGeoOk(position) {
  const lat = position.coords,latitude;
  const lng = position.coords.longitude;
  console.log("You live Here!", lat, lng);
}
function onGeoError() {
  alert("Can't Find You");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
