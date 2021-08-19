

// console.time();
// console.log('hello');
// console.timeLog();
// // slowTask();
// console.log('ara1')
// console.timeLog();
// // slowTask();
// console.log('son')
// console.timeEnd();




// // console.log('hello1');
// // // alert('mic');
// // setTimeout(() => {
// //     // alert('mic');
// //     // confirm('Microfon aktive edilsin mi?')
// //     // console.log('Hello from setTimeout')
// //     slowTask();
// // }, 0);
// // console.log('hello2');
// // console.log('hello3');

// // //yavaslatan bir gecikme olusturdum
// function slowTask(){
//    let i = 0;
//    do {
//        i++;
//    } while (i<1_000_000_000);
        
//     }

// //=>>>>belli bir yerden sonra süreyi durdurma ve bir mesaj yazdirma!!!!
// let counter = 0;
// function showTime(){
//     const timeLabel = document.querySelector("p");
//     const time = new Date;
//     timeLabel.innerHTML = time.toLocaleTimeString();
//     counter++;
//     if(counter == 5){
//         timeLabel.innerHTML = 'Merhaba';
//         clearInterval(id);
//     }
// }
// const id = setInterval(showTime,1000);


// //=>>>>her saniye saati güncelleme
// // function showTime(){
    
// //     const timeLabel = document.querySelector("p");
// //     const time = new Date;
// //     timeLabel.innerHTML = time.toLocaleTimeString();
// // }
// // setInterval(showTime,1000);

//====>>>>Promise
//fetch ile bir serverdan veri cekiyoruz....

// fetch('https://dmitripavlutin.com/timeout-fetch-request/')
//     .then(response => response.json())
//     .then(data => console.log(data))




const myPromise = new Promise((resolve,reject)=>{
    console.log('myPromise started');
    // let condition = false;
    let condition = true;
    if(condition){

        resolve('islem tamam');
    }
    reject(Error('gerceklesmedi'))
});
console.log('merhaba')
myPromise
.then((msg)=>{
    console.log(msg);
})
.catch((msg)=>{
    console.log(msg)
});
console.log('gülü gülü')