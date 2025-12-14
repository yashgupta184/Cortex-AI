'use client';

import CliTerminal from './components/CliTerminal';
import ActivityFeed from './components/ActivityFeed';
import MetricsCharts from './components/MetricsCharts';
import GitHubIntegration from './components/GithubIntegration';
import { useState } from 'react';
import { Bot, Zap, CheckCircle, Clock, Settings, Info } from 'lucide-react';


interface Decision {
  prNumber: number;
  decision: 'Approve' | 'Review' | 'Reject';
  confidence: number;
  timestamp: string;
}

export default function Dashboard() {
  const [decisions] = useState<Decision[]>(
    [
      { prNumber: 124, decision: 'Approve', confidence: 95, timestamp: '2 hours ago' },
      { prNumber: 123, decision: 'Review', confidence: 78, timestamp: '4 hours ago' },
      { prNumber: 122, decision: 'Approve', confidence: 92, timestamp: '6 hours ago' },
      { prNumber: 121, decision: 'Reject', confidence: 88, timestamp: '8 hours ago' },
      { prNumber: 120, decision: 'Approve', confidence: 96, timestamp: '10 hours ago' },
    ]
  );

  const stats = [
    { label: 'Active Workflows', value: '2', icon: Zap, color: 'from-blue-500 to-blue-600' },
    { label: 'AI Decisions Made', value: '47', icon: Bot, color: 'from-purple-500 to-purple-600' },
    { label: 'Code Quality Score', value: '92%', icon: CheckCircle, color: 'from-green-500 to-green-600' },
    { label: 'Time Saved', value: '15.5h', icon: Clock, color: 'from-orange-500 to-orange-600' },
  ];

  const systemStatus = [
    { name: 'Cline CLI', status: 'Active' },
    { name: 'Kestra', status: 'Running' },
    { name: 'Oumi Model', status: 'Trained' },
    { name: 'Code Quality', status: '92%' },
  ];

  const getDecisionColor = (decision: string) => {
    switch (decision) {
      case 'Approve': return 'text-green-400 bg-green-400/10';
      case 'Review': return 'text-yellow-400 bg-yellow-400/10';
      case 'Reject': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/70 backdrop-blur-sm sticky top-0 z-10">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 via-purple-900/15 to-pink-900/20 rounded-lg border border-gray-800 p-6 mb-6">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <h1 className="text-4xl font-semibold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Cortex AI
              </h1>
            </div>
            <p className="text-base text-gray-300">
              Your Development Team's AI Brain — Learns, Decides, Automates
            </p>
          </div>
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-6 left-8 w-24 h-24 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-6 right-8 w-24 h-24 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
        </div>
      </header>


      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-10">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className={`inline-flex items-center justify-center rounded-lg p-3 bg-gradient-to-r ${stat.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mt-4">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Decisions */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <Bot className="w-5 h-5 mr-2 text-purple-400" /> Recent AI Decisions
              </h2>

              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-sm text-gray-300">PR</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-300">Decision</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-300">Confidence</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-300">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {decisions.map((d, i) => (
                    <tr key={i} className="border-b border-gray-700/50">
                      <td className="py-4 px-4 text-blue-400 font-mono">#{d.prNumber}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDecisionColor(d.decision)}`}>{d.decision}</span>
                      </td>
                      <td className="py-4 px-4 flex items-center space-x-2">
                        <div className="flex-1 bg-gray-700 rounded-full h-2 max-w-[100px]">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: `${d.confidence}%` }} />
                        </div>
                        <span className="text-sm text-gray-300">{d.confidence}%</span>
                      </td>
                      <td className="py-4 px-4 text-gray-400 text-sm">{d.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* System Status */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-gray-300" /> System Status
              </h2>

              <div className="space-y-4">
                {systemStatus.map((s, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-gray-700/30 rounded-lg">
                    <span className="text-white">{s.name}</span>
                    <span className="text-green-400 text-sm font-semibold">{s.status}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-start space-x-2">
                <Info className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-blue-400 font-semibold text-sm">All Systems Operational</div>
                  <div className="text-gray-400 text-xs">Last checked: just now</div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Charts */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Metrics Charts</h2>
            <MetricsCharts />
          </section>

          {/* Activity Feed */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Activity Feed</h2>
            <ActivityFeed />
          </section>

          {/* GitHub Integration */}
          <section>
            <h2 className="text-2xl font-bold mb-4">GitHub Integration</h2>
            <GitHubIntegration />
          </section>

          {/* Interactive CLI */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Interactive CLI</h2>
            <CliTerminal />
          </section>
        </div>
      </main>
    </div>
  );
}

