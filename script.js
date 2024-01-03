let grid_container = document.querySelector('.grid_container');

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

