[markdown link](https://guides.github.com/features/mastering-markdown/)

# New Project

  - rails [_3.2.12_] new fei_group --skip-active-record
  - change Gemfile
  - source 'https://rubygems.org' -> source 'https://ruby.taobao.org'
    - add line "gem 'couchrest_model'"
    - "bundle install" or "bundle update"
  
# Setup CouchDB 

  - rails generate couchrest_model:config
  - test
    - rails generate model cat --orm=couchrest_model
    - 
    
