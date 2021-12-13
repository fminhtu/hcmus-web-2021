const Comment = require('../models/Comment');
const Menu = require('../models/Menu');

const perPage = 12;
class ProductsService{
    viewItem(pageRequest,numItem,items){
        let page = parseInt(pageRequest)||1;
            
        let totalPage = Math.floor(numItem/perPage) + 1;
        let start = (page-1)*perPage;
        let end;
        if (page==totalPage){
            end = numItem;
        }
        else{
            end = start + perPage;
        }
        return items.slice(start,end);
    }
    paginationArray(pageRequest,numItem,slug){
        if(numItem<=perPage){
            return null;
        }
        let page = parseInt(pageRequest)||1;
        let totalPage = Math.floor(numItem/perPage) + 1;
        let totalPageArr = [];
            for (let i=1;i<=totalPage;i++){
                totalPageArr.push({
                    value : i,
                    isCurrent: page === i,
                    category:slug
                });
            } 
        return totalPageArr;    
    }
    postComment(userId,userName,productId,content){
        return new Comment(
            {
                userId: userId,
                userName:userName,
                productId: productId,
                content: content,
                createAt: new Date()
            }
        ).save();
    }
    async getProductWithComment(slug){
        const detail = await Menu.findOne({slug:slug}).lean();
        const comments = await Comment.find({productId:detail.id}).lean();
        return {detail,comments};
    }
    async getProductsWithPagination(category,pageRequest){
        const count = await Menu.count({category:category});
        const products = await Menu.find({category:category}).lean();
        const item = this.viewItem(pageRequest,count,products);
        const totalPageArr = this.paginationArray(pageRequest,count,"/"+category);
        return {item,totalPageArr};
    }
}

module.exports = new ProductsService;