class WelcomeController < ApplicationController
  def index
    @steal_env = Rails.env.production? ? "production" : "development"
    @start_file = (Rails.env.production? ? "/production/production.js" : "main.js")
    render :layout => false
  end
end
