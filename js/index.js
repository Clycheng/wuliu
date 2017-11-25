var banner = document.getElementsByClassName("banner")[0];
var key = document.getElementsByTagName("ol")[0].getElementsByTagName("li");
console.log(banner);
console.log(key);
var cout = 0;
clearInterval(timer);
var timer = setInterval(active,2000);
for (let i =0; i < key.length; i ++) {
    key[i].onmouseover = function() {
        clearInterval(timer);
        banner.style.background = "url(img/"+i+".jpg";
        clear()
        this.className = "li-active";
    }
}
// }for( let z = 0; z < key.length; z ++){
//     key[z].onclick = function() {
//         clear();
//         banner.style.background = "url(img/"+z+".jpg)";
//         this.className = "li-active";
//         cout = z;
//     }
// }
// 清除classming
function clear() {
    for (var i = 0; i < key.length; i ++) {
        key[i].className = "";
    }
}
//定时器方法
function active() {
    cout ++;
    if( cout > 5) {
        cout = 0;}
    clear();
    key[cout].className = "li-active";
    banner.style.background = "url(img/"+cout+".jpg)";
    
}