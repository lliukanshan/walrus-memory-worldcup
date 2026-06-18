function mascot(memory) {

  if (!memory || memory.length === 0) {
    return "🐘 I am Walrus. Start predicting!";
  }

  const last = memory[memory.length - 1];

  if (last?.payload?.text?.includes("Argentina")) {
    return "🐘 You really like Argentina...";
  }

  if (memory.length > 3) {
    return "🐘 I remember you now...";
  }

  return "🐘 Tell me more predictions.";
}
