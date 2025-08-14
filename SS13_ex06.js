// B1 : Khai báo mảng
let arr = [];
// B2 : Khai báo mảng số nguyên có sẵn các phần tử từ 10-20 phần từ
let length = Math.floor(Math.random() * 11 + 10);
// B3 : Tạo vòng lặp for để thêm các số nguyên ngẫu nhiên vào mảng array
for (let i = 0; i < length; i++) {
  arr.push(Math.floor(Math.random() * 21 - 10));
}
// B4: In ra mảng arr
console.log(arr);
// B5: Tạo biến đếm count

while (true) {
  // B6: Tạo prompt cho người dùng nhập vào số nguyên cần kiểm tra
  let k = Number(prompt(` Hãy nhập vào số nguyên cần kiểm tra :`));

  // B7: Gán điều kiện nếu k không phải là số thì mời nhập lại
  if (isNaN(k)) {
    alert(` Bạn nhập vào không phải là số ! Hãy nhập lại`);
    continue;
  } else {
    // B8 : Trong trường hợp người dùng nhập chuẩn rồi thì tạo vòng lặp
    // for để duyệt các phần tử có trong mảng , mỗi lần k xuất hiện thì count + 1

    let count = 0;

    for (let i = 0; i < length; i++) {
      if (arr[i] === k) {
        count++;
      }
    }
    // B9: In ra màn hình console tổng số lần xuất hiện
    alert(
      ` Tổng số lần xuất hiện số nguyên của bạn trong dãy số là : ${count}`
    );
    break;
  }
}
