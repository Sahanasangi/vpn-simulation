function connectToVPN() {
    let userIP = document.getElementById("user-ip").value;
    let vpnStatus = document.getElementById("vpn-status");

    if (userIP === "") {
        alert("Please enter an IP address!");
        return;
    }

    // Fake VPN IP (for demo purposes)
    let maskedIP = "10.20.30.40";

    vpnStatus.innerHTML = `🔗 Connecting to VPN...`;
    
    setTimeout(() => {
        vpnStatus.innerHTML = `✅ Connected! Your new IP: <strong>${maskedIP}</strong> (Original: <del>${userIP}</del>)`;
        startVPNSimulation();
    }, 2000);
}

function startVPNSimulation() {
    let normalData = document.querySelector(".data.normal");
    let encryptedData = document.querySelector(".data.encrypted");

    normalData.style.transition = "transform 2s ease-in-out";
    normalData.style.transform = "translateX(150px)";

    setTimeout(() => {
        normalData.style.display = "none";
        encryptedData.style.display = "inline-block";
        encryptedData.style.transition = "transform 2s ease-in-out";
        encryptedData.style.transform = "translateX(150px)";
    }, 2000);
}



function showFeature(feature) {
    let details = {
        "encryption": "🔐 Encryption ensures your data is scrambled and unreadable to hackers, even on public Wi-Fi.",
        "ip-masking": "🌍 IP Masking hides your real IP address, making it impossible to track your online activity.",
        "no-logs": "🚫 No-Log Policy means your online activity is never stored, ensuring full privacy.",
        "kill-switch": "⚡ Kill Switch cuts off your internet connection if the VPN fails, preventing data leaks."
    };

    document.getElementById("feature-details").innerHTML = `<h2>${details[feature]}</h2>`;
}

function startHackerAttack() {
    let normalData = document.querySelector(".data.normal");
    let hacker = document.querySelector(".hacker");
    let vpnServer = document.querySelector(".vpn-server");
    let encryptedData = document.querySelector(".data.encrypted");

    normalData.style.transition = "transform 2s ease-in-out";
    normalData.style.transform = "translateX(150px)";

    setTimeout(() => {
        hacker.innerHTML = "💀 Hacker (Stealing Data!)";
        hacker.style.color = "red";
    }, 1500);

    setTimeout(() => {
        normalData.style.display = "none";
        vpnServer.classList.remove("hidden");
        encryptedData.classList.remove("hidden");

        encryptedData.style.transition = "transform 2s ease-in-out";
        encryptedData.style.transform = "translateX(150px)";

        hacker.innerHTML = "😡 Hacker Blocked!";
        hacker.style.color = "green";
    }, 3000);
}


// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check local storage for dark mode preference
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

// Toggle dark mode on click
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
    }
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
