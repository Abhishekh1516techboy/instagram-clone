let arr = [
    {

        dp: "assets/images/admin.webp",
        rel: "assets/videos/1.mp4",
        fn:"Abhishekh kumar",
        like:"2.8M",
        cmnt:"900",
        shre:"4,586",
        clss:"video"
    },

    {
        dp: "assets/images/nineteen.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-fireworks-illuminating-the-beach-sky-4157-large.mp4",
        fn:"The Sheryians Coding School",
        like:"1.2M",
        cmnt:"600",
        shre:"1,258",
        clss:"video"

    },

    {
        dp: "assets/images/seven.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-tree-covered-hill-41537-small.mp4",
        fn:"SAURAV RAJ",
        like:"45K",
        cmnt:"444",
        shre:"7,824",
        clss:"video"

    },

    {
        dp: "assets/images/three.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4",
        fn:"Aman Khan",
        like:"1.2M",
        cmnt:"451",
        shre:"1,245"
    },

    {
        dp: "assets/images/ninteen.webp",
        rel:"https://ak.picdn.net/shutterstock/videos/1107158613/preview/stock-footage-happy-new-year-animation.mp4",
        fn:"Abhishek.Kr",
        like:"5M",
        cmnt:"751",
        shre:"8,564"
    },

    {
        dp: "assets/images/twenty.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-tree-covered-hill-41537-large.mp4",
        fn:"Aman Pal",
        like:"78K",
        cmnt:"452",
        shre:"8,564"
    },

    {
        dp: "assets/images/one.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4",
        fn:"Ajay kumar Pal",
        like:"3.8K",
        cmnt:"452",
        shre:"1,452"
    },

    {
        dp: "assets/images/ten.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-man-runs-past-ground-level-shot-32809-large.mp4",
        fn:"Avinash Raj",
        like:"50K",
        cmnt:"452",
        shre:"4,787"
    },

    {
        dp: "assets/images/thirteen.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-oil-drops-in-purple-ink-in-motion-extreme-close-up-51416-large.mp4",
        fn:"Nandita Pal",
        like:"10K",
        cmnt:"546",
        shre:"7,889"
    },

    {
        dp: "assets/images/five.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-a-supernova-explosion-in-the-deep-dark-space-51520-large.mp4",
        fn:"Sahil",
        like:"95K",
        cmnt:"542",
        shre:"4,125"
    },
    {
        dp: "assets/images/trisha.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-a-futuristic-robot-slowly-morphs-under-laser-beams-and-ethereal-51519-large.mp4",
        fn:"Ravi Rudra",
        like:"12M",
        cmnt:"997",
        shre:"4,256"
    },
    {
        dp: "assets/images/twentyone.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-a-mesmerizing-backdrop-morphing-and-moving-in-front-of-a-51514-large.mp4",
        fn:"Subham Sarkar",
        like:"42K",
        cmnt:"452",
        shre:"4,689"
    },
    {
        dp: "assets/images/four.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-young-photographer-setting-up-his-camera-outdoors-34408-large.mp4",
        fn:"MoHiT RaJ",
        like:"2.2M",
        cmnt:"897",
        shre:"4,551"
    },
    {
        dp: "assets/images/twentytwo.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-behind-the-scenes-of-a-speaker-talking-on-camera-34486-large.mp4",
        fn:"Vikash Raj",
        like:"7K",
        cmnt:"455",
        shre:"4,569"
    },
    {
        dp: "assets/images/six.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-girl-gently-skating-in-a-parking-lot-34548-large.mp4",
        fn:"Adarsh Pal",
        like:"5.8K",
        cmnt:"425",
        shre:"758"
    },
    {
        dp: "assets/images/nine.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-city-traffic-on-bridges-and-streets-34565-large.mp4",
        fn:"Roushan Kumar",
        like:"2.9M",
        cmnt:"785",
        shre:"4,896"
    },
    {
        dp: "assets/images/eight.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-excited-girl-with-a-stuffed-santa-claus-39747-large.mp4",
        fn:"decent..abhi",
        like:"42K",
        cmnt:"452",
        shre:"7,896"
    },
    {
        dp: "assets/images/tweleve.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-air-bubbles-underwater-upside-video-1273-large.mp4",
        fn:"Dhanjay Paswan",
        like:"46K",
        cmnt:"145",
        shre:"7,895"
    },
    {
        dp: "assets/images/eleven.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-abstract-smoke-on-a-black-background-1969-large.mp4",
        fn:"Sachin Raj",
        like:"4M",
        cmnt:"459",
        shre:"4,895"
    },
    {
        dp: "assets/images/twentythree.webp",
        rel: "https://assets.mixkit.co/videos/preview/mixkit-a-hipster-sitting-on-a-chair-under-lights-2147-large.mp4",
        fn:"Akash",
        like:"10K",
        cmnt:"789",
        shre:"4,256"
    },

];

let reelsCard = document.querySelector('.reels-card')

let reelClutter = '';

