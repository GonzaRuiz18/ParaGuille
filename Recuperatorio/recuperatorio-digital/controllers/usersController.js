const controller={
    login:(req,res)=>{
        return res.render('userLogin');
    },
    profile:(req,res)=>{
        return res.render('profile');
    },
    changePassword:(req,res)=>{
        return res.render('changePassword');
    },
    adminInfoUsers:(req,res)=>{
        return res.render('AdminInfoUsersC');
    },
    adminRegisterUsersC:(req,res)=>{
        return res.render('adminRegisterUsersC');
    },
    adminChangeInfo:(req,res)=>{
        return res.render('adminChangeInfo');
    }

}
