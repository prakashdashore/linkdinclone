
const headerBar = document.getElementById('toggle_my_header');
const searchBar = document.querySelector('.search_bar_input');
const search = document.querySelector('.search_bar');
const body = document.body;
let homeContainer = document.querySelector('.center_container');

const seeMoreBtn = document.getElementById('see_more_center_responsive');
const favoriteContainer = document.getElementById('responsive_favoris');
const shawProfileBtn = document.querySelector('.me');
const btnMessageArea = document.querySelector('#btn_toggle_message_box');
const messageArea = document.querySelector('.sms_container');
let blurEl = document.createElement('span');
var mypost = document.querySelector("#mypost")
var more = document.querySelector("#more")
var all = document.querySelector(".all")
var skill = document.querySelector(".skill")
var work = document.querySelector("#work_sec")
var section = document.querySelector("#right_float_sec")
var blur_sec = document.querySelector("#blur_sec")
var cross = document.querySelector("#cross_img")


const profilesArray = [
    {
        id: 1,
        photoProfile: "https://media-exp1.licdn.com/dms/image/C4D03AQE337PnnXqBsA/profile-displayphoto-shrink_100_100/0/1653146214661?e=1667433600&v=beta&t=YuML43z0MLiqG0vmeNu8VObWjd7g3E8yWnH6nSZ_wqM",
        userName: "Rajkumar ",
        job: "Mechanical Engineer at Eicher",
        img: "https://picsum.photos/id/237/300/200",
        day: "3d",
        text: "My tried and tested productivity hacks for getting the most out of my day.Start early - I’m usually up by 5 am. I spend my mornings doing things that are good for my soul - yoga, chai with Amma, time with the family, and my dogs!"
    },
    {
        id: 2,
        photoProfile: "./css/images/profil12.jpg",
        userName: "Eric malin",
        job: "Real State Consultancy ",
        img: "https://media-exp1.licdn.com/dms/image/C4D22AQF8VbI78DVnrw/feedshare-shrink_800/0/1661669121275?e=1665014400&v=beta&t=vXQ6W6wKMzRHyJRXa5EGyL-TKbfqHq177gOOneZkmTo",
        day: "3d",
        text: "Similarly, it applies to your coding journey.When you're skipping coding, there is no going back for longer days.Be consistent 🙂",
    },
    {
        id: 3,
        photoProfile: "./css/images/profil7-min.png",
        userName: "Cherifa",
        job: "Docteur Bio",
        img: "https://media-exp1.licdn.com/dms/image/C4D22AQGBkmC_HASXIw/feedshare-shrink_800/0/1662096517364?e=1665014400&v=beta&t=yCPFXBrOm4vwGg_K-HswX3kH7G-QHE3VWVBVIbRAgGI",
        day: "4d",
        text: "Again, A CEO of MNC with Indian origin and American Citizenship Indians without Indian Citizenship will soon rule the entire planet.What do you think about the fact that the Most Brilliant Minds of India are no longer Indians?"
    },
    {
        id: 4,
        photoProfile: "./css/images/profil10-min.jpg",
        userName: "Joel makambi",
        job: "Petrolier",
        img: "https://media-exp1.licdn.com/dms/image/C4D22AQGEW04XEGFv0g/feedshare-shrink_800/0/1661827814833?e=1665014400&v=beta&t=OFGFTUyJQ4mUbtK4UagkMEUlC5aYrTxFgN4lAU4VDTs",
        day: "2h",
        text: "Hello everyone,I am a CS Professional student, as well as pursuing LLB.I've worked as a trainee under a PCS from Bhopal and now seeking to complete my remaining tenure of 1 year in corporate.",
    },
    {
        id: 5,
        photoProfile: "./css/images/profil15.jpg",
        userName: "Luccin Idrisse",
        job: " PHP Developer",
        img: "https://media-exp1.licdn.com/dms/image/C4D22AQGEW04XEGFv0g/feedshare-shrink_800/0/1661827814833?e=1665014400&v=beta&t=OFGFTUyJQ4mUbtK4UagkMEUlC5aYrTxFgN4lAU4VDTs",
        day: "1h",
        text: "",
    },
    {
        id: 6,
        userName: "Hortone Paul",
        photoProfile: "https://media-exp1.licdn.com/dms/image/C4D03AQEMrXIAdOeGbw/profile-displayphoto-shrink_400_400/0/1634142453686?e=1668038400&v=beta&t=UFpKE_evPE0G5_G3r1H_wyWx5-zFoURMoYtt9OfB8zM",
        job: " Frontend Engineer",
        img: "https://media-exp1.licdn.com/dms/image/C4D22AQF1u6mg7tGxbQ/feedshare-shrink_800/0/1661234071762?e=1665014400&v=beta&t=E-Amlhfo0bXXOP9SIrofD-hbryMlqa3MjUaMaiv1ROU",
        day: "5h",
        text: " A tele broadcast view of the Platform, Casting of Slab in progress.",
    },
    {
        id: 7,
        photoProfile: "./css/images/profil16.jpg",
        userName: "Kevin Person",
        job: "Backend Developer",
        img: "https://th-i.thgim.com/public/incoming/qsdo0k/article65813443.ece/alternates/FREE_1200/US%20racial%20attack.jpg",
        day: "3d",
        text: " Four Indian-American women have been racially abused and smacked by a Mexican-American woman in the U.S. State of Texas who hurled racist slurs at them that they are ruining America and should go back to India",
    },
    {
        id: 8,
        photoProfile: "./css/images/profil3-min.jpeg",
        userName: "Daniel Miakel",
        job: "Electrical Engineer ",
        img: "https://media-exp1.licdn.com/dms/image/C5622AQH9uHErqbi5aA/feedshare-shrink_800/0/1661809716176?e=1665014400&v=beta&t=o0NYw8aBS4Y6W-ueRY1USJhfXrF-ghv-ZfagSYtwu1I",
        day: "3h",
        text: "You wouldn’t believe how many stamps this needed…",
    },
    {
        id: 9,
        photoProfile: "./css/images/profil9-min.jpg",
        userName: "Jefthe Dupond",
        job: "Engineer bio tech",
        img: "https://media-exp1.licdn.com/dms/image/C4D22AQHY98ACaxR2dw/feedshare-shrink_2048_1536/0/1661518160770?e=1665014400&v=beta&t=Sfl5XznBXNvmo4oaYuw_z6J8WQQgDaP0A8TkP-1pmyc",
        day: "6h",
        text: "A person had a serious accident, and luckily he was wearing an Apple Watch, which measures vital body functions . When the pulse started to fall after accident The watch sent a message to rescue its owner with its location on the map and sent an alert message to the son Your father had an accident and I called the ambulance and you because you are on his emergency list When the son came he saw that the ambulance had taken his father to the recovery room after the call of the clock and he was rescued..When technology is a boon and not a curse !❤️",
    },
    {
        id: 10,
        photoProfile: "./css/images/profil4-3-min.jpg",
        userName: "Matias Mervil",
        job: "International trade",
        img: "https://media-exp1.licdn.com/dms/image/C4E22AQEEDzwwL4YO7Q/feedshare-shrink_800/0/1661782799453?e=1665014400&v=beta&t=mkPiJgNR5oQbmp3wPluUTzxg0lbQckVf9-Ha6E5dlws",
        day: "1h",
        text: "A long way from seeing someone else's goodies, to posting your own on",
    },
    {
        id: 11,
        photoProfile: "./css/images/profil6-min.png",
        userName: "Syntyche Abbis ",
        job: "React Developer",
        img: "https://media-exp1.licdn.com/dms/image/C4E22AQHypYgkXksOXg/feedshare-shrink_800/0/1661939282370?e=1665014400&v=beta&t=1qSgad7tmIprg0Jw4BD-RGrhnByu4aknrMikKb0lrI8",
        day: "6d",
        text: " guess this statement very much depends on what Yoga means to you?",
    },
    {
        id: 12,
        photoProfile: "./css/images/profil5-min.jpg",
        userName: "Eunice Assim",
        job: "HR on Google",
        img: "https://media-exp1.licdn.com/dms/image/C4D22AQGuFH9mwui7Bw/feedshare-shrink_2048_1536/0/1661746194970?e=1665014400&v=beta&t=gWnRe_EyYFaf5xmNJ27yNvinW2Z5mgffgpWUzLog6gg",
        day: "2d",
        text: "Notice period employee after ignoring a call from their boss. 😝",
    },
];


