
function display(x) {
    let infoItem = document.getElementsByClassName('info');
    let info = infoItem[x]
    
    let imgIcon = document.getElementsByClassName('plus-icon');
    let img = imgIcon[x]

    if (info.style.display == 'none') {
        info.style.display = 'block';
        img.src = 'assets/images/icon-minus.svg'
    } else {
        info.style.display = 'none';
        img.src = 'assets/images/icon-plus.svg'
    }
}