let startposx = 0;
let startposy = 0;
let image = document.getElementById('img')
function buttonup() {
    if (startposy <= 5 && startposx == 0) {
        startposy += 1;   
    }
    checkposition();
}
function buttondown() {
    if (startposy >= -6 && startposx == 0) {
        startposy -= 1;
    }
    checkposition();
}
function buttonleft() {
    if (startposx >= -6 && startposy == 0){
        startposx -= 1;   
    } 
    checkposition();
}
function buttonright(){
    if (startposx <= 5 && startposy == 0) {
        startposx += 1;
    }
    checkposition();
}
function checkposition() {
    //left
    if(startposy == 0 && startposx == 0) {
        img.src = "https://i.postimg.cc/Nfgy7D7H/0-0.png";
    }
    if(startposy == 0 && startposx == -1) {
        img.src = "https://i.postimg.cc/7YBKvwDP/1-0.png";
    }
    if (startposy == 0 && startposx == -2){
        img.src = "https://i.postimg.cc/5yfjShkD/2-0.png"
    }
    if (startposy == 0 && startposx == -3) {
        img.src = "https://i.postimg.cc/PqG6ry7P/3-0.png";
    }
    if (startposy == 0 && startposx == -4) {
        img.src = "https://i.postimg.cc/c42hXT0X/4-0.png";
    }
    if (startposy == 0 && startposx == -5) {
        img.src = "https://i.postimg.cc/wTmLTzYQ/5-0.png";
    }
    if (startposy == 0 && startposx == -6) {
        img.src = "https://i.postimg.cc/nh1kpxqw/6-0.png";
    }
    //down
    if (startposy == -1 && startposx == 0) {
        img.src = "https://i.postimg.cc/yxKLKyL0/0-1.png";
    }
    if (startposy == -2 && startposx == 0) {
        img.src = "https://i.postimg.cc/FFbPZwKp/0-2.png";
    }
    if (startposy == -3 && startposx == 0) {
        img.src = "https://i.postimg.cc/T1cC35sF/0-3.png";
    }
    if (startposy == -4 && startposx == 0) {
        img.src = "https://i.postimg.cc/PrtSFKpj/0-4.png";
    }
    if (startposy == -5 && startposx == 0) {
        img.src = "https://i.postimg.cc/3RmtzcFK/0-5.png";
    }
    if (startposy == -6 && startposx == 0) {
        img.src = "https://i.postimg.cc/HLfSZg5Z/0-6.png";
    }
    //right
    if (startposy == 0 && startposx == 1) {
        img.src = "https://i.postimg.cc/SRF9THCk/1-0.png";
    }
    if (startposy == 0 && startposx == 2) {
        img.src = "https://i.postimg.cc/9XZZRFHM/2-0.png";
    }
    if (startposy == 0 && startposx == 3) {
        img.src = "https://i.postimg.cc/pLXF6fhh/3-0.png";
    }
    if (startposy == 0 && startposx == 4) {
        img.src = "https://i.postimg.cc/DycG6jZ3/4-0.png";
    }
    if (startposy == 0 && startposx == 5) {
        img.src = "https://i.postimg.cc/4NGtzkX1/5-0.png";
    }
    //up
    if (startposy == 1 && startposx == 0) {
        img.src = "https://i.postimg.cc/bYnv8pZ9/0-1.png";
    }
    if (startposy == 2 && startposx == 0) {
        img.src = "https://i.postimg.cc/cCf1cMpb/0-2.png";
    }
    if (startposy == 3 && startposx == 0) {
        img.src = "https://i.postimg.cc/wBbBxB50/0-3.png";
    }
    if (startposy == 4 && startposx == 0) {
        img.src = "https://i.postimg.cc/j5pdNkFf/0-4.png";
    }
    if (startposy == 5 && startposx == 0) {
        img.src = "https://i.postimg.cc/76GZ5ymD/0-5.png";
    }
}