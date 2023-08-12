
// 기본 타입

// 숫자
var intNum = 10;
var floatNum = 0.1;

// 문자열      // char 타입이 없다
var singleQuoteStr = 'single quote string';
var doubleQuoteStr = "double quote string";
var singleChar = 'a';

// 불린
var boolVar = true;

// undefined
var emptyVar;

// null     // typeof nullvar = object 가 나옴
var nullVar = null;

console.log(
    typeof intNum,
    typeof floatNum,
    typeof singleQuoteStr,
    typeof doubleQuoteStr,
    typeof boolVar,
    typeof nullVar,
    typeof emptyVar
);

// result : number number string string boolean object undefined

/**
 *
 * 참조 타입(객체 타입)
 *
 **/

// Hash 자료구조와 유사

// 객체 생성 1 ; Object 생성자 함수 이용
var tae = new Object();
tae.name = 'tae';
tae.age = 31;
tae.gender = 'male';

console.log(typeof tae, tae);
// result => object { name: 'tae', age: 31, gender: 'male' }

// 객체 생성 2 ; 객체 리터럴 방식 객체 생성
var hee = {
    name : 'hee',
    age : 30,
    gender : 'male'
};

console.log(typeof hee, hee);
// result => object { name: 'hee', age: 30, gender: 'male' }


// 객체 생성 3 ; 생성자 함수 이용


// 객체 프로퍼티 읽기/쓰기/갱신
var tete = {
    name : 'hee',
    age : 30,
    gender : 'male'
};

console.log(
    tete.name,
    tete['name'],
    tete.undefined
);

// result => hee hee undefined

tete['full-name'] = 'tete-kim';
// tete.full-name = 'tete-kim'; 이건 안된다
console.log(
    tete['full-name'],
    // tete.full-name          // 이거도 안됨
);

// for in 문
for (x in tae) {
    console.log(x, tete[x])
}
// result => name hee
//          age 30
//          gender male

// 이러한 객체들은 prototype 객체를 상속받는다.
// toString 같은 것들이 있다


/**
 *
 *  배열
 *
 */

/**
 * 배열 리터럴
 */
var colorArr = ['orange', 'yellow', 'blue', 'red'];;
console.log(
    colorArr[0],
    colorArr[1],
    colorArr[3]
);
// result => orange yellow red

/**
 * 배열 요소 생성
 */
var emptyArr = [];
console.log(emptyArr);
// 배열 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'three';
emptyArr[7] = true;
console.log(emptyArr, emptyArr.length);
// Result => [ 100, <2 empty items>, 'three', <3 empty items>, true ] 8


/**
 * 배열 length 프로퍼티
 */
// 배열 length 프로퍼티 명시적 변경
var arr = [0, 1, 2];
console.log(arr.length);    // result => 3

arr.length = 5;
console.log(arr.length);    // result => 5

arr.length = 2;
console.log(arr);       // result => [ 0, 1 ]
console.log(arr[2]);    // result => undefined
/**
 *  arr.push(element) <=> arr[arr.length] = element
 **/


/**
 * 배열 출력 : for in, for ...> for in 문은 불필요한 프로퍼티까지 출력될 수 있다
 */
arr.color = 'blue';
for (var prop in arr) {
    console.log(prop, arr[prop]);
}
for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}


/**
 * Array() 생성자 함수 <=> 배열 생성 단순화
 */
foo = new Array(3);
foo = new Array(1,2,3);
console.log(foo);
// 유사배열객체 : 일반객체에 length 프로퍼티 생성. and apply()메소드를 통해 push기능 수행
var arr = ['bar'];
var obj = {name : 'foo', length : 1};

arr.push('baz');
console.log(arr);

Array.prototype.push.apply(obj, ['baz']);
console.log(obj);

/**
 * ==(동등)연산자 ===(일치)연산자
 */
console.log(1 == '1');      // result => true
console.log(1 === '1');     // result => false

/**
 * !! 연산자
 * boolean 값으로 바꿔줌 % 빈 객체 -> true
 */
console.log(!!0);
console.log(!!1);
console.log(!!'string');
console.log(!!'');
console.log(!!true);
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!!{});
console.log(!![1,2,3]);
