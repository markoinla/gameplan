#!/usr/bin/env python3
"""
Helper script to ensure all dependencies are installed for the MCP server
"""
import subprocess
import sys

def install_package(package):
    """Install a package using pip"""
    try:
        print(f"Installing {package}...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])
        return True
    except subprocess.CalledProcessError:
        print(f"Failed to install {package}")
        return False

def main():
    """Install all required dependencies"""
    required_packages = ["requests", "flask-cors"]
    
    print(f"Python executable: {sys.executable}")
    print("Checking and installing required packages...")
    
    all_success = True
    for package in required_packages:
        success = install_package(package)
        all_success = all_success and success
    
    if all_success:
        print("\nAll dependencies successfully installed!")
        sys.exit(0)
    else:
        print("\nSome dependencies failed to install. Please install them manually:")
        print("pip install requests flask-cors")
        sys.exit(1)

if __name__ == "__main__":
    main()