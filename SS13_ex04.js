while (true) {
  let input = prompt(`Xin hãy nhập vào dãy số bạn thích : `);
  if (isNaN(Number(input))) {
    alert(` Bạn nhập vào không phải là số! Xin hãy nhập lại !!`);
  } else {
    let arr = input.split(``);
    let max = Number(arr[0]);

    for (
      let i = 1; // i = 1 --> Bắt đầu duyệt từ phần tử thứ 2 trong mảng arr
      i < arr.length; // --> tạo vòng lặp chạy tới phần tử cuối cùng trong mảng arr.length
      i++ // --> Bước nhảy 1
    )
      if (max < Number(arr[i])) {
        // Trong trường hợp số max < số được duyệt trong chuỗi
        max = Number(arr[i]); // thì  ta gắn số lớn nhất là phần tử được duyệt trong chuỗi -> chuyển phần tử sang dạng số
      }

    //B4 : in ra màn hình giá trị lớn nhất
    alert(` Giá trị lớn nhất bạn nhập vào là ${max}`);
    break;
  }
}
