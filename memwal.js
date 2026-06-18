const MemWal = {

  async write(agentId, data) {
    return fetch(CONFIG.MEMWAL_ENDPOINT + "/write", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        agent_id: agentId,
        payload: data
      })
    });
  },

  async read(agentId) {
    const res = await fetch(
      CONFIG.MEMWAL_ENDPOINT + "/read?agent_id=" + agentId
    );
    return res.json();
  }
};
