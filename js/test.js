function getpict2() {
    var oldpict = document.querySelector('.test div')
    ;
    var pict2 = document.createElement("div");
    pict2.innerHTML = '<img src="images/singapore_jazz2.jpg">';
    oldpict.parentNode.replaceChild(pict2,oldpict);
}

function getpict1() {
    var oldpict = document.querySelector('.test div')
    ;
    var pict1 = document.createElement('div');
    pict1.innerHTML = '<img src="images/singapore_jazz.jpg">';
    oldpict.parentNode.replaceChild(pict1,oldpict);
}

a = document.querySelector('.pagination')
console.log(a.children[0]);

