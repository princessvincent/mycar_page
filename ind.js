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
    }

]

let carSection = document.getElementById('section');
let html = "";

cars.forEach(e => {
    html += `
    <div class=" col-12 col-sm-12 col-md-4 col-lg-4 ">
    <div class="card-img ">
      <div class="d-md-fle" id="image">
            <img src="images/${e.img}" alt="" class="card-img img-fluid w-auto">
        </div>
            <div class="bg-success p-md-5 p-sm-4 mb-4 w-75" m-md-auto>
        <h2 class="text-center m-auto text-light fs-3 ">Name:  ${e.names}</h2>
        <p class=" text-center m-auto text-light fs-3 ">price:  ${e.price}</p>
            </div>
    </div>
</div>
    `

    console.log(e)
    carSection.innerHTML = html;
})