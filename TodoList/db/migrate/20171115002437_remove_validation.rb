class RemoveValidation < ActiveRecord::Migration[5.1]
  def change
    remove_timestamps :todos
  end
end