arr.forEach((e, idx) =>{

        reelClutter += `<div class="reels" id="${idx}">

                <div class="reels-camera">
                    <svg width="28" height="28" viewBox="0 0 24 24" >
                        <path fill="#fff" d="M19 6.5h-1.28l-.32-1a3 3 0 0 0-2.84-2H9.44A3 3 0 0 0 6.6 5.55l-.32 1H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3.05m1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-.68l.54-1.64a1 1 0 0 1 .95-.68h5.12a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .9.68h2a1 1 0 0 1 1 1Zm-8-9a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"/>
                    </svg>
                </div>

                <div class="reels-video">
                    <video loop autoplay id="${idx}" src="${e.rel}"> </video>
                    <i class="ri-heart-fill reelLike"></i>
                </div>

                <div class="reels-user-profile">
                    <div class="reels-user-dp">
                        <img src="${e.dp}" alt="">
                    </div>
                    <h4>${e.fn.slice(0, 15)}</h4>
                    <button>Follow</button>
                </div>

                <div class="user-intraction">
                    <svg aria-label="Unlike" id="${idx}" class="rlike" stroke-width="4.5" stroke="#fff" height="25" role="img" viewBox="0 0 48 52" width="25"><title>Unlike</title><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                     <h4>${e.like}</h4>
                     <svg aria-label="Comment" fill="currentColor" height="25" role="img" viewBox="0 0 24 24" width="25"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="2"></path></svg>
                     <h4>${e.cmnt}</h4>
                     <svg aria-label="Share Post"  fill="currentColor" height="25" role="img" viewBox="0 0 24 24" width="25"><title>Share Post</title><line fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="#fff" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                     <h4>${e.shre}</h4>
                     <svg width="22" height="22" viewBox="0 0 24 24" >
                        <g fill="none" stroke="#fff" stroke-width="2">
                            <circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/>
                            <circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/>
                            <circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/>
                        </g>
                     </svg>
                     <img src="${e.dp}" alt="">
                </div>

                <div class="reel-progress">
                    <div class="reel-growth"></div>
                </div>
        </div>`
});

reelsCard.innerHTML = reelClutter;


// Get the video element
const video = document.querySelector("video");


// Create an observer with a callback function
const observer = new IntersectionObserver((entries) => {
  // Loop through the entries
  for (const entry of entries) {
    // Check if the entry is intersecting
    if (entry.isIntersecting) {
      // Play the video
      video.play();
    } else {
      // Pause the video
      video.pause();
    }
  }
});

// // Observe the video element
observer.observe(video);


let rlike = document.querySelectorAll('.rlike');
let reels = document.querySelectorAll('.reels');

rlike.forEach((elm) => {
    elm.addEventListener('click',() => {
      if (elm.style.fill == '') {
        elm.style.fill = 'red';
        elm.style.stroke = 'red';
        elm.style.transform = 'scale(1.2)';

        elm.parentElement.parentElement.children[1].lastElementChild.style.transform = 'translate(-50%, -50%) scale(1.8) translateY(0) rotate(25deg)';
      elm.parentElement.parentElement.children[1].lastElementChild.style.opacity = 0.8;
        
            setTimeout(() => {
                elm.parentElement.parentElement.children[1].lastElementChild.style.transform = 'translate(-50%, -50%) scale(1.8) translateY(0) rotate(-25deg)';
                elm.parentElement.parentElement.children[1].lastElementChild.style.color = 'red';
            }, 1000);
            
            setTimeout(() => {
                elm.parentElement.parentElement.children[1].lastElementChild.style.transform = 'translate(-50%, -50%) scale(1.8) translateY(-260%)';
            }, 1300);
        
            setTimeout(() => {
                elm.parentElement.parentElement.children[1].lastElementChild.style.transform = 'translate(-50%, -50%) scale(0) translateY(0)';
                elm.parentElement.parentElement.children[1].lastElementChild.style.opacity = 0;
                elm.parentElement.parentElement.children[1].lastElementChild.style.color = '';
            }, 1800);
      } else {
        elm.style.fill = '';
        elm.style.stroke = '#fff';
      }

    });
});


reels.forEach((elm) => {
    elm.addEventListener('dblclick',() => {

        elm.children[1].lastElementChild.style.transform = 'translate(-50%, -50%) scale(1.8) translateY(0) rotate(25deg)';
        elm.children[1].lastElementChild.style.opacity = 0.8;
        
            setTimeout(() => {
                elm.children[1].lastElementChild.style.transform = 'translate(-50%, -50%) scale(1.8) translateY(0) rotate(-25deg)';
                elm.children[1].lastElementChild.style.color = 'red';
            }, 1000);
            
            setTimeout(() => {
                elm.children[1].lastElementChild.style.transform = 'translate(-50%, -50%) scale(1.8) translateY(-260%)';
            }, 1300);
        
            setTimeout(() => {
                elm.children[1].lastElementChild.style.transform = 'translate(-50%, -50%) scale(0) translateY(0)';
                elm.children[1].lastElementChild.style.opacity = 0;
                elm.children[1].lastElementChild.style.color = '';
            }, 1800);

            if (elm.children[3].firstElementChild.style.fill == '') {
                elm.children[3].firstElementChild.style.fill = 'red';
                elm.children[3].firstElementChild.style.stroke = 'red';
                elm.children[3].firstElementChild.style.transform = 'scale(1.2)';
            }else {
                    elm.children[3].firstElementChild.style.fill = '';
                    elm.children[3].firstElementChild.style.stroke = '#fff';
                  }
    }); 
});