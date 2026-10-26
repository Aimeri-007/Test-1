//2 test
const everySecond = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
};

everySecond();


//3 test
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
};

count();


//1 test
const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
};

console.log(containsOnlyDigits("12345")); // true
console.log(containsOnlyDigits("12a45")); // false


//4 test
const box = document.getElementById("box");

box.addEventListener("click", () => {
    box.classList.toggle("active");
});


//5 test
const xhr = new XMLHttpRequest();

xhr.open("GET", "data.json");

xhr.onload = () => {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        // { key1: "value", key2: "value", key3: "value" }
    } else {
        console.log("Ошибка:", xhr.status);
    }
};

xhr.onerror = () => {
    console.log("Ошибка сети");
};

xhr.send();
