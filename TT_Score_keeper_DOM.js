const maxxScore = document.querySelector("select");
const sp1 = document.querySelector("#p1");
const sp2 = document.querySelector("#p2");

const btnP1 = document.querySelector("#player1");
const btnP2 = document.querySelector("#player2");

btnP1.addEventListener("click", () => {
    if (!sp1.classList.contains("win") && !sp1.classList.contains("loose")) {
        sp1.innerText = Number(sp1.innerText) + 1;
        if (maxxScore.value === sp1.innerText) {
            sp1.classList.add("win");
            sp2.classList.add("loose");
            btnP1.classList.add("disable");
            btnP2.classList.add("disable");

        }
    }

})
btnP2.addEventListener("click", () => {
    if (!sp2.classList.contains("win") && !sp2.classList.contains("loose")) {
        sp2.innerText = Number(sp2.innerText) + 1;
        if (maxxScore.value === sp2.innerText) {
            sp2.classList.add("win");
            sp1.classList.add("loose")
            btnP1.classList.add("disable");
            btnP2.classList.add("disable");
        }
    }
})



const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    sp1.innerText = "0";
    sp2.innerText = "0";
    if (sp1.classList.contains("win")) {
        sp1.classList.remove("win");
    } else if (sp1.classList.contains("loose")) {
        sp1.classList.remove("loose");
    }

    if (sp2.classList.contains("win")) {
        sp2.classList.remove("win");
    } else if (sp2.classList.contains("loose")) {
        sp2.classList.remove("loose");
    }

    btnP1.classList.remove("disable");
    btnP2.classList.remove("disable");

})