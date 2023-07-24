// Enhanced object literals
// 1. Định nghĩa key: value cho object

var name = 'Javascript';
var price = 1000;

// cách viết thường
var course = {
    name: name,
    price: price
};
console.log("Định nghĩa key: value cho object: (viết thông thường)", course);

// sử dụng Enhanced object literals
var course1 = {
    name,
    price
}
console.log("Định nghĩa key: value cho object: (sử dụng Enhanced object literals)", course1);

// 2. Định nghĩa method cho object
var course3 = {
    name,
    price,
    getName() {
        return this.name;
    }
};
console.log("Định nghĩa method cho object: ", course3.getName());

// 3. Định nghĩa key cho object dưới dạng biến
var fieldName = 'name';
var fieldPrice = 'price';

const course4 = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}
console.log("Định nghĩa key cho object dưới dạng biến: ", course4)

// Thực hành sử dụng Enhanced Object Literals
// -- Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.
// -- Gợi ý: Sử dụng phương thức reduce

/* solution
 *  phương thức reduce: để chuyển đổi mảng này thành một đối tượng.
 *  có hai tham số: obj và item
 *      obj là đối tượng ban đầu (trống)
 *      item là phần tử hiện tại đang được xem xét trong quá trình duyệt qua mảng.
 *  Trong mỗi vòng lặp, chúng ta sử dụng cú pháp ...obj để tạo ra một bản sao của đối tượng hiện tại obj
 *  Điều này đảm bảo rằng các cặp key-value đã được xử lý trước đó vẫn được giữ nguyên trong đối tượng mới.
 *  [item[0]]: item[1] để tạo một cặp key-value mới trong đối tượng.
 *  item[0] là phần tử đầu tiên trong mảng item, được sử dụng làm key. 
 *  item[1] là phần tử thứ hai trong mảng item, được sử dụng làm value.
 * 
 *  Ví dụ: Nếu mảng đầu vào là [[1, 'John'], [2, 'Jane'], [3, 'Bob']],
 *         thì sau khi thực hiện hàm arrToObj, 
 *         đối tượng kết quả sẽ là 
 *          { 1: 'John', 2: 'Jane', 3: 'Bob' }. 
 *  Mỗi cặp [key, value] trong mảng đã được chuyển thành một cặp key-value trong đối tượng, 
 *  trong đó key là phần tử đầu tiên trong mảng và value là phần tử thứ hai trong mảng.
 */
function arrToObj(arr) {
    return arr.reduce((obj, item) => {
        return { ...obj, [item[0]]: item[1] };
    }, {});
}
const infoObj = arrToObj([
    ['name', 'Son Dang'],
    ['age', 21],
    ['address', 'Ha Noi']
])
console.log("Output: ", infoObj);
// Expected results:
/**
const obj1 = arrToObj([
   ['name', 'Son Dang'], 
   ['age', 21], 
   ['address', 'Ha Noi']
])
console.log(obj1)
Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

const obj2 = arrToObj([
   ['name', 'Duc Long'], 
   ['age', 18], 
   ['address', 'Ha Noi']
])
console.log(obj2)
Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
*/