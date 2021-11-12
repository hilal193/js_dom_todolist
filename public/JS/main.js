import {  body,br,section,h1} from "./variable.js";
// structure body html
body;
br;
section;
body.prepend(section);
let monTitre = document.createElement('div');
let divContenu = document.createElement('div');
section.append(monTitre, divContenu);
h1;
h1.innerHTML = "Ma ToDoList Hilal";
monTitre.append(h1);
let div2;
var encoreUnDiv;

let compteur = 0;
while (compteur < 3) {
    div2 = document.createElement("div");
    divContenu.append(div2);
    encoreUnDiv = divContenu.querySelectorAll("div");
    compteur++;
}
// ./structure

// div 1 
let monLabel = document.createElement('label');
monLabel.innerHTML = "Add a task :";

let divInput = document.createElement('input');
divInput.value = "";

let boutonAjout = document.createElement('button');
boutonAjout.innerHTML = "+Add";

// mode sombre 
let modeSombre = document.createElement('i');
modeSombre.className = "fas fa-adjust aggrandi";

modeSombre.addEventListener('click', () => {
    if (body.style.backgroundColor == "black") {
        body.style.backgroundColor = "orange";
    } else {
        body.style.backgroundColor = "black";
    }

})
let boutonClear = document.createElement('button');
boutonClear.innerHTML = "ClearAll";



encoreUnDiv[0].append(monLabel, br, divInput, boutonAjout, modeSombre, boutonClear);
// me met input en focus j'ai trouver de google
divInput.focus();

// ./div 1

// mes boutons to do, done, all (text)
let bouton;
let boutonModif;
for (let index = 0; index < 3; index++) {
    bouton = document.createElement('button');
    // je les rajoute a mon div
    encoreUnDiv[1].append(bouton);
    // je selectionne tt mes btn
    boutonModif = encoreUnDiv[1].querySelectorAll('button');
    // rajoute du txt au bouton
    switch (index) {
        case 0:
            boutonModif[0].innerHTML = "To do";
            break;
        case 1:
            boutonModif[1].innerHTML = "Done";
            break;
        case 2:
            boutonModif[2].innerHTML = "All";
            break;
    }
};



// div 3 css test
divContenu.style.backgroundColor = "white";
divContenu.style.borderRadius = "5px";
divContenu.style.padding = "2%";
divContenu.style.border = "5px solid green";
encoreUnDiv[0].style.borderBottom = "solid 3px black";
encoreUnDiv[0].style.paddingBottom = "2%";

encoreUnDiv[1].style.display = "flex";
encoreUnDiv[1].style.justifyContent = "flex-end";
encoreUnDiv[1].style.padding = "2% 0%";
encoreUnDiv[2].style.padding = "1% 0%"
// ./div 3


