# Quantum Excellium Core (QEC) 3.5.2 — governed runtime for AI agents

> Public product and evidence sheet. The QEC Local Core is licensed software and is not published in this repository.
> Public repositories provide executable demonstrations, verification tools, architecture documentation and evaluation material.

## 1. What QEC is

QEC is a governance runtime positioned between an AI agent and its tools.

Its control model is:

**Intent → Policy & Governance → Authority / Delegation Bounds → Controlled Tool Execution → Runtime Integrity → Evidence / Audit**

Before execution, QEC can evaluate policy, authority, delegated permissions and budget constraints. Decisions are recorded as verifiable evidence so that allowed and refused actions can be audited independently.

The licensed runtime includes exact-decimal cost controls, signed agent-to-agent delegation, runtime-integrity mechanisms and cryptographically chained evidence.

## 2. Core mechanisms

- **Policy-before-execution** — tool actions are evaluated before execution rather than audited only afterwards.
- **Exact-decimal budget metering** — monetary limits use decimal arithmetic and explicit ceilings.
- **Non-escalating delegation** — delegated authority cannot exceed the authority held by the parent agent.
- **Signed delegation and proof of possession** — licensed-runtime authority exchanges use Ed25519-based mechanisms.
- **Runtime integrity** — configuration drift and trust-state changes are controlled and evidenced.
- **Verifiable audit trail** — decisions are written to a SHA-256 chained ledger that can be checked independently.
- **Replay and evidence tooling** — evaluation material supports replay, verification and investigation of governed decisions.

## 3. Evidence status

### Licensed QEC 3.5.2 runtime

The validated QEC 3.5.2 suite comprises:

- **314 automated tests**
- **29/29 Trust Plane adversarial scenarios**

The licensed runtime is not published in this repository. These tests are reproduced with the controlled evaluation package supplied to an evaluator.

### Public evidence

The public GitHub repositories provide independently runnable evidence:

- `qec-governed-agent-demo` — the same agent executed without governance and then with governance, including adversarial tests and a verifiable ledger.
- `ledger-verify` — independent verification of intact and tampered chained JSONL ledgers.
- `qec-demo-agents` — seven platform-oriented scenarios exercised against the public demonstration layer.
- `qec-overview` — architecture, evaluation guide, threat model, control mapping, documented limits and reproducible public-shim benchmark.

Public demonstration code is a **shim implementing public control semantics**. It is not the licensed QEC Local Core.

## 4. Public reproduction

Governed-agent demonstration:

```bash
git clone https://github.com/Quantum-Architecture/qec-governed-agent-demo
cd qec-governed-agent-demo
python -m unittest -q test_demo
python demo.py
```

Ledger verifier:

```bash
git clone https://github.com/Quantum-Architecture/ledger-verify
cd ledger-verify
python -m unittest -q test_ledger_verify
```

Platform-oriented demonstration scenarios:

```bash
git clone https://github.com/Quantum-Architecture/qec-demo-agents
cd qec-demo-agents
python -m unittest -q test_scenarios
```

Evaluation documentation:

https://github.com/Quantum-Architecture/qec-overview

## 5. Licensed-runtime evaluation

Inside an authorised QEC 3.5.2 evaluation package, the principal proof commands are:

```text
python -m pytest -q
# validated suite: 314 automated tests

python platform/kernel/prove_trust_plane.py
# validated result: 29/29 Trust Plane adversarial scenarios
```

The corresponding runtime source and licensed integration components are not part of the public GitHub distribution.

## 6. QEC 3.5.x evolution

- **3.5.0** — Trust Plane foundation: A2A trust envelope, authority metering, drift controls, replay evidence and integration boundary.
- **3.5.1** — per-request proof of possession, signature domains, durable trust state, revocation and anchor rotation.
- **3.5.2** — strengthened ledger-attested state, signed operator controls, bounded proof windows and extended replay/evidence mechanisms.

## 7. Platform-oriented integration scope

QEC evaluation material includes platform-oriented integration scenarios and bundles covering patterns associated with:

**AWS · Google · Anthropic · IBM · Salesforce · ServiceNow · SAP**

These references describe technical integration targets and scenarios only. They do **not** imply partnership, endorsement or certification by those companies.

## 8. Limits, in writing

QEC does **not** claim SOC 2 certification or ISO 27001 certification.

Quantum Excellium does **not** claim conformance to the OWASP Agent Control Standard. QEC exposes an integration boundary relevant to agent-control architectures.

References to standards or frameworks in public documentation are architectural mappings or self-assessments unless explicitly stated otherwise.

A cryptographic hash chain provides evidence of integrity within its stated trust assumptions; by itself it does not establish external identity, trusted time or the truth of the underlying event.

OpenTelemetry GenAI semantic conventions referenced by the evidence layer remain subject to the status of the upstream specification.

Performance results published by Quantum Excellium are limited to measurements actually performed and documented. Public-shim measurements must not be represented as licensed-runtime benchmarks.

## 9. Delivered-package integrity

SHA-256 values are published only for artefacts that have actually been generated and frozen.

This public sheet intentionally contains **no placeholder package hashes**.

For a licensed evaluation delivery, the evaluator receives the integrity information corresponding to the exact artefacts supplied.

## 10. Licensing and intellectual property

A **30-day, non-production evaluation licence** is available on request.

Commercial models include OEM / embedded, platform and sovereign deployment arrangements.

Quantum Excellium has filed **six patent applications with INPI in 2026**. They are patent applications, not granted patents.

Contact:

**contact@quantumexcellium.com**

Quantum Excellium L.L.C. — Wyoming, United States

---

**Proof, not promises.**

https://quantumexcellium.com/en/proof.html
