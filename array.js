// Viết một chương trình quản lý danh sách sản phẩm với các chức năng: 
// - Thêm sản phẩm mới vào danh sách. 
// - Hiển thị danh sách sản phẩm. 
// - Tìm kiếm sản phẩm theo tên. 
// - Tính tổng giá trị các sản phẩm.
let products = [
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 400 }
];
// 1. Thêm sản phẩm mới
function addProduct(name, price) {
    const newProduct = {
        name: name,
        price: price
    };
    products.push(newProduct);
    console.log(`Đã thêm sản phẩm: ${name}`);
}
addProduct("Macbook", 200);

// 2 Hiển thị danh sách sản phẩm

function showProduct() {
    console.log("Danh sách sản phẩm đã cho là");
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} có giá: ${product.price}`)
    })
}
showProduct();

// 3. Tìm kiếm sản phẩm theo tên
function findProduct(keyword) {
    const result = products.filter(product => {
        const productName = product.name.toLowerCase();
        const searchKeyword = keyword.toLowerCase();
        return productName.includes(searchKeyword);

    })
    if (result.length === 0) {
        console.log("Không tìm thấy sản phẩm.")
    } else {
        console.log("Tồn tại sản phẩm: ", result);
    }
}
findProduct("ipad")

// 4. Tính tổng giá trị các sản phẩm
function totalPrice() {
    const total = products.reduce((sum, product) => {
        return sum + product.price;
    }, 0)
    console.log(`Tổng giá trị sản phẩm: ${total}`);
    return total;
}

totalPrice();
// Bài 1: Đếm số user đang hoạt động;
const users = [
    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true }
];

let activeUser = users.filter(x => x.active === true);
let activeUsername = activeUser.map(x => x.name);
document.getElementById("activeUser").innerText = activeUser.length;
document.getElementById("activeUsername").innerText = activeUsername
console.log(activeUser.length);


// Bài 2: Lấy tên từ danh sách user 

const users2 = [
    { name: "An", age: 20 },
    { name: "Bình", age: 25 }
]
let user2Name = users2.map(x => x.name);
document.getElementById("user2Name").innerText = user2Name
console.log(user2Name)



//   Bài 3: 
//         a: tính trung bình cộng số âm
//         b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
//         c: tìm số âm lớn nhất trong mảng
const number = [2, -5, 6, -7, -4, 7, -1, -1];
const minusNumber = number.filter(x => x < 0);
const sumMinusNumber = minusNumber.reduce((sum, x) => sum + x, 0);
const avgMinusNumber = sumMinusNumber / minusNumber.length;
document.getElementById("minusNumber").innerText = minusNumber;
document.getElementById("avgMinusNumber").innerText = avgMinusNumber;
const greaterAvgNumber = minusNumber.filter(x => x > avgMinusNumber);
document.getElementById("greaterAvgNumber").innerText = greaterAvgNumber;
console.log(minusNumber);
console.log(sumMinusNumber);
console.log(avgMinusNumber);
console.log(greaterAvgNumber);

const minusNumberSort = minusNumber.sort();
document.getElementById("maxMinusNumber").innerText = minusNumberSort[0]
console.log(minusNumberSort[0]);

// Bài 4: Đếm số đơn hàng theo trạng thái
// const orders = [
//     { status: "pending" },
//     { status: "completed" },
//     { status: "pending" },
//     { status: "cancelled" }
// ];
// kết quả: {
//     pending: 2,
//     completed: 1,
//     cancelled: 1
// }
const orders = [
    { status: "pending" },
    { status: "completed" },
    { status: "pending" },
    { status: "cancelled" }
];

const pending = orders.filter(x => x.status === "pending").length;
const completed = orders.filter(x => x.status === "completed").length;
const cancelled = orders.filter(x => x.status === "cancelled").length;
console.log('pending: ', pending);
console.log('completed: ', completed);
console.log('cancelled: ', cancelled);

// Bài 5: Tìm đơn hàng có giá trị cao nhất

// const orders = [
//     { id: 1, total: 500 },
//     { id: 2, total: 1200 },
//     { id: 3, total: 800 }
// ];
// Kết quả: { id: 2, total: 1200 }
const orders5 = [
    { id: 1, total: 500 },
    { id: 2, total: 1200 },
    { id: 3, total: 800 }
];

const highestOrder = orders5.reduce((maxOder, currentOrder) => {
    if (currentOrder.total > maxOder.total) {
        return currentOrder;
    }
    return maxOder;
})
document.getElementById("highestOrder").innerText = `Đơn ${highestOrder.id} - ${highestOrder.total}`;
console.log(highestOrder);

/**
 * Bài 6: const sales = [
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
const sales = [
    { user: "An", product: "Áo", price: 100, qty: 2 },
    { user: "Bình", product: "Giày", price: 300, qty: 1 },
    { user: "An", product: "Quần", price: 200, qty: 1 },
    { user: "Chi", product: "Áo", price: 100, qty: 5 }
];

const productNames_6 = sales.map(sale => sale.product);
const uniqueProducts = productNames_6.filter((product, index) => {
    return productNames_6.indexOf(product) === index;
});
console.log(uniqueProducts);


const quantityByProduct = sales.reduce((result, sale) => {
    const productofName = sale.product;
    const quantity = sale.qty;
    if (result[productofName] === undefined) {
        result[productofName] = 0;
    }
    result[productofName] = result[productofName] + quantity;

    return result;

}, {});
console.log(quantityByProduct);


// Lọc các đơn hàng có tổng tiền > 200 -> lấy tên user

const orderGreater200 = sales.filter((sale) =>{
    const totalMoney = sale.price * sale.qty;

    if(totalMoney > 200 ){
        return true;
    }else{
        return false;
    }
});
console.log(orderGreater200);