class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :time_completed, :user_id
end
