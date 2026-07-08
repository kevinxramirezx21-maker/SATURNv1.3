/* Configuration used everywhere in the dApp */
window.SaturnConfig = {
  // 1) RPC – already set to your Helius key
  rpcEndpoint: 'https://mainnet.helius-rpc.com/?api-key=f74bfe3e-5fb9-4834-ad1f-b38a3cc28ae7',

  // 2) Mint addresses (fill in later when ready)
  mints: {
    SOL   : 'So11111111111111111111111111111111111111112',
    USDC  : 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    USDT  : 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkYvBztZ1mGx6fZP',
    JUP   : 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
    SATURN: '', // <—— add once minted
    SUSD  : ''  // <—— add once you create Saturn USD
  },

  // 3) Fee policy (numbers must eventually add up to 100)
  feePolicy: {
    totalProtocolFeeBps : 50, // 0.50 % max (set to 0 until live)
    treasuryPct  : 40,
    burnPct      : 30,
    devPct       : 20,
    reservePct   : 10,
    treasuryWallet : '', // <—— add when ready
    devWallet      : 'CqXPQf6Qe2D2KJ5UYvTLi3prAwQiSntJUXZmE3knyzFb',
    burnMethod     : 'spl-token-burn'
  },

  // 4) Jupiter platform-fee setup (keep 0 until referral is ready)
  platformFeeBps : 0,
  referralAccount: ''
};
