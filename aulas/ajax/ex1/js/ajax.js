(()=> {
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    

    xhr.addEventListener("readystatechange", (e) => {
        if(xhr.readyState!==4) return;
        
        console.log(xhr);

        if(xhr.status >= 200 && xhr.status < 300){
            console.log("exito")

            let json = JSON.parse(xhr.responseText);

            json.forEach(el => {
                const $li = document.createElement("li"); // cria o elemento li
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; //adiciona os objetos ao elemento li na tela
                $fragment.appendChild($li); // adiciona a li criada ao fragment 
            });

            $xhr.appendChild($fragment); // ao xhr é adicionado o fragment 

        }else{
            console.log("error")
            let msg = xhr.statusText || "Ocurrió un error "
            $xhr.innerHTML = `Error ${xhr.status}: ${msg}`
        }
        
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send(); 

})();