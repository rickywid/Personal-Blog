---
title: Resume From Sleep Workaround on Kubuntu 18.04
date: "2020-03-01"
description: A hacky work around
---

There seems to be an issue when trying to resume your system after suspending. In normal circumstances, when you suspend your computer the computer then turns off and when you press the power button the system should power back on again and resume where you left off. In this case, suspending the computer works but resuming doesn’t. Instead, when you move the mouse, press the keyboard to try to wake up your computer the screen seems like it’s trying to turn on but then it turns off again and then all you get is black screen.

The only temporary workaround I have found so far is to do the following when trying to resume a stuck computer after a suspend:

1. Press **Ctrl + Alt + F1** – this will display the login shell where you would need to enter your username and password.
2. After you are logged in, press **Ctrl + Alt + F7** then the lock screen should appear and you can then proceed to enter your password.

If everything worked, then you should be logged back into your computer continuing where you last continued.


**Notes**
- [ubuntu 18 04 wont wake after screen lock and blank suspend sleep](https://unix.stackexchange.com/questions/442057/ubuntu-18-04-wont-wake-after-screen-lock-and-blank-suspend-sleep%3E)
- [laptop screen does not turn on after waking from...](https://www.reddit.com/r/xubuntu/comments/bh8sep/laptop_screen_does_not_turn_on_after_waking_from/)    
- [many people are having problems resuming from...](https://www.reddit.com/r/Kubuntu/comments/8tdtc0/many_people_are_having_problems_resuming_from/)
- [xubuntu 18 04 does not resume from suspend to ram can not boot afterwards](https://askubuntu.com/questions/1107393/xubuntu-18-04-does-not-resume-from-suspend-to-ram-can-not-boot-afterwards)    
- [Suspend Issues on Ubuntu 18.04](https://ubuntuforums.org/showthread.php?t=2395562)    

