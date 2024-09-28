document.querySelector(".grid").addEventListener("mouseover", (e) => {
    if (e.target.tagName === "IMG") { // Исправлено на ===
        let myElement = document.createElement('div');
        myElement.className = "preview";
        e.target.parentNode.appendChild(myElement);

        let myImg = document.createElement('img');
        let locImg = e.target.src;
        
        // Исправлено на substring и корректный индекс
        myImg.src = locImg.substring(0, locImg.length - 7) + ".jpg"; 
        myElement.appendChild(myImg); // Добавляем myImg в myElement
    }
});

