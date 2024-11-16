import AppError from "../../utils/appError.mjs";

export  const userRegister = async(req,res)=>{
    const {userName,password} =  req.body;
    if(!userName,!password){
      throw new AppError(
        "Username and Password required",
        "Field validation error:Username and Password required",
        403
      )
    }
    const findUser = await userRegisterDb();
    return res.status(200).json({
        status: "success",
        message: "User registered successfully",
        data: findUser,
      });
}