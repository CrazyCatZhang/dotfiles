#!/usr/bin/env bash

tempDir=/tmp/yabai-tiling-floating-toggle
[ -d $tempDir ] && rm -rf $tempDir
mkdir $tempDir

# JSON array
displays=$(yabai -m query --displays)

# How many displays I am using currently
cnt=$(echo $displays | jq '.|length')

# For each display
for ((i = 0; i < $cnt; i++)); do
	display=$(echo $displays | jq ".[$i]")
	index=$(echo $display | jq ".index") # display index

	# Get the coordinates of top left cornor, the width and the height of the display
	read -r x0 y0 w0 h0 <<<$(echo $(echo $display | jq ".frame" | jq ".x, .y, .w, .h"))

	# Calcuate the width and the height of the window
	if (( $(echo "$h0 > $w0" | bc -l) )); then
		w=$(printf "%.0f" $(echo "$w0 * 10 / 12" | bc -l))
		h=$(printf "%.0f" $(echo "$w * 3 / 4" | bc -l))  # Increased height ratio from 2/3 to 3/4
	else
		h=$(printf "%.0f" $(echo "$h0 * 11 / 12" | bc -l))  # Increased height from 10/12 to 11/12
		w=$(printf "%.0f" $(echo "$h * 3 / 2" | bc -l))
	fi
	windowSize=($(yabai -m query --windows --window | jq '[.frame.w, .frame.h] | map(floor) | map(.+0) | join(",")'))
	IFS=',' read -r width height <<<"${windowSize[0]}"
	echo "Window size: width=$width, height=$height"

	# Calculate the coordinates of the top left corner of the window
	x=$(printf "%.0f" $(echo "$x0 + ($w0 - $w) / 2" | bc -l))
	y=$(printf "%.0f" $(echo "$y0 + ($h0 - $h) / 4" | bc -l))  # Reduced y offset from /2 to /4 to move window up

	# Store these information in a temp file
	cat >/tmp/yabai-tiling-floating-toggle/display-$index <<EOF
  x=$x
  y=$y
  w=$w
  h=$h
EOF

done
