
var map = L.map('map').setView([52.49099156128556, 13.358810151068894], 14);

  L.tileLayer('https://api.mapbox.com/styles/v1/nour-safadi/clpfnro0g00ep01qthgf92oo3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibm91ci1zYWZhZGkiLCJhIjoiY2xwNnh5d2FnMXhsaTJqcWs4ZHFqNXM4aiJ9.cdEJMpU6paLl1t4Lk79MvA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(map);

  // Add markers
  var locations = [
    {
      name: 'Medienhause',
      label: 'Study',
      address: 'Universität der Künste Berlin, Grunewaldstr. 2-5, 10823 Berlin',
      location: [52.49099156128556, 13.358810151068894],
      photo: './Photos/uni.jpeg',
      link:"https://www.google.com/maps/place/Universit%C3%A4t+der+K%C3%BCnste,+Medienhaus/@52.4908283,13.3562567,17z/data=!3m1!4b1!4m6!3m5!1s0x47a8504712a30e33:0x42e91f98e8b32325!8m2!3d52.4908283!4d13.3588316!16s%2Fg%2F1tp_5dyt?entry=ttu",

    },
    {
      name: 'Henkelhiedl',
      label: 'Work',
      address: 'Urbanstraße 116, 10967 Berlin',
      location: [52.491154631164704, 13.41858690508184],
      photo: './Photos/work.png',
      link:"https://www.google.com/maps/place/:+HENKELHIEDL+(Kreativagentur%2FDigitalagentur)/@52.4915317,13.3929274,17z/data=!4m6!3m5!1s0x47a84fc90bcb9829:0xb3d5dddcab2f1890!8m2!3d52.4910175!4d13.418662!16s%2Fg%2F1td64bf1?entry=ttu",

    },
    {
      name: 'GneisiHaus',
      label: 'Home',
      address: 'Gneisenaustraße 17, 10961 Berlin',
      location: [52.491629492129, 13.392841578747062],
      photo: './Photos/home.jpg',
      link:"https://www.google.com/maps/place/Gneisenaustra%C3%9Fe+17,+10961+Berlin/@52.4915317,13.3903525,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84fd7dd89510d:0x1b257c405f64ca80!8m2!3d52.4915317!4d13.3929274!16s%2Fg%2F11b8v57b5x?entry=ttu",

    }
  ];

  var markers = L.markerClusterGroup();

  locations.forEach(function (location) {
    var marker = L.marker(location.location, {
      title: location.name,
      icon: L.divIcon({
        className: 'custom-marker',
        html: '<img src="./icons/pin (1).svg" class="pin-arker" alt="Pin Icon">'
      })
    }).bindPopup(location.label);


    marker.on('click', function () {
      openOverlay(location);
    });

    markers.addLayer(marker);
  });

  map.addLayer(markers);

  

  function showLocation(label) {
    var location = locations.find(loc => loc.label === label);
    if (location) {
      map.setView(location.location, 14);
      openOverlay(location);
      
      document.getElementById('studyBtn').classList.remove('active');
      document.getElementById('workBtn').classList.remove('active');
      document.getElementById('homeBtn').classList.remove('active');
      document.getElementById(label.toLowerCase() + 'Btn').classList.add('active');
    }
  }


  function openOverlay(location) {
    document.getElementById('overlay-name').textContent = location.name;
    document.getElementById('overlay-label').textContent = location.label;
    document.getElementById('overlay-address').textContent = location.address;
    document.getElementById('overlay-photo').src = location.photo;
    document.getElementById('googleMapBtn').href = location.link;


    document.getElementById('overlay').style.right = '0';
  }

  function closeOverlay() {
    document.getElementById('overlay').style.right = '-100%';
  }
