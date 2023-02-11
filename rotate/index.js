import lessons from "./rotate.js";

const container = document.getElementById('container');

for(let i = 0; i<lessons.length; i++){
    let lesson = document.createElement('section');
    lesson.setAttribute("class","lesson");

    let doc_title = document.createElement('h2');
    doc_title.setAttribute("class","title");
    doc_title.innerHTML = lessons[i].title;
    lesson.appendChild(doc_title); 

    let doc_info = document.createElement('article');
    doc_info.setAttribute("class","info");

    let doc_illustration = document.createElement('img');    
    doc_illustration.src = lessons[i].illustration;
    doc_info.appendChild(doc_illustration);

    let doc_description = document.createElement('p');
    doc_description.setAttribute("class","description");
    
    doc_description.innerHTML = lessons[i].description;
    doc_info.appendChild(doc_description);

    lesson.appendChild(doc_info);

    container.appendChild(lesson);
}