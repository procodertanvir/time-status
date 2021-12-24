let time = new Date().getHours();

if(time >= 5 && time <= 11.59){
   document.getElementById('timeStatus').innerHTML = ('Good Morning');

   document.getElementById('image').src="https://media.tenor.com/images/e7fe897c2bb6922bb9fe6aa32afaf36b/tenor.gif";
}

else if(time >= 12 && time <= 13.59){
   document.getElementById('timeStatus').innerHTML = ('Good Noon');

   document.getElementById('image').src="https://i.makeagif.com/media/3-05-2015/aJv1Q8.gif";
}

else if(time >= 14 && time <= 17.29){
   document.getElementById('timeStatus').innerHTML = ('Good Afternoon');
   
   document.getElementById('image').src="https://acegif.com/wp-content/uploads/gif-funny-work-27.gif";
}

else if(time >= 17.30 && time <= 20.59){
   document.getElementById('timeStatus').innerHTML = ('Good Evening');

   document.getElementById('image').src="https://i.pinimg.com/originals/cf/51/ad/cf51ad748537f4ea6899ab44388ad110.gif";
}
else{
   document.getElementById('timeStatus').innerHTML = ('Good Night');

   document.getElementById('image').src="https://i.pinimg.com/originals/fb/dd/3a/fbdd3a3a214c0e712bb604dea3b3b1e5.gif";
}
