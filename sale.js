document.getElementById('lh_button').addEventListener('click', () => {

    let canvas = document.getElementById('lh_anvas');
    canvas.style.transition = 'all 4s ease'
    let r = Math.floor(Math.random() * 5);
    let rotate = r + 15
    canvas.style.transform = `rotate(` + (34 + rotate * 72) + `deg)`
    console.log(34 + rotate * 72)
    setTimeout(() => {
        let percent
        switch (r) {
            case 1:
                percent = 4
                break;
            case 2:
                percent = 3
                break;
            case 3:
                percent = 2
                break;
            case 4:
                percent = 1
                break;
            case 0:
                percent = 3
                break;
            default:
                console.log("Sorry, we are out of " + expr + ".");
        }
        document.getElementById('lh_success').style.display='flex';
        document.getElementById('percent').innerHTML=`Скидку `+ percent+`%`
    }, 4000);
})