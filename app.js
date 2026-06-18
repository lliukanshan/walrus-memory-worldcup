async function send() {

  const input = document.getElementById("input").value;

  const agentId = window.walletAddress;

  const entry = {
    type: "prediction",
    text: input,
    time: Date.now()
  };

  await MemWal.write(agentId, entry);

  const memory = await MemWal.read(agentId);

  render(memory);

  document.getElementById("mascotText").innerText =
    mascot(memory);
}

function render(memory) {

  const box = document.getElementById("memoryBox");
  box.innerHTML = "";

  memory.forEach(m => {
    const div = document.createElement("div");
    div.innerText = JSON.stringify(m.payload);
    box.appendChild(div);
  });
}
