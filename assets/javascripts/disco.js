var images = [
  {
    "image": "assets/images/dis1.png",
    "text": "<b>Spirited Away</b><br><br>Spirited Away is a wondrous fantasy about a young girl named Chihiro who discovers a secret world of strange spirits, creatures and sorcery. When her parents are mysteriously transformed, she must call upon the courage she never knew she had to free herself and return her family to the outside world.<br><br><i>Year of Production: 2001<br>Runtime: 125 mins<br>Languages: English, Japanese<br>Subtitles: English</i>"
  },
  {
    "image": "assets/images/dis2.png",
    "text": "<b>Princess Mononoke</b><br><br>While protecting his village from a rampaging boar-god, the young warrior Ashitaka becomes afflicted with a deadly curse. To find the cure that will save his life, he journeys deep into sacred depths of the Great Forest Spirit's realm where he meets San (Princess Mononoke), a girl raised by wolves. It's not long before Ashitaka is caught in the middle of a battle between iron-ore prospecting humans and the forest dwellers. He must summon the spirit powers and all his courage to stop man and nature from destroying each other.<br><br><i>Year of Production: 1997<br>Runtime: 134 mins<br>Languages: English, Japanese<br>Subtitles: English, Japanese</i>"
  }
];

var currentIndex = 0;

function switchImage(direction) {
  switch (direction) {
    case 0:
      currentIndex -= 1
      if (currentIndex < 0) {
        currentIndex = 0
        break;
      }
      break;
    case 1:
      currentIndex += 1
      if (currentIndex > images.length - 1) {
        currentIndex = 1
        break;
      }
      break;
    default:
      break;
  }
  var picNode = document.getElementById('pic');
  var image = picNode.getElementsByTagName('img')[0];
  image.src = images[currentIndex]["image"];

  var textNode = document.getElementById('text');
  text.innerHTML = images[currentIndex]["text"];
}
