const cars = [
    {id:1,name:"Ferrari 499P",class:"LMH",engine:"V6 Turbo",power:"680 HP"},
    {id:2,name:"Toyota GR010",class:"LMH",engine:"V6 TT Hybrid",power:"680 HP"},
    {id:3,name:"Porsche 963",class:"LMDh",engine:"V8 Biturbo",power:"670 HP"},
    {id:4,name:"Cadillac V-Series.R",class:"LMDh",engine:"V8 NA",power:"670 HP"},
];

let filter="all";
let search="";
let favorites=JSON.parse(localStorage.getItem("fav"))||[];

const gallery=document.getElementById("gallery");
const modal=document.getElementById("modal");
const modalContent=document.getElementById("modal-content");

/* RENDER */
function render(){
    gallery.innerHTML="";
    let data=cars.filter(c =>
        (filter==="all"||filter==="favorite"&&favorites.includes(c.id)||c.class===filter) &&
        c.name.toLowerCase().includes(search)
    );

    if(!data.length){
        gallery.innerHTML="<p style='color:#777'>Нічого не знайдено</p>";
        return;
    }

    data.forEach(car=>{
        const el=document.createElement("div");
        el.className="card";
        el.innerHTML=`
            <span class="badge">${car.class}</span>
            <h3>${car.name}</h3>
            <div class="spec">Engine: ${car.engine}</div>
            <div class="spec">Power: ${car.power}</div>
            <div class="actions">
                <button onclick="openModal(${car.id})">Details</button>
                <span class="star" onclick="toggleFav(${car.id})">
                    ${favorites.includes(car.id)?"⭐":"☆"}
                </span>
            </div>
        `;
        gallery.appendChild(el);
    });
}

/* FAVORITE */
function toggleFav(id){
    favorites=favorites.includes(id)
        ?favorites.filter(x=>x!==id)
        :[...favorites,id];
    localStorage.setItem("fav",JSON.stringify(favorites));
    render();
}

/* MODAL */
function openModal(id){
    const c=cars.find(x=>x.id===id);
    modalContent.innerHTML=`
        <h2>${c.name}</h2>
        <p>${c.class}</p>
        <p>Engine: ${c.engine}</p>
        <p>Power: ${c.power}</p>
    `;
    modal.style.display="block";
}

document.querySelector(".close").onclick=()=>modal.style.display="none";
window.onkeydown=e=>e.key==="Escape"&&(modal.style.display="none");

/* FILTERS */
document.querySelectorAll(".filters button").forEach(b=>{
    b.onclick=()=>{
        document.querySelector(".active").classList.remove("active");
        b.classList.add("active");
        filter=b.dataset.filter;
        render();
    }
});

document.getElementById("search").oninput=e=>{
    search=e.target.value.toLowerCase();
    render();
};

render();
