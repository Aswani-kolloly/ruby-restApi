class CategoryController < ApplicationController
    def index
        @catgories=Category.all
        render json: @catgories, status: 200
      end
      def create
    
      end
      def show
      
      end
      def edit
    
      end
      def update
    
      end
      def destroy
    
      end
end
