---
layout: docs
title: config.yml
parent: BungeeMOTD
---

## Default

```yml
#######################################
#              BungeeMOTD             #
#        By C1200 (C1200.js.org)      #
#######################################

# The text that is shown to the user.
# Use @dynamicmsg@ to show a random message
# from the dymanmicmsgs list.
motd: |-
  &eexample.com &c[1.8-1.17]
  &a@dynamicmsg@
# The list of dynamic messages that will be
# shown if @dynamicmsg@ is in the motd.
dynamicmsgs:
  - Hello, World!

# Enabling this will add up all of the
# server caps from all of your servers to
# display the total.
useservercap: false
```