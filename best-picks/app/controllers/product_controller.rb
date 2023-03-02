class ProductController < ApplicationController
    def index
        @products=Product.all
        render json: @products, status: 200
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
