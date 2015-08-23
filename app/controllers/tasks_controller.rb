class TasksController < ApplicationController

  def index
    # @tasks = Task.where(status: false)
    @tasks = Task.all
    render json: @tasks
  end

  def create
    p "*"*50
    p params
    p "*"*50
    task = Task.create(text: params[:text])

    redirect_to tasks_path
  end

  def new
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy

    redirect_to tasks_path
  end

  def update
    task = Task.find(params[:id])
    task.update_attributes(status: true)

    redirect_to tasks_path
  end

  # private

  #   def task_params
  #     params.require(:task).permit(:text)
  #   end
end
