window.walletAddress = null;

window.connectWallet = async function () {

  try {
    if (!window.suiWallet) {
      alert("Please install Sui Wallet");
      return;
    }

    const res = await window.suiWallet.requestPermissions();

    window.walletAddress = res.accounts?.[0] || "demo-address";

    document.getElementById("wallet").innerText =
      "Connected: " + window.walletAddress;

  } catch (e) {
    console.log(e);
    alert("Wallet connection failed (fallback demo mode)");

    window.walletAddress = "demo-demo-wallet";
  }
};
