---
title: Copyright
style: copyright-page

# The Liquid tags here fetch metadata 
# from this book's YML file in _data
---

{% include metadata %}

# Rights
{:.non-printing}

*{{ title }}*\\
Text: {{ creator }}
Layout: {{ publisher }}

# Description

{{ description }}

[See the full description on the publisher's site]({{ publisher-url }})



{% include identifiers scheme="ISBN" %}

{{ rights }}
