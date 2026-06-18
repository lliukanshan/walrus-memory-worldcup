window.walletAddress = null;

window.connectWallet = async function () {

  try {
    const wallets = window.getWallets?.() || [];

    if (!wallets.length) {
      alert("No Sui wallet found");
      return;
    }

    const wallet = wallets[0];

    const accounts = await wallet.features["standard:connect"]?.();

    window.walletAddress = accounts?.accounts?.[0]?.address || "demo";

    document.getElementById("wallet").innerText =
      "Connected: " + window.walletAddress;

  } catch (e) {
    console.log("wallet error", e);

    window.walletAddress = "demo-wallet";
  }
};
