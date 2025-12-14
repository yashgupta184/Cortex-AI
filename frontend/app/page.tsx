'use client';

import { useState } from 'react';
import {
  Brain,
  Bot,
  Zap,
  CheckCircle,
  Clock,
  FileCode,
  GraduationCap,
  Settings,
  Bell,
  Info,
  BarChart3
} from 'lucide-react';

interface Decision {
  prNumber: number;
  decision: 'Approve' | 'Review' | 'Reject';
  confidence: number;
  timestamp: string;
}

interface Activity {
  id: number;
  type: string;
  message: string;
  timestamp: string;
}

export default function Dashboard() {
  const [decisions] = useState<Decision[]>([
    { prNumber: 124, decision: 'Approve', confidence: 95, timestamp: '2 hours ago' },
    { prNumber: 123, decision: 'Review', confidence: 78, timestamp: '4 hours ago' },
    { prNumber: 122, decision: 'Approve', confidence: 92, timestamp: '6 hours ago' },
    { prNumber: 121, decision: 'Reject', confidence: 88, timestamp: '8 hours ago' },
    { prNumber: 120, decision: 'Approve', confidence: 96, timestamp: '10 hours ago' },
  ]);

  const [activities] = useState<Activity[]>([
    { id: 1, type: 'PR', message: 'PR #124 automatically approved with 95% confidence', timestamp: '2 hours ago' },
    { id: 2, type: 'Training', message: 'AI model retrained with 500 new code samples', timestamp: '3 hours ago' },
    { id: 3, type: 'PR', message: 'PR #123 flagged for manual review', timestamp: '4 hours ago' },
    { id: 4, type: 'Workflow', message: 'Code quality check completed successfully', timestamp: '5 hours ago' },
    { id: 5, type: 'PR', message: 'PR #122 approved and merged', timestamp: '6 hours ago' },
    { id: 6, type: 'Alert', message: 'Code quality score improved by 3%', timestamp: '7 hours ago' },
  ]);

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

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'PR': return FileCode;
      case 'Training': return GraduationCap;
      case 'Workflow': return Settings;
      case 'Alert': return Bell;
      default: return Info;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center space-x-4">
          <Brain className="w-10 h-10 text-purple-400" />
          <div>
            <h1 className="text-3xl font-bold text-white">Cortex AI</h1>
            <p className="text-gray-400 text-sm mt-1">Development Intelligence Platform</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        {/* Activity Feed */}
        <div className="mt-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-blue-400" /> Activity Feed
          </h2>

          <div className="space-y-3">
            {activities.map((a) => {
              const Icon = getActivityIcon(a.type);
              return (
                <div key={a.id} className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg">
                  <Icon className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-gray-200">{a.message}</p>
                    <p className="text-gray-500 text-xs">{a.timestamp}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

