// all the logic will be here


function homeController(){
    return{

        index(req,res){
            res.render('home')
        }
    }
}
module.exports = homeController