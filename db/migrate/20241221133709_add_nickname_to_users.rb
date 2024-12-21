class AddNicknameToUsers < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :nickname, :string
    add_index :users, :nickname, unique: true
  end
end
