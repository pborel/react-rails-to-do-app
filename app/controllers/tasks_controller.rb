class TasksController < ApplicationController

  def index
    @tasks = Task.where(status: false)
    render json: @tasks
  end

  def create
    task = Task.create(task_params)

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

  private

    def task_params
      params.require(:task).permit(:body)
    end
end
