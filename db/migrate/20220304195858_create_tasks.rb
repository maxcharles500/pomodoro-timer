class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title 
      t.boolean :completed
      t.string :time_completed
      t.integer :user_id
      t.timestamps
    end
  end
end
