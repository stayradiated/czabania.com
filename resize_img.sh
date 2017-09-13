#!/usr/bin/env zsh

for file in ./static/source/*
do
  outfile=`basename $file`
  echo convert "'$file'" -resize 640x854 "'static/img/$outfile'"
done | gm batch -echo on -feedback on -
