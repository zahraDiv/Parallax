const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const video4 = document.getElementById("video4");
const video5 = document.getElementById("video5");
const video6 = document.getElementById("video6");
const video7 = document.getElementById("video7");
const video8 = document.getElementById("video8");
const video9 = document.getElementById("video9");
const video10 = document.getElementById("video10");

const contactSection = document.getElementById("contactSection");

const menu = document.getElementById("menu");
const scrollText = document.getElementById("scroll");

const aboutText = document.getElementById("aboutText");

const music = document.getElementById("music");
const sound = document.getElementById("sound");

const footer = document.querySelector(".footer");

   ///////////////////////متغیرها /////////////////////////

let step = 0;

let changing = false;   //کنترل اسکرول ///

let footerReady = false;  // نشون دادن فوتر//


 /////////////اسکرول عمودی سایت قفل باشه //////////////////////

document.body.style.overflowY = "hidden";

window.scrollTo(0, 0);


 ///////////////////// روشن و خاموش کردن موزیک ////////////////////////

sound.addEventListener("click", ()=> {

    if (music.paused) {

        music.play();

        sound.classList.remove("off");

    } else {

        music.pause();

        sound.classList.add("off");

    }

});


 /////////////////////////انتقال بین ویدیو ها //////////////////////

function goToVideo2() {

    if (changing) {
        return;
    }

    changing = true;

    menu.style.opacity = "0";

    scrollText.style.opacity = "0";

    aboutText.style.opacity = "0";

    video1.style.opacity = "0";

    video1.pause();


    video2.style.opacity = "1";

    video2.currentTime = 0; //برگردوندن ویذیوی 2 به اول//

    video2.play();

    step = 1;





    setTimeout(()=> {

        video2.style.opacity = "0";

        video2.pause();


        video3.style.opacity = "1";

        video3.currentTime = 0;

        video3.play();


        setTimeout(()=> {

            if (step === 1) {

                aboutText.style.opacity = "1";

                aboutText.style.transform = "translateX(0)";

            }

        }, 300);


        changing = false;

    }, 1200);

}


 /////////////////////////// انتقال ویدیو 3 به 4 /////////////////////////

function goToVideo4() {

    if (changing) {
        return;
    }

    changing = true;

    aboutText.style.opacity = "0";

    aboutText.style.transform = "translateX(40px)";


    setTimeout(()=> {

        video3.style.opacity = "0";

        video3.pause();

        video4.style.opacity = "1";

        video4.currentTime = 0;

        video4.play();


        step = 2;


        changing = false;

    }, 500);

}

////////////////////// انتقال ویدیو 4 به 5 //////////////////////

function goToVideo5() {

    if (changing) {
        return;
    }

    changing = true;


    video4.style.opacity = "0";

    video4.pause();


    video5.style.opacity = "1";

    video5.currentTime = 0;

    video5.play();


    step = 3;


    setTimeout(()=> {

        changing = false;

    }, 900);

}


///////////////////انتقال ویدیو 5 به 6 //////////////////////////////////////

function goToVideo6() {

    if (changing) {
        return;
    }

    changing = true;

    video5.style.opacity = "0";

    video5.pause();


    video6.style.opacity = "1";

    video6.currentTime = 0;

    video6.play();


    step = 4;


    setTimeout(()=> {

        changing = false;

    }, 900);

}


//////////////////// انتقال ویدیو از 6 به 7 ////////////////////////

function goToVideo7() {

    if (changing) {
        return;
    }

    changing = true;

    video6.style.opacity = "0";

    video6.pause();


    video7.style.opacity = "1";

    video7.currentTime = 0;

    video7.play();


    step = 5;


    setTimeout(()=> {

        changing = false;

    }, 900);

}


///////////////////////انتقال ویدیو 7 به 8 ///////////////////////////////

function goToVideo8() {

    if (changing) {
        return;
    }

    changing = true;

    video7.style.opacity = "0";

    video7.pause();


    video8.style.opacity = "1";

    video8.currentTime = 0;

    video8.play();


    step = 6;


    setTimeout(()=> {

        changing = false;

    }, 900);

}


//////////////////////////انتقال ویدیو 8 ب 9//////////////////////////////

function goToVideo9() {

    if (changing) {
        return;
    }

    changing = true;


    video8.style.opacity = "0";

    video8.pause();


    video9.style.opacity = "1";

    video9.currentTime = 0;

    video9.play();


    step = 7;


    setTimeout(()=> {

        changing = false;

    }, 900);

}


