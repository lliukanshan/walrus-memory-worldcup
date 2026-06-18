function mascot(memory) {

  if (!memory.length) {
    return "🐘 I am Walrus. Make your first prediction.";
  }

  const last = memory[memory.length - 1];

  if (last.payload?.text?.includes("Argentina")) {
    return "🐘 Argentina again... interesting pattern.";
  }

  if (memory.length > 3) {
    return "🐘 I remember everything... you are evolving.";
  }

  return "🐘 Continue... I am learning your football destiny.";
}
