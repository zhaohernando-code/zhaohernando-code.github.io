---
layout: splash
title: OpenDesk
author_profile: false
excerpt: npm i -g @bitclub.ai/opendesk-cli
header:
  overlay_color: "#FFF"
  overlay_filter: "0.0"
  overlay_image: /assets/images/common/banner.jpg
  actions:
    - label: "快速开始"
      url: "/quick-start"
    - label: "了解更多"
      url: "/gallery/"
---

<style>
    .page__lead {
        padding: 20px;
        background-color: #000000A0;
        font-size: 95%;
    }

    a.btn--light-outline {
        background-color: #00000050;
        font-size: 90%;
    }
</style>

<section class="archive-post-list">

   {% for post in site.posts %}
       {% assign currentDate = post.date | date: "%Y" %}
       {% if currentDate != myDate %}
           {% unless forloop.first %}</ul>{% endunless %}
           <ul>
           {% assign myDate = currentDate %}
       {% endif %}
       <li><a href="{{ post.url }}"><span>{{ post.date | date: "%B %-d, %Y" }}</span> - {{ post.title }}</a></li>
       {% if forloop.last %}</ul>{% endif %}
   {% endfor %}

</section>