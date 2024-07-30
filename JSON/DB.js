import axios from 'axios';
const API_URL='http://localhost:3001'
export const getData = async() => await axios.get(`${API_URL}/Userdata`);
export const postData = async(user,email,password,Role) => 
    {
    
    const{data:edata}=await getData();
    const newid=Math.max(...edata?.map(user=>user.id),0)+1;

    const ND={
        uname:user,
        nemail:email,
        pass:password,
        Role:Role,
        id:newid}

    await axios.post(`${API_URL}/Userdata`,ND);

}



export const showData = async () => {
    const res = await axios.get(`${API_URL}/UserData`);
    return res.data;
};

export const updateData = async (id, updatedUser) => {
    await axios.put(`${API_URL}/UserData/${id}, updatedUser`);
};

export const deleteData = async (id) => {
    await axios.delete(`${API_URL}/UserData/${id}`);
};

export const getUserData = async (id) => {
    const res = await axios.get(`${API_URL}/UserData/${id}`);
    return res.data;
};
export const setNewUserPassword = async (id,updatedUser) => {
    await axios.put(`${API_URL}/UserData/${id},updatedUser`);
};

