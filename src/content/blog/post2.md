---
title: "Create a portable Python installation (Windows)"
description: "Step-by-step instructions on how to install python and set it up for easy portability."
pubDate: "June 25 2022"
heroImage: "/python-conda.webp"
tags: ["python", "conda", "portable"]
---

Python is a popular general-purpose programming language. It is a great first language as it's easy to read and code. It
can be used in web development, machine learning, data science, software development and many more things.

#### There are many advantages to having a portable Python version over installing one:

- It is possible to run multiple Python versions at the same time without causing conflict.
- It is easy to delete if you no longer need it.
- There are no changes made to the system files, registry, or environment variables.
- It can be easily synchronised with everyone if it's committed on SVN, without everyone having to install the libraries
  and the correct version.
- Easy to use on any PC, just copy it to a Pen drive and you're good to go.

## Downloading & Installing Python

To install portable python first, we will download Miniconda on the PC. It can be downloaded from the below link (choose
whichever python version you want to install).
<a href="https://docs.conda.io/en/latest/miniconda.html#windows-installers">https://docs.conda.io/en/latest/miniconda.html#windows-installers</a>
After downloading move the exe file to the directory where you want to install python. Now, open Command Prompt in the
current location. This can be opened by pressing <kbd>Alt + D</kbd> then type <kbd>cmd</kbd> and press enter.
Then type the below code on the Command Prompt window.
<code>Miniconda3-py38_4.12.0-Windows-x86_64.exe /InstallationType=JustMe /AddToPath=0 /RegisterPython=0 /NoRegistry=1 /S
/D=%~dp0Python38</code>
Replace <code>Miniconda3-py38_4.12.0-Windows-x86_64</code> with the file name that you downloaded and <code>
Python38</code> with the folder name where you want to install Python and run the code by pressing enter.
This will install Python in the Python38 folder in my case or whatever folder name you have given.

## Creating batch file

Now we will create a batch file to access python with the correct path. First, open the folder where you installed the
Python as in my case it was Python38. then create a new batch file named <code>python.bat</code>. Then open the file in
notepad and copy the lines below.
<code>start cmd.exe /k "set PATH=%CD%;%CD%\Library\bin;%CD%\Library;%CD%\Scripts;C:\Windows\System32"</code>
This will open a Command Prompt window with the python path set up correctly. You can use conda or pip to install any
package and use python here directly.
You can create a shortcut to the batch file anywhere and access python from it.
