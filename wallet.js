async function connectWallet() {

  if (!window.suiWallet) {
    alert("Install Sui Wallet extension");
    return;
  }

  const res = await window.suiWallet.requestPermissions();

  window.walletAddress = res.accounts[0];

  document.getElementById("wallet").innerText =
    "Connected: " + window.walletAddress;

  return window.walletAddress;
}
