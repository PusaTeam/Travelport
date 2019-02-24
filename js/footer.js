
var footerText = '<div><footer><div class="footer container-fluid"><div class="row"><ul class="footer__links col-xs-9"><li><a href="../contact/contact.html">Контакты</a></li><li><a href="../conditions/conditions.html">Условия использования</a></li><li><a href="../map/map.html">Карта сайта</a></li></ul><ul class="social__links col-xs-3"><li><a href="https://twitter.com/travelport"><i class="fab fa-twitter-square"></i></a></li><li><a href="https://www.facebook.com/travelport.centralasia.7?ref=br_rs"><i class="fab fa-facebook-square"></i></a></li><li><a href="https://www.youtube.com/user/TravelportTube"><i class="fab fa-youtube-square"></i></a></li></ul></div></div><p class="licence"> <br>&#169; Travelport, 2019</p></footer></div>';

function setfooter() {
var footer = document.createElement('div');
footer.innerHTML = footerText;
document.body.insertAdjacentElement('afterend', footer);
}

setfooter();

