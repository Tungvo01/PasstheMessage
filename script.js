const messageInput = document.getElementById("message-input")

const getMessage = () => {
    const messageOutput = document.getElementById("message-output")
    messageOutput.innerText = messageInput.value
    messageInput.value = "";
}

messageInput.addEventListener("keydown",
    function(event){
        if(event.key == "Enter")
            getMessage();
    }
)