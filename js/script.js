function productDeploys() {
    let container_Cards = document.querySelector(".cardContainer");
    let tovarlar = {
        mevalar: {
            name: ["Olma", "Banan", "Tarvuz", "Shaftoli"],
            pict: ["./picts/olma.jpg","./picts/banan.webp","./picts/tarvuz.webp","./picts/shaftoli.jpg"],
            cost: [8000, 16000, 28000, 32000],
            class: "meva"
        },
        sabzavotlar: {
            name: ["Kartoshka", "Piyoz", "Qizil piyoz", "Baqlajon", "Sabzi", "Karam"],
            pict: ["./picts/kartoshka.jpg","./picts/piyoz.jpg","./picts/qizilpiyoz.jpg","./picts/baqlajon.jpg","./picts/sabzi.jpg","./picts/karam.jpg"],
            cost: [7000, 4000, 5000, 12000, 3000, 8000],
            class: "sabza"
        },
        drinks: {
            name: ["Coca cola 1.5l", "Pepsi 1.5 l", "Fanta 1.5 l", "Dena olmali", "Dena olchali", "Bliss olmali", "Bliss multimeva", "Nestle gazlanmagan suv"],
            pict: ["./picts/cocacola.jpg","./picts/pepsi.jpg","./picts/fanta.jpg","./picts/denaolmali.jpg","./picts/denaolchali.jpg","./picts/blissolamli.jpg","./picts/blissolchali.jpg","./picts/nestle.jpg"],
            cost: [11000, 10500, 12000, 10000, 10000, 11000, 11000, 5000],
            class: "drink"
        },
        nonlar: {
            name: ["Obinon", "Baton non", "Patir non", "Buxanka", "Qora non"],
            pict: ["./picts/obinon.jpg","./picts/baton.jpg","./picts/patir.jpg","./picts/buxanka.jpg","./picts/qoranon.jpg"],
            cost: [4000, 8000, 5000, 3000, 7000],
            class: "non"
        },
        makaron: {
            name: ["Makaron 'Burama'", "Makaron 'Trubichka'", "Makaron 'Spagetti'", "Makaron 'Kokil'"],
            pict: ["./picts/makaronpurjina.jpg","./picts/makarontekis.jpg","./picts/makaronspagetti.jpg","./picts/makaronkokil.jpg"],
            cost: [8000, 7500, 9000, 9000],
            class: "mak"
        },
        shirinliklar: {
            name: ["Chupa chups", "Velona", "Pankie", "Okeyk", "Ole", "Biskeyk", "Milka Plitka", "Milka pechenye"],
            pict: ["./picts/chupachups.jpg","./picts/velona.jpg","./picts/pankie.jpg","./picts/okeyk.jpg","./picts/ole.jpg","./picts/biskeyk.jpg","./picts/MilkaChoco.jpg","./picts/milka.jpg"],
            cost: [1500, 3000, 3000, 5000, 2000, 3000, 12000, 11200],
            class: "donut"
        },
    }
    
    function add(picts, names, costs, lth, cls) {
        for (let i = 0; i < lth; i++){
            let zakaz = Math.floor(Math.random() * 300)
            container_Cards.innerHTML += `<div class="card">
            <div class="imgBox" id="${cls}"><img src="${picts[i]}"></div>
            <div class="contentBox">
                <p class="title">${names[i]}</p>
                <p>Narxi: <b class="price">${costs[i]}</b> <i>so'm</i></p>
                <p>Buyurtmalar soni: <b>${zakaz}</b> ta</p>
                <button id="btns">Savatga</button>
            </div>
        </div>`
        }        
    }
    add(
        tovarlar.mevalar.pict,
        tovarlar.mevalar.name,
        tovarlar.mevalar.cost,
        tovarlar.mevalar.name.length,
        tovarlar.mevalar.class
    )
    add(
        tovarlar.sabzavotlar.pict,
        tovarlar.sabzavotlar.name,
        tovarlar.sabzavotlar.cost,
        tovarlar.sabzavotlar.name.length,
        tovarlar.sabzavotlar.class
    )
    add(
        tovarlar.drinks.pict,
        tovarlar.drinks.name,
        tovarlar.drinks.cost,
        tovarlar.drinks.name.length,
        tovarlar.drinks.class
    )
    add(
        tovarlar.nonlar.pict,
        tovarlar.nonlar.name,
        tovarlar.nonlar.cost,
        tovarlar.nonlar.name.length,
        tovarlar.nonlar.class
    )
    add(
        tovarlar.makaron.pict,
        tovarlar.makaron.name,
        tovarlar.makaron.cost,
        tovarlar.makaron.name.length,
        tovarlar.makaron.class
    )
    add(
        tovarlar.shirinliklar.pict,
        tovarlar.shirinliklar.name,
        tovarlar.shirinliklar.cost,
        tovarlar.shirinliklar.name.length,
        tovarlar.shirinliklar.class
    )
    























    
    //  container_Cards.appendChild(rek);
    let all = document.querySelector("#all")
    let mevaId = document.querySelector("#meva")
    let vegId = document.querySelector("#veg")
    let drinkId = document.querySelector("#drinks")
    let nonId = document.querySelector("#non")
    let makId = document.querySelector("#makaron")
    let donutId = document.querySelector("#donuts")
    let cards = container_Cards.querySelectorAll(".card")
    
    all.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "grid";
            
        })
    }
    mevaId.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "none"
            if (e.querySelector(".imgBox").id == "meva") {
                e.style.display = "grid";
                // rek.style.display = "none";                
            }
        })
    }
    vegId.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "none"
            if (e.querySelector(".imgBox").id == "sabza") {
                e.style.display = "grid";
                // rek.style.display = "none";
            }
        })
    }
    drinkId.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "none"
            if (e.querySelector(".imgBox").id == "drink") {
                e.style.display = "grid";
                // rek.style.display = "none";
            }
        })
    }
    nonId.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "none";
            
            
            if (e.querySelector(".imgBox").id == "non") {
                e.style.display = "grid";
                // rek.style.display = "none";
               
            } 
        })
    }
    makId.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "none"
            if (e.querySelector(".imgBox").id == "mak") {
                // e.style.display = "flex";
                e.style.display = "grid";
                // rek.style.display = "none";
            }
        })
    }
    donutId.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "none"
            if (e.querySelector(".imgBox").id == "donut") {
                // e.style.display = "flex";
                e.style.display = "grid";
                // rek.style.display = "none";
            }
        })
    }
    
}

