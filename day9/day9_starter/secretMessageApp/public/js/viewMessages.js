const getMessages = () => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    findMessage(data);
    });
}

const findMessage = (messages) => {
    const passcodeAttempt = document.getElementById('passcode').value;
    for(message in messages) {
        const messageData = messages[message];
        if(messageData.passcode === passcodeAttempt) {
            renderMessageAsHtml(messageData.message)
        }
    }
}

const renderMessageAsHtml = (message) => {
    // Hide Input Form
    const passcodeInput = document.getElementById('passcodeInput');
    passcodeInput.style.display = 'none';
    // Render messageas HTML
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;   
}