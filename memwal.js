const MemWal = {

  async write(agentId, data) {

    try {
      await fetch(CONFIG.MEMWAL_ENDPOINT + "/write", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          agent_id: agentId,
          payload: data
        })
      });

    } catch (e) {
      console.log("MemWal write failed, using local fallback");

      let local = JSON.parse(localStorage.getItem("mem") || "[]");
      local.push(data);
      localStorage.setItem("mem", JSON.stringify(local));
    }
  },

  async read(agentId) {

    try {
      const res = await fetch(
        CONFIG.MEMWAL_ENDPOINT + "/read?agent_id=" + agentId
      );
      return await res.json();

    } catch (e) {
      console.log("MemWal read fallback");

      return JSON.parse(localStorage.getItem("mem") || "[]");
    }
  }
};
