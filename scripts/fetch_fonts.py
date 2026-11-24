#!/usr/bin/env python3
"""Download Google Fonts (woff2, per-subset) locally and rewrite CSS to local paths."""
import re
import os
import urllib.request

OUT = "/home/z/my-project/public/fonts"
os.makedirs(OUT, exist_ok=True)

CSS_URL = ("https://fonts.googleapis.com/css2?"
           "family=Manrope:wght@400;500;600;700;800&"
           "family=Space+Grotesk:wght@400;500;600;700&display=swap")
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")

req = urllib.request.Request(CSS_URL, headers={"User-Agent": UA})
css = urllib.request.urlopen(req, timeout=60).read().decode("utf-8")

# Map each @font-face to the subset comment preceding it
parts = re.split(r"(/\*\s*[a-z0-9-]+\s*\*/)", css)
out_css = []
n_downloaded = 0

subset = ""
for part in parts:
    m = re.match(r"/\*\s*([a-z0-9-]+)\s*\*/", part)
    if m:
        subset = m.group(1)
        out_css.append(part)
        continue
    if "@font-face" not in part:
        out_css.append(part)
        continue

    face = part
    url_m = re.search(r"url\((https://[^)]+\.woff2)\)", face)
    if not url_m:
        out_css.append(face)
        continue
    remote = url_m.group(1)
    family_m = re.search(r"font-family:\s*'([^']+)'", face)
    weight_m = re.search(r"font-weight:\s*(\d+)", face)
    family = family_m.group(1).lower().replace(" ", "-")
    weight = weight_m.group(1)
    fname = f"{family}-{weight}-{subset}.woff2"
    fpath = os.path.join(OUT, fname)
    if not os.path.exists(fpath):
        r2 = urllib.request.Request(remote, headers={"User-Agent": UA})
        data = urllib.request.urlopen(r2, timeout=60).read()
        with open(fpath, "wb") as f:
            f.write(data)
        n_downloaded += 1
    face = face.replace(remote, f"/fonts/{fname}")
    out_css.append(face)

with open(os.path.join(OUT, "fonts.css"), "w") as f:
    f.write("".join(out_css))

print(f"downloaded {n_downloaded} woff2 files; css written to {OUT}/fonts.css")
