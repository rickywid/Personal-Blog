---
title: Switch to Linux
date: "2020-02-29"
description: Discussing why I chose Fedora as my linux Distro
---

In this post I will share why I've decided to switch from Windows to Linux and why it was the greatest decision I ever made.

###System Specs
- **Machine**: Thinkpad T480s
- **OS**: Fedora 31
- **Kernel**: v5.5.5-200
- **CPU**: Intel i5-8250U 3.4GHz
- **GPU**: Intel UHD Graphics 620
- **RAM**: 8GB


###Early On
As a Windows user all my life, I was very comfortable with the operating system and for the most part everything worked as it should. The core pillars of my everyday workflow consisted of Firefox, Adobe Photoshop and Sim City and they all worked without a hitch. As the years passed, my computer skills expanded beyond these 3 applications. 

I developed an interest for programming and web development and I discovered that a lot of the installation and setup guides were focused on Linux. Because of this, I decided to install a VM and start experimenting and see what Linux had to offer. At the time I was using a Lenovo Thinkpad Edge E420. The specs was nothing to write home about and this caused a laggy and very unenjoyable experience even when dedicating more than half of the host's RAM to the VM.

I was now waist deep in web development and it was time for me to look beyond HTML, CSS and JavaScript. I wanted to try out Python and Django, Ruby on Rails and NodeJS. Of course this is all possible on Windows but I knew there would be more documentation and online support for Linux users. There was the option of dual booting but I didn't want to go through the hassle of messing with partitions, bootloader, BIOS and everything else involved.

A couple of years ago, I updated my now aging laptop to a Lenovo Thinkpad T480s and at this point, I decided to wipe the preinstalled Windows 10 and take the leap of faith and install Linux as my main operating system.

###The Jump
Before I made the jump, I exhausted my research on which Linux distribution to use since there were so many to choose from. I literally googled *best beginner friendly linux distro* and every top ten list had Ubuntu at number one. According to these articles, Ubuntu had a easy to use desktop environment, large online community meaning any issue or question you may have, there was a high probability that there was someone out there who’ll be able to help you out.

Ubuntu by default installs GNOME as its desktop environment. Although it looks slick with smooth animations, I felt that it didn’t work together with my workflow. Maybe it was because of my countless years using Windows but not having a desktop panel or missing close, minimize and expand buttons for your window felt unnatural. After a couple days I eventually opted to switch to Kubuntu which is Ubuntu except that it uses the KDE desktop environment which resembles a lot more to Windows. Everything was working great. I experienced no hardware compatibility issues (something I was worried about), the UI had a clean and modern design and it had a good selection of applications to choose from their package repository.

However, there were a few annoying bugs that tainted my overall experience. 

####Resuming After Sleep
Whenever I tried to wake my laptop from Sleep, the screen would appear black without displaying the lock screen and in order to  resolve this I had to perform a hacky work around. Read my other **[blog post](https://rickyjw.netlify.com/blog/resume-from-sleep-hack/)** to see a hacky workaround.

####Battery Life
I would experience horrible battery life. I’m talking about 3-4 hours with 30% brightness, bluetooth disabled, general browsing and Sublime Text. I installed a popular power saving tool called PowerTop which made minor improvements but not enough to keep me from sweating after 2 hours of battery usage. After endless research, I just accepted the fact that I was going to have bad battery life no matter regardless how many tweaks I make in PowerTop or power management settings. This was the biggest contributing factor for me to explore another distro.

####Random System Errors
When I would perform system updates, upon reboot I would receive desktop notifications about system and application errors. As far as I can tell it didn't affect or limit my ability to use my computer but nonetheless very annoying without being able to fix the issue even after extensive Googling.


###Fedora to the Rescue
I ultimately decided that the poor battery life I was experiencing on Kubuntu was not gonna cut it, I kickstarted my search for its successor. I had a few requirements when selecting my next distro, it needed to be stable, somewhat beginner friendly, have a large community, must offer KDE and battery life should have reasonable battery life (minimum 4 hours at least). At the end, the final candidates came down to Manjaro and Fedora.

**Manjaro**
- **Initial Release**: July 10, 2011 (8 years old)
- **Default interfaces**: Xfce, KDE Plasma 5, GNOME
- **Release Cycle**: Rolling Release
- **Package Manager**: pacman
- **DistroWatch**: ranking: 2

**Fedora**
- **Initial Release**: November 6, 2003 (16 years old)
- **Default interfaces**: Xfce, KDE Plasma 5, GNOME
- **Release Cycle**: Point Release
- **Package Manager**: dnf
- **DistroWatch ranking**: 8


###Final Thoughts
Most of the research I've read from Linux vets is that Fedora is a solid distro and is extremely stable with good hardware support and package manager. Manjaro is also a great option since it is beginner friendly, good package manager, sleek design and has a large community. 

At the end of the day, I decided to opt for Fedora becaues of it's stability. It has a large community of users and developers that ensure that all of their packages is tested extensively before being released. Manjaro follows a rolling release cycle which is great for users who want the latest and greatest software updates but can be susceptible to releasing unstable packages which could potentially cause your system to break. The last thing I want to do is having to do a clean install of my OS if something breaks. 

Fast forward 3 months later and Fedora is running great. I went with the Fedora KDE spin instead of the GNOME version. Battery life expectancy is approximately 5-5.5 hours with moderate usage which is not great but can most likely be improved if I watched less YouTube. I have experienced no hardware compatibility issues and everything just works out of the box with minimal configuration. Fedora’s official repository has plenty of packages to choose from and has everything I could possibly need. 

Overall, switching to Linux has been long over due. I no longer have to deal with CD-keys, Windows updates and paying for overpriced software. My suggestion to those who's contemplating on making the switch is to install a live USB and try out the distro for yourself and play around with it and decide whether or not it suits your needs. There is no risk involved. I don't see myself ever switching back to Windows. I’m going to stick with Fedora for the near future until I feel adventurous and have the urge to try a different Linux distro.
