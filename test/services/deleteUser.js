import axios from 'axios';
class User{
     async deleteUser(){
    			try{
    				return await  axios.get('https://api.pvdemo.com/delete/users/507832912916578/truncate?code=jokerisbetterthanbatman')
    			}catch(error){
    				console.error(error)
    			}
    		}
    }
export default User