// Bouton ajouter
boutonAjout.addEventListener('click', () => {
    if (divInput.value != "") {

        let divTache = document.createElement('div');
        divTache.className = "divTache";
        encoreUnDiv[2].append(divTache);

        let divSpan = document.createElement('div');
        let spanTache = document.createElement('span');
        spanTache.innerHTML = divInput.value;
        divSpan.style.width = "75%"
        divSpan.append(spanTache);
        // ./bouton ajouter

        // Icons
        let divIcon = document.createElement('div');
        let iconCheck = document.createElement('i');
        iconCheck.className = "fas fa-check-circle checker";
        let iconEdit = document.createElement('i');
        iconEdit.className = "fas fa-user-edit modifier";
        let iconDelete = document.createElement('i');
        iconDelete.className = "fas fa-trash effaceur";
        iconDelete.setAttribute('id', "iconDel");
        divIcon.append( iconCheck, iconEdit, iconDelete);
        let icons = divIcon.querySelectorAll('i');
        divTache.append(divSpan, divIcon)
        let inputRempli = divInput.value;
        divInput.value = "";


        // Valider la tache
        iconCheck.addEventListener('click', () => {
            if (divTache.style.backgroundColor == "green") {
                divTache.style.backgroundColor = "grey";
            } else {
                divTache.style.backgroundColor = "green";
            }
        });
        // ./Valider

        // Modifier la tache
        // console.log(divInput.value);
        iconEdit.addEventListener('click', () => {
            // jefface tt les autres icon
            spanTache.style.display = "none";
            // iconImportant.style.display = "none";
            iconCheck.style.display = "none";
            iconEdit.style.display = "none";
            iconDelete.style.display = "none";
            // je rajoute mon icon save
            let iconSave = document.createElement('i');
            iconSave.className = "fas fa-save sauvegarder";
            divIcon.append(iconSave);
            let inputEdit = document.createElement('input');
            inputEdit.value = inputRempli;
            divSpan.append(inputEdit);
            inputEdit.focus();
            // ./Modifier


            // Sauvegarder
            iconSave.addEventListener('click', ()=> {
                let inputEditValue = inputEdit.value;
                inputEdit.style.display = "none";
                spanTache.innerHTML = inputEditValue;
                spanTache.style.display = "block";
                iconCheck.style.display = "inline-block";
                iconEdit.style.display = "inline-block";
                iconDelete.style.display = "inline-block";
                iconSave.style.display = "none";
            });

            // Sauvegarder avec la touche ENTER
            body.addEventListener('keydown', (event) => {
                // valeur 13 et la touche clavier
                if (event.key === "Enter") {
                    if (inputEdit.value != "") {
                        // j'utilise la methode click
                        iconSave.click();
                    };
                };
            });
        });
        // ./Sauvegarder

        // Supprimer la tache
        iconDelete.addEventListener('click', () => {
            spanTache.style.display = "none";
            // iconImportant.style.display = "none";
            iconCheck.style.display = "none";
            iconEdit.style.display = "none";
            iconDelete.style.display = "none";
            let spanTache2 = document.createElement('span');
            spanTache2.innerHTML = "Voulez vous supprimer cette tâche ?";
            spanTache2.style.color = "red";
            divSpan.append(spanTache2);
            let boutonOUI = document.createElement('button');
            boutonOUI.innerHTML = "OUI";
            boutonOUI.className="oui";
            let boutonNON = document.createElement('button');
            boutonNON.innerHTML = "NON";
            boutonNON.className="non";
            divIcon.append(boutonOUI, boutonNON);

            boutonOUI.addEventListener('click', () => {
                encoreUnDiv[2].removeChild(divTache);
            });
            boutonNON.addEventListener('click', () => {
                iconCheck.style.display = "inline-block";
                iconEdit.style.display = "inline-block";
                iconDelete.style.display = "inline-block";
                boutonOUI.style.display = "none";
                boutonNON.style.display = "none";
                spanTache.style.display = "block";
                spanTache2.style.display = "none";
            });
        });
        // ./Supprimer


        //  effacetout
       boutonClear.addEventListener("click", () => {
           let children = Array.from(encoreUnDiv[2].children)
        //    console.log(children.includes(divTache));
           if (children.includes(divTache)) {
               encoreUnDiv[2].removeChild(divTache)
           }
        //    ou avec innerHTML par contre la methode est moche
        // encoreUnDiv[2].innerHTML = ""
    })

        let tacheTout = encoreUnDiv[2].querySelectorAll('.divTache');

        for (let i = 0; i < tacheTout.length; i++) {
            boutonModif[0].addEventListener('click', () => {
                if (tacheTout[i].style.backgroundColor != "green") {
                    tacheTout[i].style.display = "flex";
                } else {
                    tacheTout[i].style.display = "none";
                };
            });
            boutonModif[1].addEventListener('click', () => {
                if (tacheTout[i].style.backgroundColor != "green") {
                    tacheTout[i].style.display = "none";
                } else {
                    tacheTout[i].style.display = "flex";
                };
            });
            boutonModif[2].addEventListener('click', () => {
                tacheTout[i].style.display = 'flex'
            });
        };

       
    };
});


// j'appuie sur enter et ça me rajoute en add de mon input
body.addEventListener("keydown", (toucheEnter) => {
    if (toucheEnter.key === "Enter") {
        if (divInput.value != "") {
            // me ramene directement a mon addeventlistener
            boutonAjout.click()
        };
    };
});



console.log(encoreUnDiv[2]);


