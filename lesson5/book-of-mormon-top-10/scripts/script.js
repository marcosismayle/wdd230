const studyList = document.querySelector('ul');
const whatStudy = document.querySelector('input');
const addSubject = document.querySelector('button');

addSubject.addEventListener('click', () => {
    const mySubject = whatStudy.value;
    whatStudy.value = '';

    const listSubject = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    
    listSubject.appendChild(listText);
    listText.textContent = mySubject;
    listSubject.appendChild(listBtn);
    listBtn.textContent = '❌';
    studyList.appendChild(listSubject);

    listBtn.addEventListener('click', () => {
        studyList.removeChild(listSubject);
    });
    
    whatStudy.focus();    

});