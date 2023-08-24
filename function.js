/**
 * 생성방법
 * 함수 선언문, 함수 표현식, Function() 생성자 함수
 */

/**
 *  1. 함수 선언문(리터럴)을 통한 정의
 */
function add(x, y) {
    return x + y;
}

/**
 *  2. 함수 표현식       기명함수표현, 익명함수표현
 */
var add = function(x, y) {  // add 는 익명함수를 가르킴  function은 외부에선 사용X 내부에서만 재귀의용도로 사용가능
    return x + y;
};
var plus = add;
console.log(add(1,3));
console.log(plus(1,3));

/**
 *  3. Function() 생성자 함수
 */
var add = new Function('x', 'y', 'return x + y');
console.log(add(3, 4));

/**
 * 함수 호이스팅 (Hoisting)
 * 호이스팅때문에 함수 표현식을 권장한다
 */
console.log(f(2, 3));
function f(x, y) {
    return x + y;
}
console.log(f(3, 4));
// 함수 호이스팅 : 함수 선언문으로 만든 함수의 경우 정의되기 이전에서도 호출이 가능.
// 구조가 엉성해 질 수 있기에 함수 표현식 사용을 권장.

/**
 * 함수도 객체.
 */
f.result = f(3, 4);
f.status = 'OK';
// 함수도 객체로 취급. 프로퍼티를 선언할 수 있다.

/**
 * 함수는 값으로 취급
 * => 리터럴에 의해 생성
 * => 함수의 인자로 전달 가능
 * => 변수, 배열, 객체 등에 할당 가능
 * => 리턴값으로 리턴 가능
 * => 동적으로 프로퍼티 생성 및 할당 가능
 * ===>>> 자바스크립트의 함수는 일급(First Class)객체; 위의 기능 모두 가능 -> 함수형프로그래밍가능
 */

/**
 * 변수, 프로퍼티의 값으로 할당
 */
// 변수
var foo = 100;
var bar = function() {return 100;};
console.log(bar());
// result : 100

// 프로퍼티 함수 할당
var obj = {};
obj.baz = function () {return 200; };
console.log(obj.baz());
// result : 200

/**
 * 함수 인자로 전달
 */
var foo = function(func) {
    func();
};

foo(function() {
    console.log('Function can be used as the argument.');
});
// result : Function can be used as the argument.
// foo함수 실행시킬때 익명함수를 인자로 넘김.

/**
 * 리턴값으로 활용
 */
var foo = function() {
    return function() {
        console.log('This function is the return value.');
    };
};
var bar = foo();
bar();
// result : This function is the return value.

function add(x, y) {
    return x + y;
}

console.dir(add);

// dir 크롬에 띄었을때, 프로퍼티 확인가능
// ECMA5 스크립트 : 모든 함수가 length와 prototype 프로퍼티를 가져야 한다.
// name : 함수이름
// caller : 자신을 호출한 함수
// arguments : 전달된 인자값
// __proto__ : 모든 자바 스크립트 객체는 자신의 프로퍼티를 가르키는 [[Prototype]] 이라는 내부 프로퍼티를 갖는다.
//              내부 프로퍼티는 __proto__로 구현되어있다.
//              부모역할을 하는 프로토타입 객체 : "Function.prototype 객체"  라고 명명.
//              이것 역시 함수 객체
//              constructor프로퍼티, toString(), apply(), call(), bind()메서드 갖고있음.

/**
 * length 프로퍼티
 * 함수의 인자갯수가 length 프로퍼티로 지정됨.
 */
function func0() {
    
}
function func1(x) {
    return x;
}
function func2(x, y) {
    return x + y;
}
function func3(x, y, z) {
    return x + y + z;
}
console.log('func0.length = ' + func0.length);
console.log('func1.length = ' + func1.length);
console.log('func2.length = ' + func2.length);
console.log('func3.length = ' + func3.length);
/* == result ==
func0.length = 0
func1.length = 1
func2.length = 2
func3.length = 3
*/
