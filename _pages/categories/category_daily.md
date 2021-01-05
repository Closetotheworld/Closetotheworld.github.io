---
title: "Daily"
layout: archive
permalink: categories/daily
auth_profile: true
sidebar_main: true
---
{% assign posts = site.categories.daily %}
{% for post in posts %} 
{% include archive-single.html type=page.entries_layout %} 
{% endfor %}