const listDo = [];
const listDone = [];

const getEle = (id) => document.getElementById(id);

getEle("addItem").onclick = () => {
    let task = getEle("newTask").value;
    if (task === "") {
        alert("Không để trống");
     
    } else {
        listDo.push(task);
        renderHTML(listDo, "todo", 1);
    }
    getEle("newTask").value="";
};


const renderHTML = (data, ID, key) => {
    let content = "";
    if (data) {
        switch (key) {
            case 1:
                data.forEach((task, index) => {
                    content += `<li>${task} <div><i onclick="deLete('${index}')" class="fa fa-trash-alt"></i><i onclick="done('${index}')" class="fa fa-check-circle"></i></div></li>`
                });
                break;
            case 2:
                data.forEach((task, index) => {
                    content += `<li>${task} <div><i onclick="deLete1('${index}')" class="fa fa-trash-alt"></i><i class="fa fa-check-circle"></i></div></li>`
                });
                break;

        }
    };
    getEle(ID).innerHTML = content;
};

window.done = done;
function done(id) {
    listDone.push(listDo[id]);
    listDo.splice(id, 1);
    renderHTML(listDo, "todo", 1);
    renderHTML(listDone, "completed", 2);
};

window.deLete = deLete;
function deLete(id) {
    listDo.splice(id, 1);
    renderHTML(listDo, "todo", 1);
};
window.deLete1 = deLete1;
function deLete1(id) {
    listDone.splice(id, 1);
    renderHTML(listDone, "completed", 2);
};

getEle("two").onclick = () => {
    let AZ = listDo.sort((task, nexttask) => {
        let tasK = task.toLowerCase();
        let nextTask = nexttask.toLowerCase();
        if (tasK < nextTask) {
            return -1;
        }
        if (tasK > nextTask) {
            return 1;
        }
        return 0;
    });
    let ZA = listDone.sort((task, nexttask) => {
        let tasK = task.toLowerCase();
        let nextTask = nexttask.toLowerCase();
        if (tasK < nextTask) {
            return -1;
        }
        if (tasK > nextTask) {
            return 1;
        }
        return 0;
    });
    renderHTML(AZ, "todo", 1)
    renderHTML(ZA, "completed", 2)
};

getEle("three").onclick = () => {
    let arrangeZA = listDo.sort((task, nexttask) => {
        let tasK = task.toLowerCase();
        let nextTask = nexttask.toLowerCase();
        if (tasK < nextTask) {
            return 1;
        }
        if (tasK > nextTask) {
            return -1;
        }
        return 0;
    });
    let ZA = listDone.sort((task, nexttask) => {
        let tasK = task.toLowerCase();
        let nextTask = nexttask.toLowerCase();
        if (tasK < nextTask) {
            return 1;
        }
        if (tasK > nextTask) {
            return -1;
        }
        return 0;
    });
    renderHTML(arrangeZA, "todo", 1)
    renderHTML(ZA, "completed", 2)
};

getEle("one").onclick=()=>{
   getEle("todo").style.display="none";
   getEle("completed").style.display="block";
};
getEle("all").onclick=()=>{
    getEle("todo").style.display="block";
    getEle("completed").style.display="block";
 };