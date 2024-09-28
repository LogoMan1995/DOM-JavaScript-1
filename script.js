document.querySelector('.grid').addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
        let howmany = document.querySelector(".grid").querySelectorAll("li").length;
        if (howmany > 1) {
            let remove = e.target.parentNode;
            remove.parentNode.removeChild(remove)
        }else{
            let profile = e.target.alt;
            document.querySelector("#art p").innerHTML = `<p>This picture is ${profile}<p/>`
        }
    }
})



