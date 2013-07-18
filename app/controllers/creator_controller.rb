class CreatorController < ApplicationController
  def index
  end
  
  def submit
  	begin
	  	@question = params[:question]
	  	if ! @question.blank?
	  		@success = true
	  		@card = Card.new
	  		@card.question 	= @question
	  		@card.hint 	= params[:hint]
	  		@card.answer 	= params[:answer]
	  		@card.details 	= params[:details]
	  		@card.reference = params[:reference]
	  		@card.category 	= params[:category]
	  		@card.save
	  	else
	  		@err_msg = "Missing input parameters"
	  	end
	  rescue Exception => @err_msg
	  end
  end
end
