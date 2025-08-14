let arr = [];
// B1: Tạo mảng arr rỗng
let length = Math.round(Math.random() * 11 + 10); // Math.round : làm tròn giá trị gần nhất
// B2 :  Tạo random chuỗi số ngẫu nhiên từ 10- 20 số  // Math.random : cho ra số ngẫu nhiên từ 0-0.999
for (let i = 0; i < length; i++) {
  arr.push(Math.round(Math.random() * 101));
  console.log(arr[i]);
}
// B3: Tạo vòng lặp thêm vào mảng các phần tử ngẫu nhiên từ 0 -100
// In ra mảng mới tạo

let evenSum = 0;
let oddSum = 0;
//  B4: Dùng quy hợp thầy dạy ,  gắn tổng số chắn và số lẻ = 0

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenSum = evenSum + arr[i];
  } else oddSum = oddSum + arr[i];
}
// B5: Tạo vòng lặp tính tổng sô chẵn và số lẻ có trong mảng

console.log(` Tổng số chẵn trong dãy số là : ${evenSum}`);
console.log(` Tổng số lẻ trong dãy số là : ${oddSum}`);
// B6 : In ra màn hình cosole tổng số chẵn  và số lẻ trong dãy số
