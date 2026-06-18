window.send = async function () {

  const input = document.getElementById("input").value;

  if (!window.walletAddress) {
    alert("Connect wallet first");
    return;
  }

  const entry = {
    type: "prediction",
    text: input,
    time: Date.now()
  };

  await MemWal.write(window.walletAddress, entry);

  const memory = await MemWal.read(window.walletAddress);

  render(memory);

  document.getElementById("mascotText").innerText =
    mascot(memory);
};

function render(memory) {

  const box = document.getElementById("memoryBox");
  box.innerHTML = "";

  memory.forEach(m => {
    const div = document.createElement("div");
    div.style.padding = "6px";
    div.innerText = m.payload?.text || JSON.stringify(m);
    box.appendChild(div);
  });
}
