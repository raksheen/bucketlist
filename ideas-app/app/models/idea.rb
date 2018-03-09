class Idea < ApplicationRecord
  validates :title, presence:true
  validates :text, presence:true
  validates :image, presence:true
  validates :state, presence:true
end
