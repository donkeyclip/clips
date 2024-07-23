#!/bin/bash

# Check if a clip name is provided
if [ -z "$1" ]; then
  echo "Usage: npm run create-clip <clipname>"
  exit 1
fi

CLIP_NAME=$1
SOURCE_DIR="clips/landing-page-v2"
TARGET_DIR="clips/$CLIP_NAME"

# Copy the folder
if [ -d "$SOURCE_DIR" ]; then
  cp -r "$SOURCE_DIR" "$TARGET_DIR"
else
  echo "Source directory $SOURCE_DIR does not exist."
  exit 1
fi

# Generate a UUID
UUID=$(uuidgen)

# Update package.json
PACKAGE_JSON="$TARGET_DIR/package.json"
if [ -f "$PACKAGE_JSON" ]; then
  sed -i '' "s/\"name\": \"[^\"]*\"/\"name\": \"$CLIP_NAME\"/" "$PACKAGE_JSON"
  sed -i '' "s/\"id\": \"[^\"]*\"/\"id\": \"$UUID\"/" "$PACKAGE_JSON"
else
  echo "package.json file not found in $TARGET_DIR."
  exit 1
fi

# Run pnpm install
cd "$TARGET_DIR" || exit
pnpm install

echo "Clip $CLIP_NAME created successfully."
