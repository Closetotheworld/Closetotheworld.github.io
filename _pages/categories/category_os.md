---
title: "Operating System"
layout: archive
permalink: categories/os
auth_profile: true
sidebar_main: true
---

{% assign posts = site.categories.OS %}
{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}
