/**
 * 생성방법
 * 함수 선언문, 함수 표현식, Function() 생성자 함수
 */

/**
 * 함수 선언문(리터럴)을 통한 정의
 */
function add(x, y) {
    return x + y;
}

/**
 * 함수 표현식       기명함수표현, 익명함수표현
 */
var add = function(x, y) {  // add 는 익명함수를 가르킴  function은 외부에선 사용X 내부에서만 재귀의용도로 사용가능
    return x + y;
};
var plus = add;
console.log(add(1,3));
console.log(plus(1,3));

