class CreatorController < ApplicationController
  def index
  end
  
  def submit
  	@question = params[:question]
  	unless @question.blank?
  		@card = Card.new
  		@card.question 	= @question
  		@card.hint 	= params[:hint]
  		@card.answer 	= params[:answer]
  		@card.details 	= params[:details]
  		@card.reference = params[:reference]
  		@card.category 	= params[:category]
  		@card.save
  	end
  end
end
