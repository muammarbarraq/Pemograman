function addTodo() {
    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;
    console.log("todo" + textTodo);
    console.log("timestamp" + timestamp);
};

function makeTodo(){

    const textTitle = document.createElement("h2");
    textTitle.innerText ="Tugas Android";

    const textTimesStamp = document.createElement("p");
    textTimesStamp.innerText = "2021-05-01";

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner");
    textContainer.append(textContainer);

    return container;
    
}