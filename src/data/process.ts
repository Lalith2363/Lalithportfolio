export interface ProcessStep {
  id: string
  index: string
  title: string
  body: string
  artifacts: string[]
}

/* How a security vulnerability or threat model is identified, analyzed, and mitigated. */
export const processSteps: ProcessStep[] = [
  {
    id: 'recon',
    index: '01',
    title: 'Recon & Discover',
    body:
      'Map the target surface and gather network intelligence using active tools like Nmap and passive OSINT methods. Identifying open ports, protocol deviations, and exposed perimeter boundaries before adversaries do.',
    artifacts: ['Attack surface map', 'Port scan telemetry', 'Exposure inventory'],
  },
  {
    id: 'analyze',
    index: '02',
    title: 'Model & Analyze',
    body:
      'Inspect traffic flows with Wireshark and examine system logs. Extract statistical features from packet headers and payload anomalies to feed into custom machine learning anomaly detectors.',
    artifacts: ['Feature extraction', 'Protocol anomaly baseline', 'Threat matrix'],
  },
  {
    id: 'detect',
    index: '03',
    title: 'Train & Detect',
    body:
      'Train, fine-tune, and benchmark machine learning models (CNN, LSTM, SVM, Random Forest) against diverse threat datasets to catch evasive malware and zero-day deviations that rule-based systems overlook.',
    artifacts: ['Trained ML weights', 'Confusion matrix', 'ROC-AUC benchmark'],
  },
  {
    id: 'remediate',
    index: '04',
    title: 'Harden & Mitigate',
    body:
      'Synthesize security findings into prioritized defensive configurations, automated alert rules, firewall filters, and patch guidance to eliminate the attack vector cleanly.',
    artifacts: ['Mitigation playbook', 'Firewall rules', 'Hardening report'],
  },
  {
    id: 'verify',
    index: '05',
    title: 'Audit & Validate',
    body:
      'Perform continuous verification through repeated scans, automated regression scripts, and simulated exploit attempts to ensure defenses remain resilient over time.',
    artifacts: ['Pen-test validation', 'Post-patch scan', 'Compliance sign-off'],
  },
]
