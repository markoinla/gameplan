"""
MCP (Model Context Protocol) package initialization.

This package implements the Model Context Protocol for the GamePlan application,
allowing AI assistants to interact with the application programmatically.
"""
from app.mcp.server import setup_mcp_server

__all__ = ['setup_mcp_server']
