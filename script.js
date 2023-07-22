var imageContainer = document.querySelector("#image-container")
var pics = document.querySelectorAll(".pic")

var counter = 0
pics.forEach(
    (pic, index) => {
        var x = (index * 100);
        pic.style.left = x + "%";
    }
)
const prevImage = () => {
    counter--
    carouselMove()
}
const nextImage = () => {
    counter++
    carouselMove()
}

const carouselMove = () => {
    pics.forEach(
        (pic) => {
            if (counter > 0 && counter < 6) {
                var a = -(counter * 100)
                pic.style.transform = 'translateX(' + a + "%" + ')';
            } else if (counter <= 0) {
                counter = 0
                pic.style.transform = 'translateX(0%)';
            }
            else {
                counter--
            }

        }
    )

}