console.log(btnMessageArea)

shawProfileBtn.addEventListener('click', () => {
    // console.log("clicked")
    shawProfileBtn.classList.toggle('shaw_profile')
})
btnMessageArea.addEventListener('click', () => {
    // console.log("clicked")
    btnMessageArea.classList.toggle('switch_btn_icon')
    messageArea.classList.toggle('shaw_message_container')
})

try {
    seeMoreBtn.addEventListener('click', () => {
        console.log("clicked")
        favoriteContainer.classList.toggle('shaw_favorite_container')
        seeMoreBtn.classList.toggle('shaw_favorite_container')
    })

} catch (error) {

}



// console.log(homeContainer)
body.appendChild(blurEl);

searchBar.addEventListener('focus', () => {
    blurEl.classList.add('blur_element');
    searchBar.classList.add('input_on_focus');
    search.style.border = "2px solid black"


})
searchBar.addEventListener('blur', () => {

    blurEl.classList.remove('blur_element');
    searchBar.classList.remove('input_on_focus');
    search.style.border = "none"


})

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if ((scrollHeight - (scrollTop + clientHeight)) <= 20) {

        addProfiles(2);

    }

    if (scrollTop > 400) {
        headerBar.classList.add('toggle_menu_come');
    }
    else {

        headerBar.classList.remove('toggle_menu_come');
    }



});

