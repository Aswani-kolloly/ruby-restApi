class BrandController < ApplicationController
    before_action :set_brand, only: %i[ show edit update destroy ]    
  def index
    @brands=Brand.all
    render json: @brands, status: 200
  end
  def create
   
    @brand = Brand.new(brand_params) 
        
            if @brand.save
                render json:{ message: 'saved' } , status:200
            else
                render json: @brand.errors, status: :unprocessable_entity 
            end
        
  end
  def show
  
  end
  def edit

  end
  def update
    
  end
  def destroy

  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_brand
      @brand = Brand.find(params[:id])
     
    end

    # Only allow a list of trusted parameters through.
    def brand_params
      #params.fetch(:book, {})
      params.require(:brand).permit(:name)
    end
  
end
