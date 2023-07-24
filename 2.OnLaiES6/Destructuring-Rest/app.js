// Destructuring: phân rã
// Rest parameters: toán tử rest (lấy ra những phần còn lại)
var array = ['Java', 'PHP', 'NodeJs'];

// hãy tạo 3 biến a, b, c  và lưu lần lượt các elements của array này vào rồi xuất ra
// -- Solution 1: cách thông thường
var a = array[0];
var b = array[1];
var c = array[2];

console.log("cách thông thường: ", a, b, c);

// -- Solution 2: sử dụng destructuring 
var [a, , c] = array; // chỉ in Java và NodeJs
console.log("sử dụng destructuring: ", a, c);

// -- Solution 3: sử dụng Rest
var [a, ...rest] = array;
console.log(a);
console.log("sử dụng Rest: ", rest);

// Destructuring với Object
var course = {
    name: 'Java',
    price: 1000
};

