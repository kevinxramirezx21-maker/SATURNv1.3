/* Saturn front-end logic */
(async () => {
  // ---------- SHARED HELPERS ----------
  const {rpcEndpoint, mints, platformFeeBps, referralAccount} = window.SaturnConfig;
  const connection = new solanaWeb3.Connection(rpcEndpoint);
  const provider   = window.phantom?.solana ?? window.solflare ?? null;

  // ---------- WALLET ----------
  const connectBtn = document.getElementById('connectBtn');
  let publicKey = null;

  connectBtn.onclick = async () => {
    if (!provider) return alert('Please install a Solana wallet (Phantom, Solflare…).');
    try {
      const res = await provider.connect();          // opens wallet popup
      publicKey = res.publicKey;
      connectBtn.textContent = publicKey.toBase58().slice(0,4)+'…'+publicKey.toBase58().slice(-4);
      initJupiter();
    } catch (e) {
      console.error(e);
    }
  };

  // ---------- JUPITER TERMINAL ----------
  function initJupiter() {
    Jupiter.init({
      displayMode: "integrated",          // uses your page layout
      integratedTargetId: "swapContainer",
      endpoint: rpcEndpoint,
      defaultExplorer: "solana",
      formProps: { strictTokenList: false },
      env: "mainnet-beta",
      platformFeeBps,
      referralAccount,
      strictTokenList: false,
      wallet: {
        sendTransaction: provider.request.bind(provider, {method:"signAndSendTransaction"}),
        publicKey
      }
    });
  }

})();