///////////////////////انتقال ویدیو 9 به 10 ///////////////////////////////

function goToVideo10() {

    if (changing) {
        return;
    }

    changing = true;


  ////////////////برگردوندن صفحه به حالت قبل  نشون دادن فوتر/////////////////

    footerReady = false;

    document.body.style.overflowY = "hidden";

    window.scrollTo(0, 0);


   ////////////// از concaract حذف کن //////////////

    contactSection.classList.remove("active");

///////////// ویدویی 9 مخفی و استاپ بشه ////////////

    video9.style.opacity = "0";

    video9.pause();


   ///////////////ویدیو 10 نشون داده بشه ///////////

    video10.style.opacity = "1";

    video10.currentTime = 0;

    video10.play();

    step = 8;


   ////////////نشون دادن contacat ////////////

    setTimeout(()=> {

        if (step === 8) {

            contactSection.classList.add("active");

        }

    }, 1000);


   ////////////////////ویدیو 10 نموم شد و فوتر نوشون داده بشه ///////////////////////

    video10.onended = ()=> {

        if (step !== 8) {
            return;
        }


        footerReady = true;


     
        document.body.style.overflowY = "auto";

    };


    setTimeout(()=> {

        changing = false;

    }, 900);

}


//////////////برگشت ویدیوی 10 به 9 //////////////////

function goToVideo9Back() {

    if (changing) {
        return;
    }

    changing = true;


  ///////////////فوتر رو میبریم به حالت اولیه ////////////////

    footerReady = false;

    document.body.style.overflowY = "hidden";

    window.scrollTo(0, 0);


    

    contactSection.classList.remove("active");


  /////////////ویدوی 10 از صفحه خارج بشه ////////////////

    video10.style.opacity = "0";

    video10.pause();

    video10.onended = null;


    ///////////////////// برگشت به ویدوی 9 /////////////////

    video9.style.opacity = "1";

    video9.currentTime = 0;

    video9.play();


    step = 7;

    setTimeout(()=> {

        changing = false;

    }, 900);

}


////////////////برگشت از ویدودی 9 به 8 ////////////////////

function goToVideo8Back() {

    if (changing) {
        return;
    }

    changing = true;

    video9.style.opacity = "0";

    video9.pause();


    video8.style.opacity = "1";

    video8.play();


    step = 6;


    setTimeout(()=> {

        changing = false;

    }, 900);

}


///////////////////برگشت از ویدوی 8 به  7 //////////////////////////

function goToVideo7Back() {

    if (changing) {
        return;
    }

    changing = true;


    video8.style.opacity = "0";

    video8.pause();


    video7.style.opacity = "1";

    video7.play();


    step = 5;


    setTimeout(()=> {

        changing = false;

    }, 900);

}

//////////////برگشت از ویدوی 7 به 6 /////////////////////////


function goToVideo6Back() {

    if (changing) {
        return;
    }

    changing = true;

    video7.style.opacity = "0";

    video7.pause();

    video6.style.opacity = "1";

    video6.play();


    step = 4;


    setTimeout(()=> {

        changing = false;

    }, 900);

}


/////////////////////برگشت از ویدوی 6 به 5 /////////////////////


function goToVideo5Back() {

    if (changing) {
        return;
    }

    changing = true;


    video6.style.opacity = "0";

    video6.pause();


    video5.style.opacity = "1";

    video5.play();


    step = 3;

    setTimeout(()=> {

        changing = false;

    }, 900);

}


////////////////برگشت از ویدوی 5 به 4 /////////////////////////


function goToVideo4Back() {

    if (changing) {
        return;
    }

    changing = true;

    video5.style.opacity = "0";

    video5.pause();


    video4.style.opacity = "1";

    video4.play();


    step = 2;

    setTimeout(()=> {

        changing = false;

    }, 900);

}


//////////////////برگشت از ویدوی 4 به 3 ////////////////////////


function goToVideo3() {

    if (changing) {
        return;
    }

    changing = true;

    video4.style.opacity = "0";

    video4.pause();

    video3.style.opacity = "1";

    video3.play();

    step = 1;


    setTimeout(()=> {

        if (step === 1) {

            aboutText.style.opacity = "1";

            aboutText.style.transform = "translateX(0)";

        }

    }, 300);


    setTimeout(()=> {

        changing = false;

    }, 900);

}


