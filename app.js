let wallet = null;
let memory = [];

/* =========================
   WALLET CONNECT (SAFE MOCK + REAL DETECT)
========================= */
window.connectWallet = async function () {

  try {

    if (window.suiWallet && window.suiWallet.requestPermissions) {

      const res = await window.suiWallet.requestPermissions();
      wallet = res?.accounts?.[0] || "demo-wallet";

    } else {
      wallet = "demo-wallet-" + Math.random().toString(16).slice(2);
    }

    document.getElementById("walletStatus").innerText =
      "Connected: " + wallet;

  } catch (e) {
    wallet = "fallback-wallet";
    document.getElementById("walletStatus").innerText =
      "Connected (fallback)";
  }
};

/* =========================
   SEND FUNCTION
========================= */
window.send = function () {

  const input = document.getElementById("input").value;

  if (!wallet) {
    alert("Connect wallet first");
    return;
  }

  const entry = {
    text: input,
    time: Date.now()
  };

  memory.push(entry);

  render();

  document.getElementById("mascot").innerText =
    getMascot(memory);
};

/* =========================
   MASCOT LOGIC
========================= */
function getMascot(mem) {

  if (mem.length === 0) {
    return "🐘 I am Walrus. Make prediction.";
  }

  const last = mem[mem.length - 1];

  if (last.text.includes("Argentina")) {
    return "🐘 You like Argentina...";
  }

  if (mem.length >= 3) {
    return "🐘 I remember you now.";
  }

  return "🐘 Keep going...";
}

/* =========================
   RENDER MEMORY
========================= */
function render() {

  const box = document.getElementById("memory");
  box.innerHTML = "";

  memory.forEach(m => {
    const div = document.createElement("div");
    div.innerText = m.text + " (" + new Date(m.time).toLocaleTimeString() + ")";
    box.appendChild(div);
  });
}
