export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cortex AI - Development Intelligence Platform</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="text-gray-400 text-sm mb-2">Active Workflows</div>
            <div className="text-3xl font-bold">2</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="text-gray-400 text-sm mb-2">AI Decisions Made</div>
            <div className="text-3xl font-bold">47</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="text-gray-400 text-sm mb-2">Code Quality Score</div>
            <div className="text-3xl font-bold">92%</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="text-gray-400 text-sm mb-2">Time Saved</div>
            <div className="text-3xl font-bold">15.5h</div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent AI Decisions</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div>
                <div className="font-semibold">PR #142</div>
                <div className="text-sm text-gray-400">Small change, high test coverage</div>
              </div>
              <div className="text-right">
                <div className="text-green-500 font-semibold">Approved</div>
                <div className="text-sm text-gray-400">94% confidence</div>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div>
                <div className="font-semibold">PR #141</div>
                <div className="text-sm text-gray-400">Large refactor detected</div>
              </div>
              <div className="text-right">
                <div className="text-yellow-500 font-semibold">Review Required</div>
                <div className="text-sm text-gray-400">67% confidence</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">PR #140</div>
                <div className="text-sm text-gray-400">Bug fix with tests</div>
              </div>
              <div className="text-right">
                <div className="text-green-500 font-semibold">Approved</div>
                <div className="text-sm text-gray-400">91% confidence</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Cline CLI</span>
                <span className="text-green-500">● Active</span>
              </div>
              <div className="flex justify-between">
                <span>Kestra Workflows</span>
                <span className="text-green-500">● Running</span>
              </div>
              <div className="flex justify-between">
                <span>Oumi Model</span>
                <span className="text-green-500">● Trained</span>
              </div>
              <div className="flex justify-between">
                <span>CodeRabbit</span>
                <span className="text-green-500">● Monitoring</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-4">Model Performance</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Accuracy</span>
                  <span className="text-sm">89%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '89%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Decision Confidence</span>
                  <span className="text-sm">84%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '84%'}}></div>
                </div>
              </div>
              <div className="text-sm text-gray-400 mt-4">
                Training samples: 100 | Loss: 0.23
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}