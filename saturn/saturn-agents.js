/* Very light front-end demo agents – replace with real logic later */
export function runAgents() {
  const out = document.getElementById('agentOutput');
  if (!out) return;

  const {feePolicy} = window.SaturnConfig;
  out.innerText =
`Route Agent ✅
Risk Agent  ✅
Treasury Agent ✅

Current fee plan (inactive):
  • ${feePolicy.treasuryPct}% to Treasury (${feePolicy.treasuryWallet || '—'})
  • ${feePolicy.burnPct}% burned
  • ${feePolicy.devPct}% to Dev (${feePolicy.devWallet})
  • ${feePolicy.reservePct}% reserve

NOTE: These are UI-only. On-chain logic will be needed for real enforcement.`;
}
