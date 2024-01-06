let grid_container = document.querySelector('.grid_container');

//Grid erstellen
for (let i=0; i<16; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    square.style.height = '50px';
    square.style.width = '50px';
    square.style.backgroundColor = 'white';
    square.style.border = '1px solid black';
    square.style.boxSizing = 'border-box';
    grid_container.appendChild(square);

    let width = square.offsetWidth;
    let newWidth = 4*width;
    grid_container.style.maxWidth = newWidth + 'px';   
}
//funktionalität squares schwarz ausfüllen
    // Prevent default dragstart event to disable dragging
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});
    // fill auch möglich wenn linksklick gedrückt gehalten
let isMousedown = false;
document.addEventListener('mousedown', function() {
    isMousedown = true;
})
document.addEventListener('mouseup', function() {
    isMousedown = false;
})

let fill = function(div) {
    if (mode===0) {
        if (div.style.backgroundColor == 'white') {
            div.style.backgroundColor = 'black';
        } 
    } else if (mode===1) {
        if (div.style.backgroundColor == 'white') {
            div.style.backgroundColor = 'black';
        } 
         else if (div.style.backgroundColor == 'black') {
            div.style.backgroundColor = 'white';
        }   
    }
}

const addClick = function(div) {
    div.addEventListener( 'mouseenter', function(event) {
        if (isMousedown) {
            fill(div);
        }
    });

    div.addEventListener( 'mousedown', function() {
        fill(div);
    });
}

let squareClass = document.querySelectorAll(".square");
squareClass.forEach(addClick);

//funktionalität clear bzw. grid zurücksetzen
let clear_button = document.querySelector('#clear');
clear_button.addEventListener('click', function() {
    squareClass.forEach(clear);
});

const clear = function(div) {
    div.style.backgroundColor = 'white';
}

//mode
let mode = 0;
let mode_button = document.querySelector('#mode');

const switchMode = function() {
        // if (mode===0) {
        //     fill = function(div) {
        //         if (div.style.backgroundColor == 'white') {
        //             div.style.backgroundColor = 'black';
        //         } 
        //          else if (div.style.backgroundColor == 'black') {
        //             div.style.backgroundColor = 'white';
        //         }   
        //     }
        //     mode = 1;
        // }
        // if (mode===1) {
        //     fill = function(div) {
        //         if (div.style.backgroundColor == 'white') {
        //             div.style.backgroundColor = 'black';
        //         } 
        //         //  else if (div.style.backgroundColor == 'black') {
        //         //     div.style.backgroundColor = 'white';
        //         // }   
        //     }
        //     mode = 0;
        // }
        mode = mode === 0 ? 1 : 0;
}

mode_button.addEventListener('click', switchMode) 
