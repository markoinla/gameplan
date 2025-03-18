@echo off
REM Script to run the MCP server with proper environment setup on Windows

REM Set required environment variables
set PYTHONUNBUFFERED=1
set PYTHONIOENCODING=utf-8
set GAMEPLAN_BASE_URL=http://127.0.0.1:5001

REM Ensure we have requests installed
echo Installing required dependencies...
python "%~dp0install_dependencies.py"
if %ERRORLEVEL% NEQ 0 (
    echo Failed to install dependencies. Attempting to continue anyway.
)

REM Run the MCP server
echo Starting MCP server...
python "%~dp0mcp\new_mcp_server.py"