// son aramalar için storage'den aktaracağız.

class Storage{
    static getSearchedUsersFromStorage(){
        // Tüm kullanıcı al

        let users;
        if(localStorage.getItem("searched") === null ){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }
    static addSearchedUserToStorage(username){
        // Kullanıcı ekle
        let users = this.getSearchedUsersFromStorage();
        
        //IndexOf Kullanıcı var mı yok mu sorgulama
        if(users.indexOf(username) === -1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));
    }
    static ClearAllSearchedUsersFromStorage(){
        // Tüm kullanıcıları sil

        localStorage.removeItem("searched");
    }



}