class Post < ActiveRecord::Migration[8.0]
  def change
    create_table :posts do |t|
      t.string :media
      t.text :body
      t.timestamps
    end
  end
end
