const submitMessage = () => {
    const passcodeInput = document.getElementById('passcode').value;
    const messageInput = document.getElementById('message').value;
    
    firebase.database().ref().push({
        passcode: passcodeInput,
        message: messageInput
    });
};