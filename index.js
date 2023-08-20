let list = [];
function AddContent(list, container) {
    for(let i = 0; i < 9; i++){
        let mainCont = document.getElementById(container);
        let newDiv = document.createElement("div");
        newDiv.className = "column-item";
        let newTitle = document.createElement("div");
        newTitle.className = `${container}-title-cont`;
        let desc = document.createElement("p");
        desc.innerHTML = list.desc;
        let desc2 = document.createElement("p");
        desc2.innerHTML = list.desc2;
        let title = document.createElement("h3");
        title.className = `${container}-title`;
        title.innerHTML = list.title;
        let subtitle = document.createElement("h4");
        subtitle.className = `${container}-subtitle`;
        mainCont.style.background = `url(${list.image})`;
        mainCont.appendChild(newDiv);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(desc);
        newDiv.appendChild(desc2);
        newTitle.appendChild(title);
        newTitle.appendChild(subtitle);
    }
}
function GetList(){

}