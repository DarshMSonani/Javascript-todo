let textInput = document.getElementById("name");
let data = document.getElementById("data");

const submit1 = document.querySelector(".submit2");

const submit2 = document.querySelector(".submit-1")
submit2.style.display = "none"

let a = []

function insertData() {
    let text = textInput.value.trim();
    let number = 0;
    if (text !== "") {
        const object = {
            id: Date.now(),
            name: text
        }
        console.log(object);
        a.push(object);
        readData();
        textInput.value = "";
    }
    else {
        alert("Please enter a name");
    }
    // console.log("first", a);
}

function readData() {
    data.innerHTML = ''
    let number = 0;
    a.forEach((element, index) => {
        const li = document.createElement("li");
        number += 1;
        li.textContent = number + ". " + " " + element.name;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editItem(element, index)

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteItem(element.id, index);

        li.appendChild(editButton)
        li.appendChild(deleteButton);

        data.appendChild(li);
    });
    // console.log("second", a);
}

function editItem(element, index) {
    let getName = textInput.value = element.name

    submit1.style.display = "none"
    submit2.style.display = "flex"

    submit2.onclick = () => updateIten(element, index);
}

function updateIten(element, index) {

    const getName = textInput.value.trim();

    if (getName !== element.name) {
        a.map(item => {
            if (item.id === element.id) {
                item.name = getName;
            }
        })
    }
    else {
        alert("Please enter a new name");
    }
    textInput.value = ""
    submit1.style.display = "inline"
    submit2.style.display = "none"
    readData();
}

function deleteItem(id, index) {
    a.map(element => {
        if (element.id == id) {
            delete a[index]
            console.log(index);
        }
        readData();
    });
}
