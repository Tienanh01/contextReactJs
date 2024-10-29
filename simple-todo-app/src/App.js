// import './App.css';
// import { React, useState } from 'react';
// import { Input, Button, List, Typography, Alert, notification, Avatar } from 'antd';
// import { AntDesignOutlined } from '@ant-design/icons';


// const { Text } = Typography;

// const data = [
//   {
//     title: 'John Doe',
//     description: 'Front-end Developer',
//   },
//   {
//     title: 'Jane Smith',
//     description: 'Back-end Developer',
//   },
//   {
//     title: 'Michael Johnson',
//     description: 'Full-stack Developer',
//   },
// ];

// function App() {
//   const [todos, setTodos] = useState([{ id: 1, text: "fdasfads", completed: false }, { id: 2, text: "fdasfads", completed: false }]);

//   const [newTodo, setNewTodo] = useState('');
//   // const deleteTodo= (id) => {
//   //   updateTodo = todos.filter(todo => todo.id !== id);
//   //     setTodos(updateTodo);
//   // }
//   const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
//   ];

//   const deleteTodo = (id) => {
//     const updateTodo = todos.filter(todo => todo.id !== id)
//     setTodos(updateTodo);
//     notification.success({
//       message: 'Success',
//       description: 'Todo has been deleted successfully!',
//       placement: 'top',
//     });
//   }

//   const getValue =  (e) =>{
//       console.log(e.target.value);
//         setNewTodo(e.target.value);
//   }

//   const changeStatus = (id) =>{
//     // can kiem tra xem  co id nao bang id hien tai ko , 
//       // update state tu complete thanh not complete 
//     const updateNewTodo = todos.map((todo) =>{ 
//         if(todo.id === id){
//           return {...todo , completed: !todo.completed };
//         } else {
//           return todo; // Trả về các todo không bị thay đổi
//         }
//       })
//       setTodos(updateNewTodo);
//   }

//   const addTodo = () =>{
//         if(newTodo.trim === '') return; 
//         const newTodoItem = {
//             id: todos.length + 1, 
//             text:  newTodo , 
//             completed :false 
//         }

//         setTodos([...todos, newTodoItem]);
//         setNewTodo('');
//         notification.success({
//           message: 'Success',
//           description: 'Todo has been added successfully!',
//           placement: 'topRight',
//         });
//   }

//   return (
//     <div className='App'>
//       <h1>Todo App </h1>
//       <Input placeholder="Enter new todo" 
//           value={newTodo}
//          onChange={getValue}
//         style={{ width: '300px', marginRight: '10px' }}
//       /> 
//       <Button type="primary" onClick={addTodo}>Add</Button>
//       <br></br>
//       <br></br>
//       <List
//         size="large"
//         // header={<div>Header</div>}
//         // footer={<div>Footer</div>}
//         bordered
//         dataSource={todos}
//         pagination={{
//           pageSize: 3, // Số lượng mục trên mỗi trang
//           showSizeChanger: false, // Ẩn hoặc hiển thị tùy chọn thay đổi kích thước trang
//         } }
//         renderItem={

//           (todo) => <List.Item actions={
//             [
//               <Button color="green" variant="solid" onClick={() => {changeStatus(todo.id)}} >
//                 {!todo.completed ? 'Check' :'UnCheck'}
//               </Button>, 
//               <Button color="danger" variant="solid" onClick={() => {   deleteTodo(todo.id)}}>
//                 Delete
//               </Button>]}>

//             <Text style={{color:todo.completed ?'green' :'black'}}>
//               {todo.text}
//             </Text>
//           </List.Item>

//         }
//       />
//     <br></br>
//     <br></br>
// <List
//     itemLayout="horizontal"
//     dataSource={data}
//     renderItem={item => (
//       <List.Item>
//         <List.Item.Meta
//           avatar={<Avatar  size={{
//             xs: 24,
//             sm: 32,
//             md: 40,
//             lg: 64,
//             xl: 80,
//             xxl: 100,
//           }}
//           icon={<AntDesignOutlined />} />}
//           title={<a href="https://example.com">{item.title}</a>}
//           description={item.description}
//         />
//       </List.Item>
//     )}
//   />

//     </div>
//   );
// }

// export default App;

// src/App.js
// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://lienthongvanban1.lamdong.gov.vn/EdocService/getPendingDocIds', null, {
                    headers: {
                        'Content-Type': 'application/json',
                        'OrganId': '000.H36.000',
                        'Authorization': 'wH9qK8di6/oPgtsR7N5SDadT5/E=',
                        'Type': 'EDOC',
                    },
                });
                setData(response.data.data);  // Lưu dữ liệu vào state từ response.data.data
            } catch (err) {
                setError(err.message);  // Xử lý lỗi
            } finally {
                setLoading(false);  // Đặt loading là false sau khi gọi API
            }
        };

        fetchData();
    }, []); // Chạy 1 lần khi component được mount

    // Hiển thị thông tin
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Pending Document IDs</h1>
            <ul>
                {data.map((doc) => (
                    <li key={doc.docId}>
                        <strong>Document ID:</strong> {doc.docId}, <strong>Organ ID:</strong> {doc.organId}, <strong>Document Code:</strong> {doc.docCode}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;

