document.getElementById('border').addEventListener('click' , function () {
   const container = document.getElementById('container');
   container.style.border = ' 5px solid navy'
   container.style.padding = '10px 5px'
})
function SetBg() {
    const friend = document.getElementsByClassName('friend');
    for (const item of friend) {
        item.style.backgroundColor = 'lightblue';
        item.style.width = '250px';
}
}

document.getElementById('added').addEventListener('click' , function () {
    const container = document.getElementById('container');
    const addDiv = document.createElement('div');
    addDiv.innerHTML =  `<div class="friend">
                            <h3 class="friend-name">Friend-6</h3>
                            <p>Possimus, error!</p>
                        </div>`;
    container.appendChild(addDiv);                     
})