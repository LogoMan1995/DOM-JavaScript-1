document.querySelector(".grid").addEventListener("mouseover", (e) => {
    if (e.target.tagName === "IMG") {
        let myElement = document.createElement('div');
        myElement.className = "preview";
        e.target.parentNode.appendChild(myElement);

        let myImg = document.createElement('img');
        let locImg = e.target.src;

        myImg.src = locImg.substring(0, locImg.length - 7) + ".jpg";
        myElement.appendChild(myImg);

        
        const handleMouseOut = () => {
            let myNode = e.target.parentNode.querySelector("div.preview");
            if (myNode) {
                myNode.remove();
            }
            
            e.target.removeEventListener('mouseout', handleMouseOut);
        };

        
        e.target.addEventListener('mouseout', handleMouseOut);
    }
}, false);
