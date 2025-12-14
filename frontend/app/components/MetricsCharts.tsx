'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { time: '00:00', decisions: 5, accuracy: 87 },
  { time: '04:00', decisions: 8, accuracy: 88 },
  { time: '08:00', decisions: 15, accuracy: 89 },
  { time: '12:00', decisions: 23, accuracy: 91 },
  { time: '16:00', decisions: 35, accuracy: 92 },
  { time: '20:00', decisions: 42, accuracy: 92 },
  { time: '24:00', decisions: 47, accuracy: 89 },
];

export default function MetricsChart() {
  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
      <h3 className="text-xl font-bold mb-4">AI Performance Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="time" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
            labelStyle={{ color: '#F3F4F6' }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="decisions" 
            stroke="#3B82F6" 
            strokeWidth={2}
            name="Decisions Made"
          />
          <Line 
            type="monotone" 
            dataKey="accuracy" 
            stroke="#10B981" 
            strokeWidth={2}
            name="Accuracy %"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}