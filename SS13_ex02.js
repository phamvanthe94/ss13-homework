// let number = [2, 4, 6, 8];
// while (true) {
//   let guess = Number(prompt(`Xin hãy nhập số :`));
//   if (number.includes(guess)) {
//     //number.includes(guess)
//     // .includes() là một phương thức (hàm có sẵn) của mảng trong JavaScript.

//     // Nó kiểm tra xem giá trị guess có tồn tại trong mảng number hay không.

//     // Trả về:

//     // true nếu có

//     // false nếu không có
//     //
//     alert(`Bingo`);
//     break;
//   } else {
//     alert(` Chúc bạn may mắn lần sau!`);
//   }
// }

let friends = ["lan", "mai", "an", "bình"];
while (true) {
  let guess = prompt(` Hãy nhập tên người bạn của bạn :`)
    .trim()
    .toLocaleLowerCase();

  if (friends.includes(guess)) {
    alert(` Bạn là người bạn tốt!`);
    break;
  } else {
    alert(` Bạn là người bạn tồi !`);
  }
}
