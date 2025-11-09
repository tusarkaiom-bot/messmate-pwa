let bill = 0;

function increaseBill() {
    bill += 20; // test amount
    document.getElementById("bill").innerText = "৳" + bill;
}

// PWA service worker registration
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}
