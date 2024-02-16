// Задана ссылка на api в переменной 
// let url = "https://jsonplaceholder.typicode.com/photos"
// Напишите fetch-запрос, который получит данные от сервера 
// в виде массива и для каждого полученного элемента (чей albumId = 35 ) создайте DIV элемент в HTML разметке. 
// Воспользуйтесь GRID сеткой, чтобы разместить по 4 элемента в ряд, сформировав следующее описание: 

// Картинка с разрешением 200 на 200 пикселей (url)
// Заголовок h2 с описанием фотографии (title)

// Позиционирование элементов может быть произвольной. Перед созданием внимательно ознакомьтесь с 
// полученными данными, после уже формируйте процесс по созданию элементов.

// Примечание: после получения данных вызовите подготовленную функцию render() для реализации разметки 



let photosContainer = document.querySelector('.photos_container');

function getUsers() {
  let url = `https://jsonplaceholder.typicode.com/photos`;

  fetch(url)
    .then((res) => res.json())
    .then(json => {
        console.log(json)
        render(json)
    })
    .catch(error => console.error('Error fetching data:', error));
}

function render(array) {
    
  photosContainer.innerHTML = '';
  
  for (let elem of array) {
    if (elem.albumId === 35) {
      let photoCard = document.createElement('div');
      photoCard.className = 'photo_card';

      let photoTitle = document.createElement('h2');
      photoTitle.innerText = elem.title;

      let photoThumbnailUrl = document.createElement('img');
      photoThumbnailUrl.src = elem.thumbnailUrl;
      photoThumbnailUrl.alt = elem.thumbnailUrl;

      photoCard.append(photoTitle, photoThumbnailUrl);
      photosContainer.append(photoCard);
      
    }
      
  }
}

getUsers()


