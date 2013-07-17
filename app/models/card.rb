class Card < ActiveRecord::Base
	attr_accessible :question
	attr_accessible :hint
	attr_accessible :answer
	attr_accessible :details
	attr_accessible :reference
	attr_accessible :category
end
