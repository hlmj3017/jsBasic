let myHeading = document.querySelector("h1"); 
myHeading.textContent = "Hello world!";

// h1 태그를 찾아서 아래 hello world로 바꿔주세요


// 변수 선언
let myVariable
// 값 할당
myVariable = 'hello'

console.log(myVariable)


let myVariable2 = 'world'

console.log(myVariable2)


var a = 1
let b = 2
const c = 3

console.log(a, b, c)

a = 10
b = 20
// const로 선언된 변수는 재할당 불가능
// c = 30


var a = 100
// let, const로 선언된 변수는 재선언 불가능
// let b = 200
// consr c = 300


// type

let stringVar = 'hello'
let numberVar = 10
let boolVar = true
let arrayVar = []
let objectVar = {}

console.log(stringVar, numberVar, boolVar, arrayVar, objectVar)
// push 메서드는 배열의 끝에 새로운 요소를 추가
arrayVar.push('hello')
console.log(arrayVar)

objectVar.name = 'kim'
objectVar.location = 'seoul'
console.log(objectVar)

// my_dict = Dict()
// myobject = Object()
let myObject = new Object() 
myObject.name = 'park'

console.log(myObject)


// 연산자
let myVarA = 10
let myVarB = '10'

console.log(myVarA == myVarB)
console.log(myVarA === myVarB)

// 동등을 표현할 때는 === 을 사용 / == 는 문제가 좀 있음


// 조건문

// let iceCream = 'chocolate'
// if (iceCream === 'chocolate') {
//     alert('choco')
// } else {
//     alert('no choco')
// }

// alert : 팝업을 띄우는 것
// if문은 소괄호로 작성하고 조건은 중괄호로 작성해야 함


// 반복문
console.log('while')

let i = 0
while (i < 5) {
    console.log(i)
    i++
    // python => i += 1
}

console.log('for1')

for (let i=0; i<5; i++) {
    console.log(i)
}

console.log('for2')
let myArrary = [1, 2, 3, 4, 5]
for (let i=0; i<myArrary.length; i++) {
    console.log(myArrary[i])
}

// 배열 요소의 인덱스가 저장되고 출력
console.log('for in')
// for item in myArrary:
for (let item in myArrary) {
    console.log(item)
}

// 배열의 각 요소가 저장되고 출력
console.log('for of')
for (let item of myArrary) {
    console.log(item)
}
// forEach() 메서드는 배열의 각 요소에 대해 지정된 콜백 함수를 호출
console.log('for each')
myArrary.forEach( function(item, index, array){
    console.log(item, index, array)
} )


// 함수

// def multi():

function multiply(num1, num2) {
    let result = num1 * num2
    return result
}

console.log(multiply(3, 4))


// 함수 표현식

let multiply2 = function (num1, num2) {
    let result = num1 * num2
    return result
}

console.log(multiply2(3, 4))


// 화살표 함수 

let multiply3 = (num1, num2) => {
    let result = num1 * num2
    return result
}

console.log(multiply3(3, 4))


// 화살표 함수 생략 1
// {}안의 코드가 return하는 문장 하나만 있을 때 {}와 return을 생략 가능
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(3, 4))

// 화살표 함수 생략 2
// ()안에 매개변수가 하나만 있다면 ()를 생략 가능
let multiply5 = num1 => num1 * 2
console.log(multiply5(10))


let testObj = {
    mul1 : multiply,
    mul2 : multiply2,
    mul3 : multiply3
}


// 이벤트
// document.querySelector('h1').onclick = function(){
//     alert('hihi')
// }

// 이벤트 리스너 -> 더 많이 사용
let myH1 = document.querySelector('h1')
// addEventListener(무슨일이 일어났을 때, 무슨 행동을 할 지)
myH1.addEventListener('click', function(e){
    // alert('hello')
    console.log('hihi')
    console.log(e)
})


let myImage = document.querySelector('img')
console.log(myImage)

myImage.addEventListener('click', function(){

    let src = myImage.getAttribute('src')

    if ( src === 'images/firefox-icon.png' ) {
        myImage.setAttribute('src', 'images/12.jpg')
        // myImage.src = 'images/12.jpg' => 존재하지 않는 것을 불러오는
        } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }

})



// 비동기
console.log('hi')
// setTimeout(실행시킬 함수, 시간)
setTimeout(function(){console.log('??')}, 1000)

console.log('bye')


// 어떤 버튼을 눌렀을 때
// google 서버에서 사진(4gb)을 한장 다운로드 받아서
// 화면에 출력

const URL = 'https://jsonplaceholder.typicode.com/posts/1'

// let response = fetch(URL)
// console.log(response)
// let result = response.json()
// console.log(result)

// 외부에 있는 데이터를 호출해서 가져온 것
// .then() 메서드 체인을 통해 비동기 작업을 순차적으로 처리
fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json))

console.log('hello')

// async, await 사용한 것
// fetch(URL)와 response.json()은 await 키워드 뒤에서 순차적으로 실행되어야 함
// 그러나 fetchAndPrint() 함수 호출 이후 console.log('hello')는 바로 실행됨
async function fetchAndPrint() {
    let response = await fetch(URL)
    let result = await response.json()

    console.log(result)
}

fetchAndPrint()
// console.log('hello')


// 모든 <li> 요소를 NodeList 형태로 가져옴
const liElements = document.querySelectorAll('li')
console.log(liElements)

// for (const li of liElements) {
//     console.log('li')
// }

liElements.forEach(function(li){
    li.style.color = 'red'
    li.style.backgroundColor = 'blue'
})


liElements.forEach(function(li){
    li.addEventListener('click', function(e){
        console.log(e.target)
        console.log(e.target.textContent)

        if (e.target.textContent === 'thinkers') {
            e.target.style.color = 'black'
        }
    })
})