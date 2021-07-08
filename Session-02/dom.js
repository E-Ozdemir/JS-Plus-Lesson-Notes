// DOM >>>> js'le html üzerinde degisim yapabilmemize yariyor.
//kardesler siblings
//node :dügüm demektir.>>>bu yapiyla birbirine her element baglidir.

// ---------------->>>>document.getElementBy...

const myDom = document.getElementById('dom');
console.log(myDom); 

const instructor = document.getElementById('info');
console.log(instructor);

const ins = document.getElementById('instructor'); 
//nodun tamami dönüyor sadece icindegi deger degil!!!
console.log(ins);

//Classname

const withClassName=document.getElementsByClassName('class-info');
console.log(withClassName);
console.log(withClassName[1]);//indexleme

//------- TagName()

const cw = document.getElementsByTagName('h3');
console.log(cw);

//Query Sellector
//css de kullandigimiz yontemler kullanabiliyor.# yada . ile class yada id kullanabiliyoruz.

// const instt = document.querySelector('.class-info');
// console.log(instt);


const inst = document.querySelectorAll('.class-info'); // all yazarsak array döner!!!
console.log(inst);


// console.log(document.querySelector('#instructor'));

// console.log(document.querySelectorAll('h3')[1]);

// console.log(document.querySelector('.class-info h3'));
// console.log(document.querySelector('div h3'));
// console.log(document.querySelector('div h3'));


//-------------Manupilation

// const brands = document.querySelector('#brands');
// console.log(brands);
// // brands.innerHTML +='<li>NioyaTech</li>';

// brands.innerHTML = brands.innerHTML + '<li class="brand">NioyaTech</li>';


// const classBrands = document.querySelector('.brand');

// // console.log(classBrands[3].innerText);

// const copyRight = document.querySelector('footer p');

// console.log(copyRight);
// copyRight.innerText ='<h1>&copy; 2020 clarusway.com</h1>';
// copyRight.innerHTML ='<h1>&copy; 2020 clarusway.com</h1>';//yazdigimizi derleyecek html nin icine yazmisiz gibi. child olarak ekliyor.

//challenge-----
const lessonList = [
    { id: 1, name: 'HTML' },
    { id: 1, name: 'CSS' },
    { id: 1, name: 'JS' },
    { id: 1, name: 'REACT' },
  ];

const lessonElm = document.getElementById('lessons');
lessonList.forEach((element) =>{
    lessonElm.innerHTML += `<li class="lesson-item"> ${element.name}</li>`;
})

//--------------------------

//------------setAttribute  && getAttribute

const mdn = document.querySelector('#mdn');
const mdnHrefAttr = mdn.getAttribute('href');
console.log(mdnHrefAttr);

mdn.setAttribute('href','https://www.w3schools.com/');//href baglantisina farkli bir link verdik
mdn.innerHTML ='W3Schools'; //ismi degistirdik


//chellange-------------
const insElm = document.querySelectorAll('#instructors li');
console.log(insElm);

insElm.forEach((item) => {
    console.log(item.innerText.includes('FrontEnd'));
    if (item.innerText.includes('FrontEnd')) {
      item.setAttribute('class', 'front-end');
    } else if (item.innerText.includes('BackEnd')) {
      item.setAttribute('class', 'back-end');
    }
  });

  const jsPrg = document.querySelector("#js-prg")
  console.log(jsPrg);
// bu stilize yöntemi önerilmiyor, bunlari css le yapmamiz öneriliyor!
//   jsPrg.style.color = 'green';
//   jsPrg.style.backgroundColor = 'white';
//   jsPrg.style.fontSize = '3rem';
//   jsPrg.style.margin = '10px';

//class degisimi

// const cwBanner = document.getElementById('cwBanner');
// // console.log(cwBanner.classList);
// cwBanner.classList.add('imp');
// cwBanner.classList.remove('banner');
//--------------

const cwQuote = document.querySelector('#quote-div');

cwElm = document.createElement('h2');
cwElm.innerText ='Clarusway';
cwQuote.appendChild(cwElm);