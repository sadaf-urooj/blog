class Post < ApplicationRecord
    has_rich_text :content

    belongs_to :user

    has_many :comments,  dependent: :destroy
    validates_presence_of :title
    validates_presence_of :content


end
