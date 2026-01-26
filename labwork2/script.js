const USERS = [
    { username: "gray", password: "123" },
    { username: "ash", password: "cansino" },
    { username: "don", password: "pogi" },
    { username: "john", password: "john" },
    { username: "naz", password: "nazcute" }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload
    login();
});

function login() {
    const userInput = document.getElementById("username").value.trim();
    const passInput = document.getElementById("password").value.trim();
    const result = document.getElementById("result");

    const now = new Date();
    const timestamp = now.toLocaleString();

    const matchedUser = USERS.find(
        user => user.username === userInput && user.password === passInput
    );

    if (matchedUser) {
        result.textContent = `Welcome, ${matchedUser.username}! Login Successful at ${timestamp}`;
        result.style.color = "green";
        saveAttendance(userInput, timestamp, "SUCCESS");
    } else {
        playWrongBeep();
        result.textContent = `Incorrect Username or Password! ${timestamp}`;
        result.style.color = "red";
        saveAttendance(userInput || "UNKNOWN", timestamp, "FAILED");
    }
}

function playWrongBeep() {
    const audio = new Audio("./beep.mp3"); // make sure file exists
    audio.volume = 0.5;
    audio.play().catch(err => console.log("Audio error:", err));
}

function saveAttendance(username, time, status) {
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0];
    const fileName = `attendance_${dateStr}.txt`;

    const data =
        "Username: " + username + "\n" +
        "Time: " + time + "\n" +
        "Status: " + status + "\n" +
        "-----------------------------\n";

    const blob = new Blob([data], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}