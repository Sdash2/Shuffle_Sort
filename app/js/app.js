var unqColor = [];

function setData(numbers) {
    let bgColours = ['#2B8EAD', '#333333', '#6F98A8', '#BFBFBF', '#a1a1a1', '#2F454E', '#72C3DC', '#686363', '#6e6e6e']
    let childDivs = document.getElementsByClassName('child');
    for (let i = 0; i < childDivs.length; i++) {
        const element = childDivs.item(i);
        element.innerHTML = "";
        if (!numbers) {
            element.innerHTML = '<span class="highlight"></span><h1 class="boxVal">' + (i + 1) + '</h1>';
            element.style.backgroundColor = bgColours[i];
            let divHilights = document.getElementsByClassName('highlight')[i];
            divHilights.style.backgroundColor = bgColours[i];
        } else {
            element.innerHTML = '<span class="highlight"></span><h1 class="boxVal">' + (numbers[i]) + '</h1>';
            element.style.backgroundColor = bgColours[unqColor[i]];
            let divHilights = document.getElementsByClassName('highlight')[i];
            divHilights.style.backgroundColor = bgColours[unqColor[i]];
        }
    }
    
    
}

function shuffle() {
    let unqNums = [];
    while (unqNums.length < 9 && unqColor.length < 9) {
        var r = Math.floor(Math.random() * 10) + 1;
        var c = Math.floor(Math.random() * 10) + 1;
        if (r <= 9 && unqNums.indexOf(r) === -1) unqNums.push(r);
        if (r <= 9 && unqNums.indexOf(r) === -1) unqColor.push(c);
    }
    setData(unqNums);
}