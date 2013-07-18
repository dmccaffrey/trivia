class BrowserController < ApplicationController
	def view
		begin
			@card = Card.find(params[:id])
		rescue Exception => @err_msg
			@card = Hash.new ""
			@card["question"] = @err_msg
			@card["category"] = "Error!"
		end
	end

	def index
		begin
			if !params[:start]
				@start = 1
			else
				@start = params[:start]
			end
			
			if !params[:end]
				@end = 5
			else
				@end = params[:end]
			end
			
			@cards = Card.where(:id => @start..@end)
			
			@success = true
		rescue Exception => @err_msg
			@cards = Hash.new ""
			@cards["question"] = @err_msg
			@cards["category"] = "Error!"
		end
	end
end
