const images = [
    "images/post1.jpg",
    "images/post2.jpg",
    "images/post3.jpg",
    "images/post4.jpg",
    "images/post5.jpg",
    "images/post6.jpg",
    "images/post7.jpg",
    "images/post8.jpg",
    "images/post9.jpg"
]

const postImage = document.getElementById("postImage");
const refreshBtn =  document.getElementById("refreshBtn");

refreshBtn.addEventListener("click", ()=>{

    postImage.classList.add("fade-out");
    setTimeout(()=>{
        const randomIndex = Math.floor(Math.random()*images.length);
        postImage.src = images[randomIndex];

        postImage.classList.remove("fade-out");
        postImage.classList.add("fade-in");

        setTimeout(() => {
            postImage.classList.remove("fade-in");
        }, 400);
    }, 400);

});