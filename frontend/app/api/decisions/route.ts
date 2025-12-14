import { NextResponse } from 'next/server';

export async function GET() {
  const decisions = [
    {
      id: 1,
      pr: '#142',
      decision: 'Approved',
      confidence: 94,
      timestamp: new Date().toISOString(),
      reasoning: 'Small change, high test coverage, trusted author'
    },
    {
      id: 2,
      pr: '#141',
      decision: 'Review Required',
      confidence: 67,
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      reasoning: 'Large refactor, needs senior review'
    },
    {
      id: 3,
      pr: '#140',
      decision: 'Approved',
      confidence: 91,
      timestamp: new Date(Date.now() - 7200000).toISOString(),
      reasoning: 'Bug fix with comprehensive tests'
    }
  ];

  return NextResponse.json(decisions);
}