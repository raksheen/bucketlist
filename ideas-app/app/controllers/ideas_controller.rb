class IdeasController < ApplicationController
    def index 
    @ideas = Idea.all
    render json: @ideas
  end 

  def show 
    @idea = Idea.find(params[:id])
    render json: @idea
  end 

  def create 
    @idea = Idea.create!(idea_params)
    render json: @idea
  end 

  def update 
    @idea = Idea.find(params[:id])
    idea.update_attributes(idea_params)
    render json: @idea
  end 

  def destory 
    @idea = Idea.find(params[:id])
    @idea.destroy 
    render plain: "idea has been deleted"
  end 

  private 

  def idea_params 
    params.require(:idea).permit(:title, :text, :image, :state)  
  end
end 
