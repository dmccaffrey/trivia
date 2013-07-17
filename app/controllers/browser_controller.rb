class BrowserController < ApplicationController
	def view
		@card = Card.find(params[:id])
	end

	def index
	end
end
