# Quantum Excellium Core (QEC) 3.5.2 — governed runtime for AI agents

> Public gateway. The Local Core is licensed software; this repository holds the product sheet, the proof commands,
> the changelog and the SHA-256 of delivered packages — never the runtime code.

## 1. What QEC is
A zero-dependency Python runtime that sits between an AI agent and its tools: every tool call is policy-checked
**before** execution, cost is metered in exact decimals with hard ceilings, agent-to-agent delegation is signed and
cannot escalate authority, and every decision lands in a hash-chained ledger that an independent verifier can check.

## 2. Architecture (10 lines)
- **Local Core** — AuditChain (JSONL, SHA-256 chained, fsync, rotation) · crypto (Ed25519, HMAC, canonical JSON) · CostMeter (Decimal) · DelegationAssurance · TransactionGuard · AuthorityRegistry.
- **Trust Plane (3.5.x)** — A2A Trust Envelope (signed delegations, parent binding, authority(child) ⊆ authority(parent), expiry ≤ parent) · per-request proof-of-possession · AuthorityMeter · DriftSentinel (signed approval) · ReplayCapsule / ReplayLab (counterfactual replay) · ledger-attested durable state (SQLite, tampering → refused) · signed operator orders (rotate anchors, revoke keys) · EvidenceBridge (OpenTelemetry GenAI vocabulary, allow-listed attributes).
- **Differentials × Industry Packs** — one control plane, vendor-specific adapters (AWS Bedrock AgentCore Cedar pre-compiler, Google Model Armor proof, Anthropic/IBM MCP loop, ServiceNow, Salesforce, SAP).

## 3. Mechanisms and their tests
| Mechanism | Test module | Tests |
|---|---|---|
| AuditChain / ledger | tests/test_integrity.py | [n] |
| Crypto (Ed25519, HMAC, canonical) | tests/test_crypto.py | [n] |
| Trust Plane (envelope, PoP, meters, drift, replay, attested state) | tests/test_trust_plane.py | 43 |
| Cost meter (Decimal) | tests/test_cost.py | [n] |
| Differentials | tests/test_*_differential.py | [n] |
| **Total** | | **314** |

## 4. Proof — run it yourself
```
python -m pytest -q                              # 314 passed
python platform/kernel/prove_trust_plane.py      # 29/29 scenarios, signed attestation
python ledger_verify.py <any ledger>.jsonl       # VALID / INVALID (public verifier)
```
[PASTE REAL OUTPUT CAPTURE HERE]

## 5. Versions
- **3.5.2** — ledger-attested state (LtHash-style lattice for large tables, periodic full verify), signed operator orders, fixed-width timestamps, proof-window bound (300 s), ReplayLab.counterfactual.
- **3.5.1** — per-request proof-of-possession, signature domains, SQLite trust state, revocation, anchor rotation.
- **3.5.0** — Trust Plane: A2A envelope, AuthorityMeter, DriftSentinel, ReplayCapsule, EvidenceBridge, ACS adapter (fail-closed).

## 6. Limits, in writing
No SOC 2 / ISO 27001 certification. Integration boundary for the OWASP Agent Control Standard — **no conformance claim**.
Evidence export uses the OpenTelemetry GenAI semantic conventions, which are still in Development status.
No performance figure is published that we have not measured and cannot reproduce for you.

## 7. Delivered packages (3.5.2) — SHA-256
| Package | SHA-256 |
|---|---|
| QEC_aws_delivered_v3.5.2.zip | [64 hex] |
| QEC_google_delivered_v3.5.2.zip | [64 hex] |
| QEC_anthropic_delivered_v3.5.2.zip | [64 hex] |
| QEC_ibm_delivered_v3.5.2.zip | [64 hex] |
| QEC_servicenow_delivered_v3.5.2.zip | [64 hex] |
| QEC_salesforce_delivered_v3.5.2.zip | [64 hex] |
| QEC_sap_delivered_v3.5.2.zip | [64 hex] |

## 8. Licensing
Evaluation licence (30 days, non-production, Ed25519-signed) · OEM Embedded / Platform · Sovereign (perpetual, escrow).
contact@quantumexcellium.com · Quantum Excellium L.L.C. (Wyoming) · six patent applications filed with INPI (not granted).
