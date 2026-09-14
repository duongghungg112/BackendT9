//Bài 1: 
//cho mảng a và b
const a = ["A", "B", "C"];
const b = [1, 2, 3];

const c = a.map((item, index) => {
    return {
        value: item + b[index],
        id: b[index]
    }
})
console.log(c);


/**
 * Bài 2: cho mảng users sau
 * const users = [
  {
    id: 1,
    name: "A",
    gender: "nam",
  },
  {
    id: 2,
    name: "B",
    gender: "nữ",
  },
  {
    id: 3,
    name: "C",
    gender: "nam",
  },
  {
    id: 4,
    name: "D",
    gender: "nam",
  },
];

hãy tạo ra mảng mới newUsers
   const newUsers = [
      {human:"A1",gender:"nam"},
      {human:"C3",gender:"nam"},
      {human:"D4",gender:"nam"}
   ]
 */
const users = [
    {
        id: 1,
        name: "A",
        gender: "nam",
    },
    {
        id: 2,
        name: "B",
        gender: "nữ",
    },
    {
        id: 3,
        name: "C",
        gender: "nam",
    },
    {
        id: 4,
        name: "D",
        gender: "nam",
    },
];
const maleUsers = users.filter(user => user.gender === "nam");
console.log(maleUsers);
const newUsers = maleUsers.map(user => {
    return {
        human: user.name + user.id,
        gender: user.gender
    }
})
console.log(newUsers);


/**
 * Bài 3: const number = [2, -5, 6, -7, -4, 7, -1, -1];
        a: tính trung bình cộng số âm
        b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
        c: tìm số âm lớn nhất trong mảng
 */
const number = [2, -5, 6, -7, -4, 7, -1, -1];
const minusNumber = number.filter(number => number < 0);
const totalNumber = minusNumber.reduce((sum, x) => sum + x, 0);
const avgMinusNumber = totalNumber / minusNumber.length;

const greaterAvgNumber = minusNumber.filter(number => number > avgMinusNumber);
console.log(greaterAvgNumber);

const maxMinusNumber = minusNumber.reduce((max, current) => {
    if (current > max) {
        max = current;
    }
    return max

})
console.log("so am lon nhat trong mang la", maxMinusNumber);

/**
 *  Bài 4: Loại bỏ các phần tử trùng lặp trong mảng let numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3]; tìm hiểu includes hoặc indexOF hoặc ko dùng 2 hàm đó
 */
let numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3];
const newNumbers = numbers.filter((number, index) => {
    return numbers.indexOf(number) === index;
})
console.log("Mang khong con trung lap la ", newNumbers);

/**
 * Bài 5: Viết 1 hàm nhận vào 1 mảng và 1 số nguyên dương n
 * sau đó trả về mảng mới chứa các mảng con có kích thước n.
 * let mangSo = [1,2,3,4,5,6,7,8,9]
 * kích thước n = 3
 * viết 1 hàm tachMangCao(mangSo,3)
 * kết quả: [[1,2,3],[4,5,6],[7,8,9]]
 */
