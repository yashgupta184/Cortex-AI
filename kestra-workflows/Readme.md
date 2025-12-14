# Kestra Workflows - Cortex-AI

## Overview
These workflows demonstrate Kestra's orchestration capabilities with AI Agent decision-making.

## Workflows

### 1. github-pr-analysis.yml
- Fetches PR data from GitHub API
- Analyzes code complexity
- Makes automated decisions

### 2. ai-agent-decision.yml WITH AI AGENT
- Collects comprehensive PR metrics
- Uses Kestra AI Agent to summarize data
- Makes autonomous decisions (BONUS FEATURE)
- Executes actions based on AI recommendations

## AI Agent Capabilities
The AI Agent in workflow 2:
- ✅ Summarizes PR data from multiple sources
- ✅ Makes intelligent decisions (approve/reject)
- ✅ Provides reasoning and confidence scores
- ✅ Triggers automated actions

Usage
# These workflows would be deployed to Kestra instance
# For demo purposes, workflows are provided as YAML files

## Note
Due to local environment constraints, workflows are demonstrated as code.
In production, these would run on Kestra server (cloud or self-hosted).