#!/usr/bin/env python3
"""Trim fonts.css to needed subsets (cyrillic + latin) and place into src/app/."""
import re

src = "/home/z/my-project/public/fonts/fonts.css"
dst = "/home/z/my-project/src/app/fonts.css"

css = open(src).read()
keep = {"cyrillic", "cyrillic-ext", "latin", "latin-ext"}

parts = re.split(r"(/\*\s*[a-z0-9-]+\s*\*/)", css)
out = []
subset = ""
for part in parts:
    m = re.match(r"/\*\s*([a-z0-9-]+)\s*\*/", part)
    if m:
        subset = m.group(1)
        if subset in keep:
            out.append(part)
        continue
    if "@font-face" in part and subset in keep:
        out.append(part)

open(dst, "w").write("".join(out))
n = "".join(out).count("@font-face")
print(f"kept {n} @font-face blocks -> {dst}")
