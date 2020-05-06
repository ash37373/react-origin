//객체
// 객체는 우리가 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해줍니다.

/* 
const dog = {
  name: "멍멍이",
  age: 2,
};

console.log(dog.name);
console.log(dog.age);
 */

// 한번 영화 어벤져스의 캐릭터 아이언맨과 캡틴 아메리카의 정보를 객체안에 집어넣어봅시다.
/* const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};
const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};
console.log(ironMan);
console.log(captainAmerica); */

// 함수에서 객체를 파라미터로 받기
// 함수를 새로 만들어서 방금 만든 객체를 파라미터로 받아와서 사용해봅시다.

/* const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};
const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다`;
  console.log(text);
}

print(ironMan);
print(captainAmerica); */

/* 
객체 비구조화 할당
print 함수를 보시면 파라미터로 받아온 hero 내부의 값을 조회 할 때 마다 hero. 를 입력하고 있는데, 객체 비구조화 할당이라는 문법을 사용하면 코드를 더욱 짧고 보기 좋게 작성 할 수 있습니다.

이 문법은 "객체 구조 분해" 라고 불리기도 합니다.

 */

/* const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};
const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

function print(hero) {
  const { name, actor, alias } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다`;
  console.log(text);
}

print(ironMan);
print(captainAmerica); */

// 객체 안에 함수 넣기

// const dog = {
//   name: "멍멍이",
//   sound: "멍멍",
//   say: function say() {
//     console.log(this.sound);
//   },
// };

// dog.say();

// const numbers = {
//   a: 1,
//   b: 2,
//   get sum() {
//     console.log("sum 함수가 실행됩니다!");
//     return this.a + this.b;
//   },
// };

// console.log(numbers.sum);
// numbers.b = 5;
// console.log(numbers.sum);

/* const dog = {
  _name: "멍멍이",
  get name() {
    console.log("_name을 조회합니다..");
    return this._name;
  },
  set name(value) {
    console.log("이름이 바뀝니다..", value);
    this._name = value;
  },
};

console.log(dog.name);
dog.name = "뭉뭉이";
console.log(dog.name); */

const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  },
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
