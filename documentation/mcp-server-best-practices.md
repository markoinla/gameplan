# MCP Server Best Practices Implementation Guide

## Introduction

This document outlines the best practices implemented in the GamePlan MCP server to ensure reliable, secure, and performant operation. These implementations follow the official MCP documentation guidelines and address common issues encountered in MCP server deployments.

## 1. Error Handling

### Implemented Practices:

- **Standardized Error Format**: All errors follow the MCP standard format with `isError` flag, error codes, and descriptive messages.
- **Traceback Information**: Detailed traceback information is logged but not exposed to clients, preventing information leakage.
- **Resource Cleanup**: All resources are properly cleaned up after errors to prevent memory leaks and zombie processes.
- **Graceful Degradation**: The server attempts to continue operation even after non-critical errors.

### Implementation Details:

```python
def format_error_response(message: str, code: int = 500, data: Any = None) -> Dict[str, Any]:
    """Format an error response according to MCP best practices"""
    return {
        "isError": True,
        "error": {
            "code": code,
            "message": message,
            "data": data
        },
        "content": [
            {
                "type": "text",
                "text": f"Error: {message}"
            }
        ]
    }
```

## 2. Transport Management

### Implemented Practices:

- **Connection Lifecycle Management**: Clear connection lifecycle with proper initialization, message handling, and cleanup.
- **Event-Based Communication**: Using event notifications to signal new data and connection state changes.
- **Timeouts and Watchdog**: Implementing timeouts for operations and a watchdog timer to detect and recover from hangs.
- **Backpressure Handling**: Proper handling of message queues to prevent buffer overflows.

### Implementation Details:

The `StdioTransport` class implements these practices with a robust threading model that includes:

- **Read Thread**: Continuously reads from stdin and signals when new data arrives
- **Keep-Alive Thread**: Periodically sends ping messages during idle periods
- **Watchdog Thread**: Monitors the connection health and resets if necessary
- **Buffer Management**: Thread-safe buffer handling with proper locking

## 3. Message Validation

### Implemented Practices:

- **JSON-RPC Compliance**: Strict validation of messages against the JSON-RPC 2.0 specification.
- **Type Checking**: Validation of parameter types against tool schemas before execution.
- **Required Parameter Checking**: Verification that all required parameters are present.
- **Format Validation**: Ensuring messages have the correct structure and format.

### Implementation Details:

```python
def _validate_jsonrpc_message(message: Dict[str, Any]) -> bool:
    """Validate a JSON-RPC message"""
    # Check if we have the required jsonrpc version
    if message.get("jsonrpc") != "2.0":
        return False
    
    # Ensure proper format for requests, notifications, and responses
    # ...
```

## 4. Security Measures

### Implemented Practices:

- **Input Sanitization**: Parameters are validated and sanitized before use.
- **Rate Limiting**: Preventing abuse through configurable rate limiting.
- **Error Message Security**: Internal errors are logged but not exposed to clients.
- **Resource Limits**: Configurable limits on resource usage to prevent denial of service.

### Implementation Details:

```python
class RateLimiter:
    """Rate limiter to prevent abuse"""
    
    def __init__(self, max_requests: int, window_seconds: int):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.requests = []
        self.lock = threading.Lock()
    
    def check_rate_limit(self) -> bool:
        """Check if the current request is rate limited"""
        # ...
```

## 5. Logging and Monitoring

### Implemented Practices:

- **Structured Logging**: Consistent log format with severity levels, timestamps, and context.
- **Request Tracing**: Each request has a unique ID for tracing through the system.
- **Health Metrics**: Monitoring of connection health, message volumes, and error rates.
- **Debugging Support**: Detailed logs for debugging issues without exposing sensitive information.

### Implementation Details:

```python
# Start with logging the tool execution request
request_id = f"{int(time.time())}-{hash(tool_name)}"
logger.info(f"[{request_id}] Tool execution request: {tool_name} with parameters: {parameters}")
```

## 6. Configuration Management

### Implemented Practices:

- **Centralized Configuration**: All configurable parameters are defined in a single location.
- **Environment Variables**: Support for configuration via environment variables.
- **Sensible Defaults**: Reasonable default values that work in most environments.
- **Documented Settings**: Clear documentation of configuration options and their effects.

### Implementation Details:

```python
# Configuration settings
CONFIG = {
    "request_timeout": 10.0,      # Overall timeout for requests
    "http_timeout": 5.0,          # HTTP request timeout
    "max_retries": 5,             # Maximum number of retries
    "ping_interval": 15,          # Seconds between keepalive pings
    "max_inactivity": 30,         # Maximum inactivity before potential hang
    "max_empty_inputs": 50,       # Threshold for empty inputs warning
    "rate_limit": {               # Rate limiting settings
        "enabled": True,
        "max_requests": 30,       # Maximum requests per minute
        "window_seconds": 60      # Time window for rate limiting
    }
}
```

## 7. Tool Implementation

### Implemented Practices:

- **Descriptive Tool Definitions**: Clear names, descriptions, and parameter definitions.
- **Parameter Validation**: Comprehensive validation of parameters against schemas.
- **Progress Reporting**: For long-running operations.
- **Focused Operations**: Each tool performs a specific, well-defined function.
- **Documented Return Values**: Clear structure and documentation of return values.

### Implementation Example:

```json
{
    "name": "mcp1_create_issue",
    "description": "Create a new issue in a GitHub repository with specified title, body, and optional parameters.",
    "parameters": {
        "type": "object",
        "properties": {
            "owner": {
                "type": "string",
                "description": "Repository owner (username or organization)"
            },
            "repo": {
                "type": "string",
                "description": "Repository name"
            },
            "title": {
                "type": "string",
                "description": "Issue title"
            },
            "body": {
                "type": "string",
                "description": "Issue description content"
            },
            "assignees": {
                "type": "array",
                "description": "List of usernames to assign to the issue",
                "items": {
                    "type": "string"
                }
            },
            "labels": {
                "type": "array",
                "description": "List of label names to add to the issue",
                "items": {
                    "type": "string"
                }
            },
            "milestone": {
                "type": "number",
                "description": "Milestone ID to add to the issue"
            }
        },
        "required": ["owner", "repo", "title"]
    },
    "examples": [
        {
            "name": "mcp1_create_issue",
            "parameters": {
                "owner": "username",
                "repo": "project",
                "title": "Fix login button",
                "body": "The login button is not working properly on Safari."
            }
        }
    ]
}
```

## 8. Testing and Debugging

### Implemented Practices:

- **Comprehensive Logging**: Detailed logs for all operations.
- **Error Tracking**: Consistent error tracking and reporting.
- **Connection Diagnostics**: Tools to diagnose connection issues.
- **Performance Monitoring**: Tracking of response times and resource usage.

### Testing Strategy:

1. **Functional Tests**: Testing tool execution with valid and invalid inputs.
2. **Integration Tests**: Testing interaction with external systems.
3. **Security Tests**: Testing access control and validation.
4. **Performance Tests**: Testing behavior under load.
5. **Error Handling Tests**: Testing error reporting and recovery.

## Conclusion

Implementing these best practices ensures a robust, reliable, and secure MCP server. The practices are based on the official MCP documentation and real-world experience with MCP deployments.

Regular review and updates to these practices are recommended as the MCP specification evolves and new best practices emerge.
