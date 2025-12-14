'use client';
import { useState } from 'react';

export default function CliTerminal() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([
    '$ Welcome to Cortex AI CLI',
    '$ Type "help" to see available commands',
  ]);

  const commands: Record<string, string> = {
    'cline status': 'AI Assistant Status\nCline: Active\nKestra: Running (2 workflows)\nOumi: Trained (89% accuracy)\nDashboard: Live',
    'cline analyze': 'Analyzing repository...\nRepository: Cortex-AI\nPRs analyzed: 47\nAverage review time: 12 minutes\nDecision accuracy: 92%',
    'cline review 142': 'Reviewing PR #142...\nFiles changed: 3\nLines added: 45\nLines removed: 12\nTests: Passing\nAI Decision: APPROVED\nConfidence: 94%\nReasoning: Small change, high test coverage, trusted author',
    'cline predict': 'Prediction Analysis\nPR #143 merge probability: 87%\n⏱Estimated review time: 8 minutes\nRecommended reviewer: senior-dev\nPotential conflicts: None detected',
    'cline insights': 'AI-Generated Insights\n• 15.5 hours saved this week\n• Code quality improved 12% this month\n• Most productive day: Tuesday\n• Deployment success rate: 96%',
    'help': 'Available commands:\n  cline status    - Show system status\n  cline analyze   - Analyze repository\n  cline review    - Review specific PR\n  cline predict   - Predict PR outcomes\n  cline insights  - Get AI insights\n  clear          - Clear terminal',
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = command.trim();
    
    if (cmd === 'clear') {
      setOutput(['$ Terminal cleared']);
    } else {
      const result = commands[cmd] || `Command not found: ${cmd}. Type "help" for available commands.`;
      setOutput([...output, `$ ${cmd}`, result]);
    }
    
    setCommand('');
    
    // Auto-scroll
    setTimeout(() => {
      const terminal = document.getElementById('terminal-output');
      if (terminal) terminal.scrollTop = terminal.scrollHeight;
    }, 0);
  };

  return (
    <div className="bg-gray-950 rounded-lg border border-gray-800 p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-sm text-gray-400">Cortex AI Terminal</span>
      </div>
      
      <div 
        id="terminal-output"
        className="bg-black/50 rounded p-4 h-64 overflow-y-auto font-mono text-sm mb-4"
      >
        {output.map((line, i) => (
          <div key={i} className={line.startsWith('$') ? 'text-green-400' : 'text-gray-300'}>
            {line}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleCommand} className="flex gap-2">
        <div className="flex-1 flex items-center bg-black/50 rounded px-3">
          <span className="text-green-400 mr-2">$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-1 bg-transparent text-white outline-none py-2 font-mono"
            placeholder="Type a command..."
            autoFocus
          />
        </div>
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold"
        >
          Run
        </button>
      </form>
    </div>
  );
}