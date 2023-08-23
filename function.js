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

// ECMA5 스크립트 : 모든 함수가 length와 prototype 프로퍼티를 가져야 한다.