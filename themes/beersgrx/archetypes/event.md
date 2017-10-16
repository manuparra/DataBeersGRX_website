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
[[eventDetails.speakers]]
    name = ""
    motto = ""
    contact = ""
    bio = ""
    image = "" # path to image (Relative to /img/speakers)
+++

