const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const rsl = document.querySelector(".result");



let bool = false;

function handleBtn(boola) {
    bool = boola;

    bool ? (rsl.indexText = "true입니다") : (rsl.innerText = "false입니다")
};

btn1.addEventListener("click",() => {
    handleBtn(false);
});

btn2.addEventListener("click", () => {
    handleBtn(true);
});