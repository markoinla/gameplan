#!/bin/bash

# Build Tailwind CSS Script for BTG
# This script compiles Tailwind CSS using the standalone CLI
# It can be run in either development (watch) mode or production mode

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Default mode is development
MODE="development"

# Parse command line arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --prod|--production) MODE="production" ;;
        --watch) WATCH="--watch" ;;
        --help) 
            echo -e "${BLUE}BTG Tailwind CSS Build Script${NC}"
            echo "Usage: ./build_tailwind.sh [options]"
            echo ""
            echo "Options:"
            echo "  --prod, --production    Build for production (minified)"
            echo "  --watch                 Watch for changes and rebuild"
            echo "  --help                  Show this help message"
            exit 0
            ;;
        *) echo "Unknown parameter: $1"; exit 1 ;;
    esac
    shift
done

# Set input and output paths
INPUT_FILE="app/static/css/tailwind/input.css"
OUTPUT_FILE="app/static/css/tailwind.css"

# Build command with appropriate flags
if [ "$MODE" = "production" ]; then
    echo -e "${GREEN}Building Tailwind CSS for production...${NC}"
    MINIFY="--minify"
else
    echo -e "${GREEN}Building Tailwind CSS for development...${NC}"
    MINIFY=""
fi

# Run the Tailwind CLI
./tailwindcss-macos-arm64 \
    --config tailwind.config.js \
    --input $INPUT_FILE \
    --output $OUTPUT_FILE \
    $MINIFY $WATCH

# Check if build was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Tailwind CSS build completed successfully!${NC}"
    echo -e "Output file: ${BLUE}$OUTPUT_FILE${NC}"
else
    echo -e "${RED}Error: Tailwind CSS build failed${NC}"
    exit 1
fi

# If not in watch mode, print completion message
if [ -z "$WATCH" ]; then
    echo -e "${GREEN}Build complete!${NC}"
fi
