const rating = document.querySelector('.cuotasDos');
let current = 0;
const limite = 12;

const htmls = Array.from(Array(limite)).map((_, i) => {
    return `<div class= "items items-${i}" data-pos="${i}"></div>`;
});

rating.innerHTML = htmls.join("");

document.querySelectorAll(".items").forEach((item) => {
    item.addEventListener("click", () => {
    const pos = item.getAttribute("data-pos");

    if(currentValue == parseInt(pos) + 1){
        return;
    }

    document.querySelectorAll('.items').forEach(it => {
        if(it.classList.contains("items-full")){
            it.classList.remove("items-full");
        }
    } );



    for(i=0; i<=pos; i++) {
        const square = document.querySelector(`.items-${i}`);
        if(!square.classList.contains("items-full")){
            square.classList.add("items-full");
        }
    }
    currentValue = parseInt(pos) + 1;

    const selectedItems = Array.from(document.querySelectorAll('.items-full')).map(selectedItem => {
        return selectedItem.getAttribute("data-pos")
    });

        console.log(selectedItems)
    localStorage.setItem("cuotass", JSON.stringify(selectedItems));

    });

    
});

window.addEventListener('load', () => {
    const selectedItems = JSON.parse(localStorage.getItem("cuotass"));
    if(selectedItems){
        selectedItems.forEach(selectedItem => {
            const square = document.querySelector(`.items-${selectedItem}`);
            if(!square.classList.contains("items-full")){
                square.classList.add("items-full");
            }
        });
        currentValue = selectedItems.length;
    }
})