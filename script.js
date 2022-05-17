const rolldiceBtn = document.getElementById('roll_dice')
const dices = document.querySelectorAll('.dice')
const cubes = document.querySelectorAll('.cube')
const results = document.querySelectorAll('.result')

//zmiana koloru ścianek po kliknięciu
cubes.forEach((cube) => {
    cube.addEventListener('click', () => {
        cube.classList.toggle('active')
        const panels = cube.querySelectorAll('.panel--grey')
        panels.forEach((panel) => {
            panel.classList.toggle('panel--active')
        })
    })
})


//rzut kostką
rolldiceBtn.addEventListener('click', () => {
    cubes.forEach((cube) => {


        //dodanie wyniku
        for (const position of cubes.keys()) {
            results[position].innerText = ``
            if (cubes[position].classList.contains('active')) {

                setTimeout(function () {
                    results[position].innerText = `${rollDice(position)}`
                }, 1000)
            }
        }

        //obracanie kostką
        if (cube.classList.contains('active')) {
            cube.classList.add('animation')

            setTimeout(function () {
                cube.classList.remove('animation')
            }, 1000)

        }


    })
}
)











/* cubes.forEach((cube) => {
    if (cube.classList.contains('active')) {
        console.log('hello')
        // diceSc.parentElement.innerHTML = 'hello' `${rollDice()}` 
    }
})




for (const position of cubes.keys()) {

    if (cubes[position].classList.contains('active')) {
        console.log(position)
        cubes[position].innerHTML = `${rollDice(position)}`
    }
}
 */

/* dices.forEach((dice) => {
    dice.addEventListener('click', (e) => {
        if (dice.innerText != null) {
            dice.innerHTML = ''
        }
        dice.classList.toggle('choosen')
        changePanelColor()
    })
})
 

 
 
 
 
rolldiceBtn.addEventListener('click', () => {
 
    Cb.classList.add('animation')
    setTimeout(function () {
        Cb.classList.remove('animation')
    }, 1000) */

/* 
for (const position of dices.keys()) {

    if (dices[position].classList.contains('choosen')) {
        /* console.log(position) 
        dices[position].innerHTML = `${rollDice(position)}`
    }
} 

/* dices.forEach((diceSc) => {
    if (diceSc.classList.contains('choosen')) {
        console.log(dices.keys())
        diceSc.innerHTML = `${rollDice()}`
    }
}) */

/*
${rollDice()}    
const score = rollDice()
    test.innerHTML = score
    diceScore.innerHTML = `hello` */





//generowanie numeru na kostce
function rollDice(numberOfSides) {

    switch (numberOfSides) {
        case 0:
            return Math.floor(Math.random() * 4) + 1;
            break;
        case 1:
            return Math.floor(Math.random() * 6) + 1;
            break;
        case 2:
            return Math.floor(Math.random() * 8) + 1;
            break;
        case 3:
            return Math.floor(Math.random() * 10);
            break;
        case 4:
            {
                const result = Math.floor(Math.random() * 10) * 10;
                if (result == 0) {
                    return '00';
                } else {
                    return result;
                }
            }
            break;
        case 5:
            return Math.floor(Math.random() * 12) + 1;;
            break;
        case 6:
            return Math.floor(Math.random() * 20) + 1;
    }
}
