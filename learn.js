var listSrc = ['http://1.bp.blogspot.com/-xkdd3tjf8yM/VcAyeAKbPcI/AAAAAAAAAno/jJAF26CObC8/s1600/buryy_medved_sneg_morda_vzglyad_5014x3346.jpg', 'https://www.factroom.ru/wp-content/uploads/2015/10/620.jpg','http://www.zoopicture.ru/assets/2012/10/4708411811_d4b5904e82_z.jpg','http://www.bugaga.ru/uploads/posts/2014-12/1419930916_belye-medvedi-1.jpg','http://bansko-guide.com/assets/1.jpg'];

var imageBear = document.querySelector('#b1');
var count = listSrc.length - 1;


imageBear.onclick = function(){
    imageBear.src = listSrc[count];
    count++;
    if(count >= 5) count = 0;
    
};

//Change name in start page
var myButton = document.querySelector('button');
var myHeader = document.querySelector('h1');
var myName = 'Миша!';

function setName(){
    myName = prompt('Enter yure name.');
    myHeader.innerHTML = 'Миша и ' + myName + '!';
}

myButton.onclick = setName;