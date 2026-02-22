// Each activity has a stable baseId. When used in the feed, a unique instance ID is generated.
export const activities = [
  // Research Phase
  { baseId: 'r1',  icon: '🔍', text: 'Scanned 42 Reddit threads for "SaaS churn" pain points', time: '2m ago', category: 'research' },
  { baseId: 'r2',  icon: '🎯', text: 'High-intent lead found in r/IndieHackers: "Looking for better outreach..."', time: '4m ago', category: 'research' },
  { baseId: 'r3',  icon: '📡', text: 'Competitor frustration signal detected on Twitter — preparing counter-narrative', time: '9m ago', category: 'research' },
  { baseId: 'r4',  icon: '⚡', text: 'Deep Scan: Mapped LinkedIn founders struggling with outbound sales', time: '14m ago', category: 'research' },
  { baseId: 'r5',  icon: '🔎', text: 'Monitoring 127 Product Hunt discussions for high-intent conversations', time: '19m ago', category: 'research' },
  { baseId: 'r6',  icon: '📊', text: 'Intent analysis: 5 high-value leads surfaced in r/startups', time: '25m ago', category: 'research' },
  { baseId: 'r7',  icon: '🎯', text: 'Found founder asking about cold email tools on Twitter — preparing outreach', time: '31m ago', category: 'research' },
  { baseId: 'r8',  icon: '🔍', text: 'Cross-referenced 18 LinkedIn profiles with company blogs for context', time: '38m ago', category: 'research' },
  { baseId: 'r9',  icon: '📡', text: 'Signal: Startup founder posted about growth challenges — high match score', time: '45m ago', category: 'research' },
  { baseId: 'r10', icon: '⚡', text: 'Scanned 15 Slack communities for relevant pain point threads', time: '52m ago', category: 'research' },
  { baseId: 'r11', icon: '🎯', text: 'CEO discussing sales process in LinkedIn comments — intent score 8.7/10', time: '1h ago', category: 'research' },
  { baseId: 'r12', icon: '🔎', text: 'Deep dive: Analyzing Twitter threads about execution paralysis in founders', time: '1h 10m ago', category: 'research' },
  { baseId: 'r13', icon: '📊', text: 'Pattern detected: 8 founders asked about outreach automation today', time: '1h 22m ago', category: 'research' },
  { baseId: 'r14', icon: '🔍', text: 'Research complete: Built full context profile for fintech SaaS founder', time: '1h 35m ago', category: 'research' },
  { baseId: 'r15', icon: '📡', text: 'Live monitoring: Tracking competitor mentions across 6 platforms', time: '1h 48m ago', category: 'research' },
  { baseId: 'r16', icon: '⚡', text: 'Opportunity surfaced: Product Hunt discussion about customer acquisition', time: '2h ago', category: 'research' },
  { baseId: 'r17', icon: '🎯', text: 'Intent score 9.2/10: Perfect-fit lead found in r/SaaS', time: '2h 12m ago', category: 'research' },
  { baseId: 'r18', icon: '🔍', text: 'Background task: Analyzing recent blog posts from 5 target companies', time: '2h 28m ago', category: 'research' },
  { baseId: 'r19', icon: '📊', text: 'Sentiment scan: Frustration with current tools detected in 12 threads', time: '2h 40m ago', category: 'research' },
  { baseId: 'r20', icon: '🔎', text: 'Mapped decision-makers at 5 target companies using public signals', time: '2h 55m ago', category: 'research' },

  // Execution Phase
  { baseId: 'e1',  icon: '✍️', text: 'Draft ready: Personalized reply prepared for Product Hunt discussion', time: '1m ago', category: 'execution' },
  { baseId: 'e2',  icon: '✉️', text: 'Context built: Cross-referenced lead\'s recent blog post for outreach', time: '6m ago', category: 'execution' },
  { baseId: 'e3',  icon: '🤖', text: 'Ready to launch: 3 cold emails drafted based on event "Launch Week"', time: '20m ago', category: 'execution' },
  { baseId: 'e4',  icon: '✅', text: 'Match scored: Reddit thread rated 9.4/10 for your value proposition', time: '28m ago', category: 'execution' },
  { baseId: 'e5',  icon: '📝', text: 'LinkedIn DM prepared — personalized intro referencing lead\'s latest post', time: '35m ago', category: 'execution' },
  { baseId: 'e6',  icon: '⚡', text: '5 opportunities queued with full context and one-click drafts ready', time: '43m ago', category: 'execution' },
  { baseId: 'e7',  icon: '✍️', text: 'Smart draft: Incorporated lead\'s recent tweet directly into message', time: '50m ago', category: 'execution' },
  { baseId: 'e8',  icon: '🎯', text: 'WhatsApp message drafted for warm lead — awaiting your approval', time: '1h 3m ago', category: 'execution' },
  { baseId: 'e9',  icon: '✉️', text: '3-touch email sequence prepared for qualified lead — ready to send', time: '1h 17m ago', category: 'execution' },
  { baseId: 'e10', icon: '📧', text: 'Context-aware draft: Referenced lead\'s GitHub activity for authentic hook', time: '1h 30m ago', category: 'execution' },
  { baseId: 'e11', icon: '⚡', text: 'Time-sensitive opportunity prepared — expires in 4 hours', time: '1h 45m ago', category: 'execution' },
  { baseId: 'e12', icon: '✍️', text: 'Personalization complete: Message adapted to match lead\'s communication style', time: '2h 2m ago', category: 'execution' },
  { baseId: 'e13', icon: '🤖', text: 'Auto-research: Full background dossier built for high-priority lead', time: '2h 18m ago', category: 'execution' },
  { baseId: 'e14', icon: '📝', text: 'A/B tested subject lines prepared — top performer identified', time: '2h 35m ago', category: 'execution' },
  { baseId: 'e15', icon: '✅', text: 'All 10 daily opportunities prepared, scored, and queued for review', time: '3h ago', category: 'execution' },

  // Growth Phase
  { baseId: 'g1',  icon: '🎭', text: 'Practice Mode: User completed hard ghosting simulation — ready for real rejections', time: '3m ago', category: 'growth' },
  { baseId: 'g2',  icon: '🔥', text: 'Streak alert: Founder hit 7-day execution streak — momentum building', time: '8m ago', category: 'growth' },
  { baseId: 'g3',  icon: '💬', text: 'AI Coach: Answered "How do I follow up after a week of silence?"', time: '13m ago', category: 'growth' },
  { baseId: 'g4',  icon: '📈', text: 'Momentum: Founder customized and launched AI draft in 6 seconds', time: '22m ago', category: 'growth' },
  { baseId: 'g5',  icon: '🛡️', text: 'Resilience training: 3 realistic rejection scenarios completed', time: '30m ago', category: 'growth' },
  { baseId: 'g6',  icon: '🎯', text: 'Learning applied: AI adapted messaging based on feedback from yesterday', time: '38m ago', category: 'growth' },
  { baseId: 'g7',  icon: '⚡', text: 'Quick win: Founder executed outreach in 8 seconds — new personal record', time: '46m ago', category: 'growth' },
  { baseId: 'g8',  icon: '💪', text: 'Skill building: Advanced objection handling practice session complete', time: '55m ago', category: 'growth' },
  { baseId: 'g9',  icon: '🎭', text: 'Simulation: Handled 5 different prospect response types in one session', time: '1h 6m ago', category: 'growth' },
  { baseId: 'g10', icon: '📊', text: 'Progress tracked: Reply rate improved from 24% to 51% this week', time: '1h 20m ago', category: 'growth' },
  { baseId: 'g11', icon: '🔥', text: 'Consistency win: 14-day execution streak maintained across 3 platforms', time: '1h 33m ago', category: 'growth' },
  { baseId: 'g12', icon: '💬', text: 'AI Coach: Provided follow-up strategy for a lead who went cold', time: '1h 48m ago', category: 'growth' },
  { baseId: 'g13', icon: '🎯', text: 'Personalization improved: AI learned founder\'s preferred outreach style', time: '2h 5m ago', category: 'growth' },
  { baseId: 'g14', icon: '📈', text: 'Milestone: 100th message sent via Clutch — reply rate holding at 48%', time: '2h 22m ago', category: 'growth' },
  { baseId: 'g15', icon: '⚡', text: 'Feedback loop: Research adjusted based on founder\'s industry signals', time: '2h 40m ago', category: 'growth' },
];

let _counter = 0;

// Returns a random activity with a guaranteed-unique instance ID
export function getRandomActivity() {
  const activity = activities[Math.floor(Math.random() * activities.length)];
  _counter += 1;
  return { ...activity, id: `${activity.baseId}-${Date.now()}-${_counter}` };
}

// Seed the initial feed with unique instance IDs
export function getInitialActivities(count = 5) {
  // Pick a spread across categories for variety
  const seed = [
    activities.find(a => a.baseId === 'e1'),
    activities.find(a => a.baseId === 'r2'),
    activities.find(a => a.baseId === 'g2'),
    activities.find(a => a.baseId === 'e4'),
    activities.find(a => a.baseId === 'r6'),
  ].slice(0, count);

  return seed.map((a, i) => ({ ...a, id: `${a.baseId}-init-${i}` }));
}

export function getActivitiesByCategory(category) {
  return activities.filter(a => a.category === category);
}
