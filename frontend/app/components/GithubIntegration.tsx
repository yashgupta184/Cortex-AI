'use client';

const statusStyles: Record<string, { dot: string; pill: string; text: string }> = {
  green: { dot: 'bg-emerald-500', pill: 'bg-emerald-500/20', text: 'text-emerald-400' },
  purple: { dot: 'bg-purple-500', pill: 'bg-purple-500/20', text: 'text-purple-400' },
};

export default function GitHubIntegration() {
  const recentPRs = [
    { number: 142, title: 'Add Kestra workflows', author: 'yashgupta184', status: 'approved', color: 'green' },
    { number: 141, title: 'Setup Oumi training', author: 'yashgupta184', status: 'approved', color: 'green' },
    { number: 140, title: 'Create dashboard', author: 'yashgupta184', status: 'merged', color: 'purple' },
  ];

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">GitHub Integration</h3>
        <a 
          href="https://github.com/yashgupta184/Cortex-AI" 
          target="_blank"
          className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
        >
          View Repository →
        </a>
      </div>
      
      <div className="space-y-3">
        {recentPRs.map((pr) => {
          const style = statusStyles[pr.color] ?? statusStyles.green;
          return (
            <div key={pr.number} className="flex items-center justify-between p-3 bg-gray-800/50 rounded border border-gray-700">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${style.dot}`}></div>
                <div>
                  <div className="font-semibold">#{pr.number} {pr.title}</div>
                  <div className="text-sm text-gray-400">by {pr.author}</div>
                </div>
              </div>
              <span className={`text-sm px-3 py-1 rounded ${style.pill} ${style.text}`}>
                {pr.status}
              </span>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-green-500">47</div>
          <div className="text-sm text-gray-400">PRs Analyzed</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-500">2</div>
          <div className="text-sm text-gray-400">Active Workflows</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-purple-500">92%</div>
          <div className="text-sm text-gray-400">Code Quality</div>
        </div>
      </div>
    </div>
  );
}