---
title: "{{ replace .Name "-" " " | title }}"
headless: true
raw: false
markdown: {{ if eq .File.Ext "md" }}true{{ else }}false{{end}}
---

