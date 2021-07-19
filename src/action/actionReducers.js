const signIn = (email,password)=>{
    return (dispatch)=>{
        dispatch({
            type:'LOGIN_SUCCESS',
            payload:{
                users:{
                    id:1,
                    name:'fabio da silva',
                    username:'fabiodasilva',
                    email:'fabio@gmail.com'
                }
            }
        })
    }
}
export default signIn;