///////////////////////برگشت ویدیو از 3 به 2 و به 1 /////////////////

function goToVideo1() {

    if (changing) {
        return;
    }

    changing = true;

    aboutText.style.opacity = "0";

    aboutText.style.transform = "translateX(40px)";


    setTimeout(()=> {

        video3.style.opacity = "0";

        video3.pause();

        video2.style.opacity = "1";

        video2.currentTime = 0;

        video2.play();


        setTimeout(()=> {

            video2.style.opacity = "0";

            video2.pause();

            video1.style.opacity = "1";

            video1.play();

            menu.style.opacity = "1";

            scrollText.style.opacity = "1";


            step = 0;

            changing = false;

        }, 700);

    }, 500);

}


/////////////اسکرول اصلی ///////////////////////////


window.addEventListener("wheel", (event)=> {

    
    if (footerReady && step === 8 && window.scrollY > 0) {

        return;

    }

/////////////////// موقع انتقال اسکرول نمن ///////////////

    if (changing) {
        return;
    }


  //////////////اسکرول به پایین /////////////////////////////

    if (event.deltaY > 0) {


  ////////// 1 به 2 ////////////////

        if (step === 0) {

            event.preventDefault(); ///// اسکرول معمولی نشه ////

            goToVideo2();

        }


       //////////////3 به 4 //////////////////

        else if (step === 1) {

            event.preventDefault();

            goToVideo4();

        }

//////////////////4 به 5 ///////////////////

        else if (step === 2) {

            event.preventDefault();

            goToVideo5();

        }


        //////////// ب5 به 6 //////////////////

        else if (step === 3) {

            event.preventDefault();

            goToVideo6();

        }

/////////////// 6 به 7 ////////////////

        else if (step === 4) {

            event.preventDefault();

            goToVideo7();

        }

   //////////////// 7 به 8 /////////////////////

        else if (step === 5) {

            event.preventDefault();

            goToVideo8();

        }


        /////////////////// 8 به 9///////////////////

        else if (step === 6) {

            event.preventDefault();

            goToVideo9();

        }


        //////////////// 9 به 10 //////////////

        else if (step === 7) {

            event.preventDefault();

            goToVideo10();

        }


       ////////////// بررسی اماده بودن غوتر //////////////////

        else if (step === 8) {

          ///////// ویدیو 10 هنوز تموم نشده ///////////

            if (!footerReady) {

                event.preventDefault(); // اجازه نده اسکرول عادی بشه //

                return;

            }


        //////// ویدیو 10 تموم شد و با اسکرول برو به فوتر //////////////////

            if (footerReady) {

                event.preventDefault();


                if (footer) {

                    window.scrollTo({

                        top: footer.offsetTop,

                        behavior: "smooth"

                    });

                }

            }

        }

    }


  /////////////// اسکرول به بالا ///////////////////////////

    else if (event.deltaY < 0) {


    ////////// اگه داخل فوتریم اسکرول به حالت طبیعی  اتجام بده ///////////////
        if (step === 8 && footerReady && window.scrollY > 0) {

            return;

        }

///////////// 10 به 9 //////////////

        if (step === 8) {

            event.preventDefault();

            goToVideo9Back();

        }

///////////////// 9 به 8 /////////////////

        else if (step === 7) {

            event.preventDefault();

            goToVideo8Back();

        }

///////////// 8 ببه 7 ////////////////////

        else if (step === 6) {

            event.preventDefault();

            goToVideo7Back();

        }


      //////////////////// 7 به 6 /////////////////////

        else if (step === 5) {

            event.preventDefault();

            goToVideo6Back();

        }


        ////////////// 6 بع 5 //////////////////

        else if (step === 4) {

            event.preventDefault();

            goToVideo5Back();

        }


        /////////////// 5 به 4 ////////////////////
        else if (step === 3) {

            event.preventDefault();

            goToVideo4Back();

        }


        /////////////4 به 3 /////////////////////

        else if (step === 2) {

            event.preventDefault();

            goToVideo3();

        }


        ////////////////// 3 به 1 ///////////////////

        else if (step === 1) {

            event.preventDefault();

            goToVideo1();

        }

    }

}, {
    passive: false
});


/////////////// وقتی از فوتر بریم به  بالی صفحه //////////////

window.addEventListener("scroll", ()=> {

    if (step === 8 && footerReady) {

        
        if (window.scrollY <= 0) {

            window.scrollTo(0, 0);

        }

    }

});