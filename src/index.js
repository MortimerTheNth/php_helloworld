import { readdirSync, readFileSync } from 'fs';

function getTitles(){
    let titleList = [];
    const base = 'C:\\Users\\Surface\\Downloads\\IMDb-API_sample_data\\IMDb-API sample data\\Movie';
    const files = readdirSync(base);
    let i = 0;
    files.forEach(file => {
        let boyo = JSON.parse(readFileSync(base + file + '\\Title ' + file + '.json', 'utf8'));
        titleList.push(boyo);
        i++;
        if (i == 10) {
            console.log(titleList);
            return;
        }
    })
}


function AddContent(container) {
    let list = getTitles();
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
        newDiv.appendChild(newTitle);
        newDiv.appendChild(desc);
        newDiv.appendChild(desc2);
        newTitle.appendChild(title);
        newTitle.appendChild(subtitle);
        mainCont.appendChild(newDiv);
    }
}
AddContent(list, "movies")