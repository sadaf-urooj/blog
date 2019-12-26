module Posts
    class CommentsController < ApplicationController

        def new
            @comment = Comment.new
        end

        def create
            @comment = Comment.new(post_id: params[:post_id], user_id: current_user.id)
            @comment.text = params[:comment][:quote] + params[:comment][:text]
            @comment.save
            # redirect_back(fallback_location: root_path)
        end


        def update
            @comment = Comment.find(params[:id])      
            @comment.update(comment_params)                   
        end 




        def destroy
            @comment = Comment.find(params[:id])
            @comment.destroy
            # redirect_back(fallback_location: root_path)        
        end


        def edit
            @comment = Comment.find(params[:id])
        end 

         private
        def comment_params
          params.require(:comment).permit(:text)
        end    
     
        end
end 







