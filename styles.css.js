body {
    font-family: 'Times New Roman', serif;
    background-color: #f7f7f7;
    text-align: center;
    padding: 20px;
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#birthday-message-container {
    margin-top: 50px;
}

#birthday-message {
    margin-top: 20px;
    background-color: #f9f9f9;
    border: 2px solid #eee;
    padding: 20px;
    border-radius: 10px;
    display: none;
    width: 80%;
    max-width: 600px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    text-align: left;
}

button {
    padding: 10px 20px;
    background-color: #ffcc00;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #ff9900;
}

.cat-image {
    width: 200px;
    margin: 20px 10px;
    border-radius: 10px;
}

.message-content p {
    font-size: 18px;
    line-height: 1.6;
}

.hidden {
    display: none;
}

/* Animasi */
@keyframes slideIn {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

#birthday-message {
    animation: slideIn 1s ease-out;
}