productDeploys()

function buttonClick() {
    
    let buttons = document.querySelectorAll("#btns");

    
    let total = 0;
    let b = 0;
    buttons.forEach((e, i) => {
        
        e.onclick = () => {
            b++;
            let cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.style.display = "flex";
            cartItem.style.alignItems = "flex-start";
            cartItem.style.justifyContent = "center";
            cartItem.style.gap = "10px";
            cartItem.style.position = "relative";
            let nomi = document.createElement("p");
            nomi.style.color = "orange";
            nomi.style.fontWeight = "700";
            nomi.style.fontSize = "18px";
            nomi.innerHTML = e.parentElement.querySelector(".title").innerHTML;
            let narx = document.createElement("h2");
            narx.style.color = "orange";
            narx.style.fontWeight = "700";
            narx.style.fontSize = "18px";
            narx.innerHTML = e.parentElement.querySelector(".price").innerHTML;
            let crash = document.createElement("i");
            crash.className = "fa fa-close";
            crash.style.cursor = "pointer"
            

            cartItem.appendChild(crash);
            cartItem.appendChild(nomi);
            cartItem.appendChild(narx);
            document.querySelector("#cartItem").appendChild(cartItem)
            console.log(e.parentElement.querySelector(".title").innerHTML);

            
            total = total + parseInt(narx.innerText, 10)
            console.log(total);
            document.querySelector("h4#total").innerText = total + "so'm ";
            document.querySelector("#total").innerText = b + " ta";
            function closure() {
                let crashes = document.querySelectorAll(".cart-item i");
            
                crashes.forEach(e => {
                    e.onclick = () => {
                        e.parentElement.style.display = "none"
                        total = total - parseInt(e.parentElement.querySelector("h2").innerHTML, 10);
                        document.querySelector("h4#total").innerText = total + "so'm ";
                        b--;
                        document.querySelector("#total").innerText = b + " ta";
                    }
                })
            }
            closure(total)

        }
    })
}


buttonClick()
function basket() {
    document.querySelector(".market").classList.toggle("qayt");
    document.querySelector(".market").classList.remove("ortga");
}
function closeBasket() {
    document.querySelector(".market").classList.remove("qayt");
    document.querySelector(".market").classList.toggle("ortga");
}

