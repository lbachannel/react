/**
 *  -- Lý thuyết
 *  Arrow function:  => { }
 *                   arrow: là mũi tên =>
 *                   function: hàm
 * 
 *  Mục đích sử dụng: giúp code ngắn gọn hơn.
 * 
 *  Lưu ý:
 *      => { } : ngầm hiểu là 1 khối code. nếu return thì phải ghi rõ.
 *      =>     : mặc định là return
 */

/*--Decoration function--*/
function logger(log) {
    console.log(log);
}

/*--Expression function--*/
const logger_1 = function (log) {
    console.log(log);
}

/*--Arrow function: Simple--*/
const logger_2 = (log) => {
    console.log(log)
}

/*--Arrow function: Shorthand--*/
const logger_3 = log => console.log(log);

// -- Output:
logger_2('Syntax simple');
logger_3('Syntax shorthand');

/*--Arrow function: return sum a & b (simple)--*/
const sum_1 = (a, b) => {
    return a + b;
}
console.log(sum_1(2, 2));

/*--Arrow function: return sum a & b (Shorthand)--*/
const sum_2 = (a, b) => a + b;
console.log(sum_2(3, 7));

/*--Arrow function: return object (Simple)--*/
const object = (a, b) => {
    return {
        name: a,
        age: b
    }
}
console.log(object('An', 25));

/*--Arrow function: return object (Shorthand)--*/
const sum_3 = (a, b) => ({ a: a, b: b }); // using () when we wanna return an object
console.log("Object: ", sum_3(3, 7));


/**
 * 
 * Exercise: arrow function
 * 
 * Requirement:
 *      create function triple with x parameter and return x * 3
 *  
 *      Expected results:
 *      Input                                   Output
 *      console.log(triple(2))                  6
 *      console.log(triple(3))                  9
 *      console.log(triple(5))                  15
 */

const triple = x => x * 3;
