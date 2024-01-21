let arr = [
    {
        n: "abhishekh1516techboy",
        fn:"Abhishekh kumar",
        admiNdP:"assets/images/admin.webp",
    },
];

let usrPost = [
    {
        post:"assets/images/usrpost17.webp"
    },
    {
        post:"assets/images/usrpost16.webp"
    },
    {
        post:"assets/images/usrpost15.webp"
    },
    {
        post:"assets/images/usrpost14.webp"
    },
    {
        post:"assets/images/usrpost13.webp"
    },
    {
        post:"assets/images/usrpost12.webp"
    },
    {
        post:"assets/images/usrpost11.webp"
    },
    {
        post:"assets/images/usrpost10.webp"
    },
    {
        post:"assets/images/usrpost9.webp"
    },
    {
        post:"assets/images/usrpost8.webp"
    },
    {
        post:"assets/images/usrpost7.webp"
    },
    {
        post:"assets/images/usrpost6.webp"
    },
    {
        post:"assets/images/usrpost5.webp"
    },
    {
        post:"assets/images/usrpost4.webp"
    },
    {
        post:"assets/images/usrpost3.webp"
    },
    {
        post:"assets/images/usrpost2.webp"
    },
    {
        post:"assets/images/usrpost1.webp"
    },
];


let adminLinkPopup = document.querySelector('.admin-link-popup');
let adminMainCard = document.querySelector(".admin-main-card");
let adminSocialLink = document.querySelector('.admin-links-profile h4');
let popupCancelBtn = document.querySelector('.admin-link-popup-head svg')
let adminAddAccount = document.querySelector('.admin-add-account');
let adminAddAccountImg = document.querySelector('.admin-add-account img');
let adminAddAccountName = document.querySelector('.admin-add-account h4');
let adminUserId = document.querySelector('.admin-userid h4');
let adminDpImg = document.querySelector('.adminDp img');
let adminDpName = document.querySelector('.adminDp h4');
let adminUserIdArrow = document.querySelector('.admin-userid svg');
let adminCreatePosts = document.querySelector('.admin-createPost');
let adminCreateNewIcon = document.querySelector('.adminCreate-icon');
let adminHamburgurIcon = document.querySelector('.adminHamburgur-icon');
let adminHamburgurs = document.querySelector('.admin-hamburgur');
let adminPOstGallery = document.querySelector('.admin-post-gallery');
let adminPostCount = document.querySelector('.admin-post-count h4');
popup = 0;
accAdd = 0;
create = 0;
posts = '';

arr.forEach((e) => {
    adminUserId.textContent =`${e.n}`;
    adminDpImg.src = `${e.admiNdP}`;
    adminDpName.textContent =`${e.fn}`;
    adminAddAccountImg.src = `${e.admiNdP}`;
    adminAddAccountName.textContent = `${e.n}`;
});


usrPost.forEach((e,idx) => {
    // admin posts section
    posts += `<div class="admin-posts" id=""${idx}> 
    <img src="${e.post}" alt="">
</div>`

adminPostCount.textContent = `${usrPost.length}`

});

adminPOstGallery.innerHTML = posts;

// Admin-socialLinkPop section
adminSocialLink.addEventListener("click",() => {
    if (popup == 0) {
        popup = 1;
        adminLinkPopup.style.display = 'block';
        adminMainCard.style.filter = 'blur(1.5px)';
    }
});

popupCancelBtn.addEventListener('click',() => {
    adminLinkPopup.style.display = 'none';
    popup = 0;
    adminMainCard.style.filter = '';
});

// Admin-AddAccount-BottomSlide Section
adminUserId.addEventListener('click',() => {
    if (accAdd == 0) {
        accAdd = 1;
        adminAddAccount.style.transform = 'translateY(0)';
        adminMainCard.style.filter = 'brightness(80%)';
    } else {
        accAdd = 0;
        adminAddAccount.style.transform = 'translateY(100%)';
        adminMainCard.style.filter = '';
    }
});

adminUserIdArrow.addEventListener('click',() => {
    if (accAdd == 0) {
        accAdd = 1;
        adminAddAccount.style.transform = 'translateY(0)';
        adminMainCard.style.filter = 'brightness(80%)';
    } else {
        accAdd = 0;
        adminAddAccount.style.transform = 'translateY(100%)';
        adminMainCard.style.filter = '';
    }
});

// Admin-craerateNew section
adminCreateNewIcon.addEventListener('click',() => {
    if (create == 0) {
        create = 1;
        adminCreatePosts.style.transform = 'translateY(0)';
        adminMainCard.style.filter = 'brightness(80%)';
    } else {
        create = 0;
        adminCreatePosts.style.transform = 'translateY(100%)';
        adminMainCard.style.filter = '';
    }
});

// Admin-hamburgur section
adminHamburgurIcon.addEventListener('click',() => {
    if (create == 0) {
        create = 1;
        adminHamburgurs.style.transform = 'translateY(0)';
        adminMainCard.style.filter = 'brightness(80%)';
    } else {
        create = 0;
        adminHamburgurs.style.transform = 'translateY(100%)';
        adminMainCard.style.filter = '';
    }
});