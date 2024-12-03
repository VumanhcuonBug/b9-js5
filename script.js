// var ads = document.getElementById("ads");
// const hide = () => {
//     setTimeout(() => {
//         var ads = document.getElementById("ads");
//         ads.style.display = 'none';
//     }, 4000);
// }

// hide();



// function fadeOut() {
//     var notification = document.getElementById("ads");
//   var opacity = 1;
//   var timer = setInterval(function() {
//     if (opacity <= 0) {
//       clearInterval(timer);//de dung viec lap di lap lai sau 1 khoang thoi gian cua setinterval()
//       notification.style.display = "none";
//     }
//     notification.style.opacity = opacity;
//     opacity -= 0.1;
//   }, 100); // Làm mờ thông báo trong 1 giây
// }

// setTimeout(fadeOut, 3000); // Sau 3 giây ẩn thông báo


// const opa = () => {
//     var ads = document.getElementById("ads");
//     var opacity = 1;
//     var time = setInterval(() => {
//         if(opacity <= 0){
//             clearInterval(time);//time la gia tri id tra ve tu setInterval();
//             ads.style.display = 'none';
//         }
//         ads.style.opacity = opacity;
//         opacity -= 0.1;
//     }, 100)
// }

// setTimeout(opa, 3000)//dong lai sau 3 giay

// var element = document.getElementById("element");
// element.innerHTML = "Nội dung mới";

// var title = document.getElementsByClassName("title");
// const change = () => {
//     for (const element of title) {
//         element.style.color = "blue";
//     }
// }

// change();


// var body = document.getElementsByTagName("body")[0];
// setTimeout(() => {
//     //tagname tra ve mot danh sach
//     body.style.backgroundColor = "red";
// }, 3000);

// setTimeout(() => {
//     document.getElementsByTagName("body")[0].style.background = "#FECF73";
//   }, 3000);
  

// var button = document.getElementById("button");
// setTimeout(() => {
//     button.style.width = "200px";
//     button.style.height = "300px";
//     button.style.backgroundColor = "red";
// }, 5000);