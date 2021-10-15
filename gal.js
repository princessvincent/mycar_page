let cars = [
    {
        img: "bmw-918408_1920.jpg",
        names: "nevy car",
        price: "500,000"
    },
    {
        img: "bmw-158704_1280.png",
        names: "Blue car",
        price: "700,000"
    },
    {
        img: "car-30984_1280.png",
        names: "Red car",
        price: "$1000,000"
    },
    {
        img: "car-49278_1920 (1).jpg",
        names: "oxblood car",
        price: "900,000"
    },
    {
        img: "car-63930_1920.jpg",
        names: "latex car",
        price: "$1000,000"
    },
    {
        img: "car-158795_1280.png",
        names: "G-wagon car",
        price: "$2000,000"
    },
    {
        img: "car-1300629_1280.png",
        names: "Roya Blue car",
        price: "$2000,000"
    },
    {
        img: "car-5548242_1920.jpg",
        names: "Silver car",
        price: "$2000,000"
    },
    {
        img: "car-6603726_1920.jpg",
        names: "Benz car",
        price: "$3000,000"
    },
    {
        img: "car-race-438467_1920.jpg",
        names: "Blue car",
        price: "500,000"
    },
    {
        img: "ford-mustang-146580_1280.png",
        names: "Mecedice car",
        price: "$1000,000"
    },
    {
        img: "man-362150_1920.jpg",
        names: "Royce car",
        price: "$5000,000"
    },
    {
        img: "porsche-1851246_1920.jpg",
        names: "Porsche car",
        price: "$5000,000"
    },
    {
        img: "vintage-1950s-887272_1920.jpg",
        names: "Private car",
        price: "900,000"
    },
    {
        img: "volkswagen-158463_1280.png",
        names: "school Bus car",
        price: "400,000"
    },
    {
        img: "woman-1853939_1920.jpg",
        names: "Ladies car",
        price: "700,000"
    }

]

let carSection = document.getElementById('sectio');
let html = "";

cars.forEach(e => {
    html += `
    <div class=" col-12 col-sm-12 col-md-6 col-lg-6 m-md-auto">
      <div class="d-md-fle" id="image">
            <img src="images/${e.img}" alt="" class="card-img img-fluid m-md-auto w-auto">
        </div>
            <div class="bg-success p-md-5 p-sm-4 mb-4 w-auto m-md-auto">
        <h2 class="text-center m-auto text-light fs-3 ">Name:  ${e.names}</h2>
        <p class=" text-center m-auto text-light fs-3 ">price:  ${e.price}</p>
            </div>
    
</div>
    `

    console.log(e)
    carSection.innerHTML = html;
})