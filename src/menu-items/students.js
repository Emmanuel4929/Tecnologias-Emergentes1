import {TeamOutlined} from '@ant-design/icons';


//icons
const icons ={
    TeamOutlined
};

const students = {
    id:'students',
    title:'Students',
    type:'group',
    Children:[
        {
            id:'students',
            title:'Students',
            type:'item',    
            url:'/students',
            icon: icons.TeamOutlined
        }
    ]

}

export default students;