function getRandomNumber() {
    return Math.floor(Math.random() * 12);
}


function displayProfiles() {
    let profiles = profilesArray.map(items => {

        return `<div class="post third_post">
        <div class="profil_name_job">
            <img class="post_photo_profil" src="${profilesArray[getRandomNumber()].photoProfile}" alt="#">
            <div class="name_and_job"> 
                <h5>${profilesArray[getRandomNumber()].userName}</h4>
                <p>${profilesArray[getRandomNumber()].job}</p>
                <span>${profilesArray[getRandomNumber()].day} &nbsp;. <i class="fa-solid fa-earth-americas"></i></span>
            </div>
        </div>
        <p class="post_text"> ${profilesArray[getRandomNumber()].text}</p>
        <div class="publication">
            <img src="${profilesArray[getRandomNumber()].img}" alt="">
        </div>
        </div>
        <div class="like_share">
              <p><i class="fa-solid fa-thumbs-up"></i><span>Like</span></p>
              <p><i class="fa-solid fa-comment"></i><span>Comment</span></p>
              <p><i class="fa-solid fa-share"></i><span>Shere</span></p>
              <p><i class="fa-solid fa-paper-plane"></i><span>Send</span></p>
        </div>`

    })
    profiles = profiles.join('');
    
    homeContainer.innerHTML = profiles;

}

const addProfiles = () => {
    for (let i = 0; i <= 1; i++) {
        displayProfiles()

    }
}










var q = 0;
function noscroll(){
    window.scrollTo(0,0);
}

work.addEventListener("click", () => {
    if (q === 0) {
        // section.style.position="fixed"
        blur_sec.style.position="fixed"
        // section.style.display="initial"
        section.style.right="0px"

        blur_sec.style.display = "initial"
        window.addEventListener("scroll",noscroll)
        

        q = 1

    }
    else {
        section.style.right="-380px"
        // section.style.display="none"


        blur_sec.style.display = "none"
        window.addEventListener("scroll",scroll)


        // section.style.display="none"


        q = 0


    }

})



cross.addEventListener("click", () => {
    if (q === 0) {
        // section.style.position="fixed"
        blur_sec.style.position="fixed"
        // section.style.display="initial"
        section.style.right="0px"

        blur_sec.style.display = "initial"
        window.addEventListener("scroll",noscroll)
        

        q = 1

    }
    else {
        section.style.right="-380px"
        // section.style.display="none"


        blur_sec.style.display = "none"
        window.addEventListener("scroll",scroll)


        // section.style.display="none"


        q = 0


    }

})















// const addProfiles = ()=>{
//     var gadhi=setInterval(function(){
//         displayProfiles()
//     },1000)
// }

// clearInterval(gadhi)







more.addEventListener("click", () => {
    mypost.style.display = "initial"
    more.style.display = "none"

})


all.addEventListener("click", () => {
    skill.style.display = "initial"
    all.style.display = "none"

})