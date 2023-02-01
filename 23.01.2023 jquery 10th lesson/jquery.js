// let txt1 = document.querySelector('#txt1');
// let txt2 = $('#txt2');

// //style
// txt1.style.color = 'red';
// txt2.css({backgroundColor: 'red', color: 'white'});

// txt1.innerHTML = 'Change';
// txt2.html('JQuery');

// txt2.addClass('add');
// txt2.removeClass('add');

// txt2.after('+');

// let elem = $('.elem');

// elem.append('<p>i added</p>');
// elem.append('<p>i am also added</p>');




// 1. Всем <h3> поставьте текст '!!!'.  \/ - means done 
let a = $('h3');
a.html('!!!')


// 2. Всем <h3> сделайте текст зеленого цвета.\/
a.css({color: 'green'});

// 3. Всем <h3> сделайте жирный текст зеленого цвета.\/
$('h3').css({fontWeight: 'normal' });

// 4. Получите и покрасьте в красный цвет все элементы с классом zzz. \/
let b = $('.zzz')
b.css({color: 'red'});

// 5. Получите и покрасьте в красный цвет все заголовки.\/
let reds = $(':header');
reds.css({color: 'red'});

// 6. Получите и покрасьте в красный цвет все заголовки с классом zzz.\/

 let x = $(':header.zzz');
 x.css({color: 'blue'});

// 7. Создайте обработчик нажатия на кнопку, который будет менять цвет фона страницы.\/


//Homework  \/

function change() {

     let c = $('body');
     c.css({ backgroundColor: 'black'});
}


function addSquares(elem) {
    let block = $('#first');
    
    let squares =  $('.square')
    for (let index = 0; index < 3; index++) {
        block.append('<div class="square"></div>');
    }
    elem.style.display = 'none';
}