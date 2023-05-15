# use subprocess and shlex
import subprocess
import shlex
import argparse
import sys
import os
from datetime import date

# argparse
parser = argparse.ArgumentParser()
parser.add_argument("-p", dest="password", help="sudo password")

args =  parser.parse_args()

if args.password == None:
    print("missing the password")
    sys.exit(2)

password = args.password

command1 = 'sudo npm run build'
process = subprocess.Popen(shlex.split(command1), stdout=subprocess.PIPE, stderr=subprocess.STDOUT, shell=True)
process.communicate('{}\n'.format(password))

gitadd = 'git add *'
process = subprocess.call(shlex.split(gitadd), stdout=subprocess.PIPE, stderr=subprocess.STDOUT)

gitcommit = 'git commit -m{}'.format(date.today())
process = subprocess.call(shlex.split(gitcommit), stdout=subprocess.PIPE, stderr=subprocess.STDOUT)

gitpush = 'git push'
process = subprocess.call(shlex.split(gitpush), stdout=subprocess.PIPE, stderr=subprocess.STDOUT)

