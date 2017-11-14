+++
title =  "{{ replace .TranslationBaseName "-" " " | title }}"
date = {{ .Date }}

[[eventDetails]]
    when = {{ .Date }}
    where = ""
    whereUrl = ""
    whereAddrs = ""
    city = ""
    description = ""
    url = ""
    start = {{ .Date }}
    end = {{ .Date }}
[[eventDetails.speakers]]
    name = ""
    motto = ""
    contact = ""
    contactAnchor = ""
    bio = ""
    image = "" # path to image (Relative to /img/speakers)
+++
