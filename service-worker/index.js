alert('Custom service worker!');
Notification.requestPermission().then(function (result) {
  alert(result);
});
