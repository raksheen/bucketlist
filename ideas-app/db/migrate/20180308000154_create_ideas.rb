class CreateIdeas < ActiveRecord::Migration[5.1]
  def change
    create_table :ideas do |t|
      t.string :title 
      t.string :text
      t.string :image
      t.string :state

      t.timestamps
    end
  end
end
