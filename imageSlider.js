img_arr = ['img.jpg', 'img2.jpg', 'img3.jpg', 'off.jpg', 'on.jpg']
index = 0
// img_arr[index]

var len = img_arr.length
// console.log(len)

document.getElementById('slider').src = img_arr[index]

function next(){
    document.getElementById('slider').src = img_arr[index]
    index++;
    if(len<=index){ // 5 < 4
        index=0;
    }
}

function previous(){
    document.getElementById('slider').src = img_arr[index]
    index--;
    if(index<0){
        index = len -1;
    }
}

setInterval(next, 1000);