class PostsController < ApplicationController
  before_action :find_post, only: [:show, :edit, :destroy, :update]

  def index
    @posts = current_user.posts
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      redirect_to posts_path, notice: 'Post Created Successfully'
    else
      render :new
    end
  end

  def update
    if @post.update(post_params)
      redirect_to post_path(@post), notice: 'Post Updated Successfully'
    else
      render :edit
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_path, notice: 'Post Destroy Successfully'
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :user_id)
  end

  def find_post
    @post = Post.find(params[:id])
  end

end