function tachMangCao(mang, n) {
    let ketqua = [];
    for (let i = 0; i < mang.length; i += n) {
        let mangCon = mang.slice(i, i + n);
        ketqua.push(mangCon);
    }
    console.log("Mang sau khi tach la ", ketqua);
    return ketqua

}
tachMangCao([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);


/**
 * Bài 6: đếm số lượng phần tử trong mảng
 * const lang = ["php","js","c++","java","php","js","php"]
 * output
 *  {
 *    php:3,
 *    js:2,
 *    java:1,
 *    c++:1
 *  }
 */
const lang = ["php", "js", "c++", "java", "php", "js", "php"]
const resultBai6 = lang.reduce((count, language) => {
    if (count[language] === undefined) {
        count[language] = 0;
    }
    count[language] += 1;
    return count
}, {});
console.log(resultBai6);



/**
 *  Bài 7: Lấy tên từ danh sách user
 * [
    {name: "An", age: 20},
    {name: "Bình", age: 25}
   ]
    → ["An", "Bình"]
 */
const user = [
    { name: "An", age: 20 },
    { name: "Bình", age: 25 }
]
const userName = user.map(user => user.name)
console.log(userName);

/**
 *  Bài 8: Tìm số âm đầu tiên
 * [5, 2, -3, -8] -> -3
 */
const number_8 = [5, 2, -3, -8]
const firstMinusNumber = number_8.find((number) => number < 0)
console.log("Số âm đầu tiên của mảng là: ", firstMinusNumber);

/**
 * Bài 9: const orders = [
  { id: 1, user: "An", total: 200 },
  { id: 2, user: "Bình", total: 500 },
  { id: 3, user: "An", total: 300 }
];

- Tính tổng tiền mỗi user
    Kết quả: {
                An: 500,
                Bình: 500
              }

- Tìm user chi nhiều tiền nhất
- Tính tổng toàn bộ orders của user "An"
 */
const orders = [
    { id: 1, user: "An", total: 200 },
    { id: 2, user: "Bình", total: 500 },
    { id: 3, user: "An", total: 300 }
];
const totalByUser = orders.reduce((result, order) => {

    if (result[order.user] === undefined) {
        result[order.user] = 0;
    }

    result[order.user] = result[order.user] + order.total;

    return result;

}, {});

console.log(totalByUser);

const users_9 = Object.keys(totalByUser);
const maxUser = users.reduce((max, current) => {
    if (totalByUser[current] > totalByUser[max]) {
        max = current;
    }
    return max
})
console.log("User co so tien cao nhat la: ", maxUser);

const ordersOfAn = orders.filter(order => order.user === "An");
const totalOfAn = ordersOfAn.reduce((sum, order) => {
    return sum + order.total;
}, 0);
console.log(totalOfAn);

/**
 * Bài 10: const sales = [
  { user: "An", product: "Áo", price: 100, qty: 2 },
  { user: "Bình", product: "Giày", price: 300, qty: 1 },
  { user: "An", product: "Quần", price: 200, qty: 1 },
  { user: "Chi", product: "Áo", price: 100, qty: 5 }
];
- Lấy danh sách sản phẩm không trùng => ["Áo", "Giày", "Quần"]
- Tính tổng số lượng bán ra của từng sản phẩm
kết quả:
        {
            Áo: 7,
            Giày: 1,
            Quần: 1
        }
- Lọc các đơn hàng có tổng tiền > 200 -> lấy tên user
 */


// Bài 11: Tìm sản phẩm đắt nhất
// const products = [
//     { name: "A", price: 100 },
//     { name: "B", price: 300 },
//     { name: "C", price: 200 }
// ];


/**
 * 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến
  số đó.
  Input: 20
  Output: 19
  Input: 15
  Output: 13
 */
function kiemTraSoNT(number) {
    if (number < 2) {
        return false
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true;
}

function timSoNguyenToLonNhat(number) {
    for (let i = number; i >= 2; i--) {
        if (kiemTraSoNT(i)) {
            return i;
        }
    }
}

console.log(timSoNguyenToLonNhat(20));
/**
 * Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
  Input: 10
  Output: (3, 7)
  Input: 20
  Output: (3, 17), (7, 13)
 */
function timCapSoNguyenTo(n) {
    let result = [];
    for (let a = 2; a <= n / 2; a++) {
        let b = n - a;
        if (kiemTraSoNT(a) && kiemTraSoNT(b)) {
            result.push([a, b])
        }
    }
    return result
}
console.log(timCapSoNguyenTo(10));

/**
 * Bài 3: Cho một mảng nums gồm các số nguyên, hãy trả về số lượng các số trong mảng đó có số chữ số chẵn.
 *
  Đầu vào: nums = [12,345,2,6,7896]
  Đầu ra: 2
  Giải thích:
    12 có 2 chữ số (số chữ số chẵn).
    345 có 3 chữ số (số chữ số lẻ).
    2 có 1 chữ số (số chữ số lẻ).
    6 có 1 chữ số (số chữ số lẻ).
    7896 có 4 chữ số (số chữ số chẵn).
    Do đó, chỉ có 12 và 7896 có số chữ số chẵn.
 */
const nums = [12, 345, 2, 6, 7896];
let count = 0;
for (let i = 0; i < nums.length; i++) {
    let numberString = nums[i].toString();
    if (numberString.length % 2 === 0){
        count++
    }
}
console.log(count);

/**
 * Bài 4: cho mảng number: const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
và ngược lại lấy số lẻ cho vào mảng oddNumbers
 */
const arrNumber = [
    1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23
];

const evenNumbers = arrNumber.filter(number => number % 2 === 0);

const oddNumbers = arrNumber.filter(number => number % 2 !== 0);

console.log("Mang chan: ", evenNumbers);
console.log("Mang le: ", oddNumbers);