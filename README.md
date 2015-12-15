# fei_group
My Ruby on Rails Research Project


[markdown link](https://guides.github.com/features/mastering-markdown/)

# Init Project

  - rails [_3.2.12_] new fei_group --skip-active-record
  - change Gemfile
  - source 'https://rubygems.org' -> source 'https://ruby.taobao.org'
      - add line "gem 'couchrest_model'"
      - "bundle install" or "bundle update"
      
# Some Features

  - DataBase: CouchDB
  - Bootstrap
  - CanJS
  - RequireJs
  - jQuery
  - D3
  - MongoDB & MongoId
  - Devise
  - 
  
# require css & less

 To build and optimize less and css, we need to install csso and its less plugin
 
  - sudo npm install csso -g
  - sudo npm install less csso -g
  
  
# Setup CouchDB 

  - rails generate couchrest_model:config
      - change username & password in config/couchdb.yml
  - test
      - rails generate model user --orm=couchrest_model
      
# Setup MongoDB
  - 
  
# Use Thin Server

  - add gem 'thin' to Gem file

# StealJS
  build and publish app
