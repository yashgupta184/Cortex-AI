'use client';
import { useEffect, useState } from 'react';

interface Activity {
  id: number;
  type: 'pr' | 'decision' | 'workflow' | 'training';
  message: string;
  timestamp: string;
  icon: string;
}

export default function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([
    { id: 1, type: 'decision', message: 'AI approved PR #142 with 94% confidence', timestamp: '2 min ago', icon: '✅' },
    { id: 2, type: 'workflow', message: 'Kestra workflow executed successfully', timestamp: '5 min ago', icon: '⚙️' },
    { id: 3, type: 'pr', message: 'New PR #143 detected - analyzing...', timestamp: '8 min ago', icon: '🔍' },
    { id: 4, type: 'training', message: 'Model retrained - accuracy improved to 89%', timestamp: '15 min ago', icon: '🧠' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity: Activity = {
        id: Date.now(),
        type: ['pr', 'decision', 'workflow'][Math.floor(Math.random() * 3)] as any,
        message: [
          'AI reviewed PR #' + (140 + Math.floor(Math.random() * 20)),
          'Workflow execution completed',
          'Code quality check passed',
          'Deployment triggered to staging',
        ][Math.floor(Math.random() * 4)],
        timestamp: 'Just now',
        icon: ['✅', '⚙️', '🔍', '🚀'][Math.floor(Math.random() * 4)],
      };
      
      setActivities(prev => [newActivity, ...prev].slice(0, 8));
    }, 10000); // New activity every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
      <h3 className="text-xl font-bold mb-4">Live Activity Feed</h3>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {activities.map((activity, index) => (
          <div 
            key={activity.id}
            className="flex items-start gap-3 p-3 bg-gray-800/50 rounded border border-gray-700 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="text-2xl">{activity.icon}</span>
            <div className="flex-1">
              <p className="text-sm text-gray-300">{activity.message}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}