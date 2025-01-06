const share = document.getElementById('active');
const Author = document.getElementById('non-active');

const handleClick = (click)=>{
    if (getComputedStyle(Author).display === "none" && window.matchMedia("(max-width: 768px)").matches) {
        Author.style.display = "flex";
        share.style.display = "none";
      }
     else if(getComputedStyle(Author).display === "none") {
        Author.style.display = "flex";
      }
      else{
        Author.style.display = "none";
      }
}







