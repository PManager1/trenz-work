
# lock '3.1.0'


# Define the name of the application
set :application, 'my_app'

# Define where can Capistrano access the source repository
# set :repo_url, 'https://github.com/[user name]/[application name].git'
set :scm, :git
set :repo_url, 'git@github.com:jpca999/trenz-work.git'

set :use_sudo, true

set :log_level, :debug

# Define where to put your application code
set :deploy_to, "/home/ubuntu/Trenz" 

set :pty, true

set :format, :pretty