let walletAddress = null;
let memory = [];

/* =========================
   SUI WALLET CONNECTION
========================= */
const { WalletStandard } = window['@mysten/dapp-kit'];

let walletAdapter = null;

async function initWallet() {

  const wallets = await WalletStandard.get();

  walletAdapter = wallets.find(w =>
    w.name.toLowerCase().includes("sui")
  );

  if (!walletAdapter) {
    alert("No Sui wallet found");
  }
}

/* =========================
   CONNECT WALLET
========================= */
async function connectWallet() {

  try {

    if (!walletAdapter) await initWallet();

    const res = await walletAdapter.features['standard:connect'].connect();

    walletAddress = res.accounts[0].address;

    document.getElementById("walletStatus").innerText =
      "Connected: " + walletAddress;

  } catch (e) {
    console.log(e);
    alert("Wallet connection failed");
  }
}

/* =========================
   SEND
========================= */
function send() {

  const input = document.getElementById("input").value;

  if (!walletAddress) {
    alert("Connect wallet first");
    return;
  }

  memory.push({
    text: input,
    time: Date.now()
  });

  render();

  document.getElementById("mascot").innerText =
    getMascot();
}

/* =========================
   MASCOT LOGIC
========================= */
function getMascot() {

  if (memory.length === 0) return "🐘 waiting...";

  const last = memory[memory.length - 1];

  if (last.text.includes("Argentina")) {
    return "🐘 Argentina fan detected";
  }

  if (memory.length > 2) {
    return "🐘 I remember you now";
  }

  return "🐘 keep going";
}

/* =========================
   RENDER
========================= */
function render() {

  const box = document.getElementById("memory");
  box.innerHTML = "";

  memory.forEach(m => {
    const div = document.createElement("div");
    div.innerText = m.text;
    box.appendChild(div);
  });
}

/* =========================
   EVENTS
========================= */
document.getElementById("connectBtn")
  .addEventListener("click", connectWallet);

document.getElementById("sendBtn")
  .addEventListener("click", send);
