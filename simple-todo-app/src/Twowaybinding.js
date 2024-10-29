import { useState } from "react"


const courses = [
    {
        id: 1,
        name: 'Java'
    }, {
        id: 2,
        name: 'JavaScript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]



function Twowaybinding() {


    const [checked, setChecked] = useState([]); 
    function handleCheck(id){
        console.log({id: checked })
     setChecked( prev => {
        const isChecked = checked.includes(id);
        if(isChecked){
            console.log( "isChecked   "+isChecked)
            
            return prev.filter(e => e.id !== id );
        
        }
        else{
            console.log("check")
            return [...prev, id];
            // setChecked(prev => [...prev, id]);
        }
     })
       
    }

    return ( 

        // check unit 1 input 
        // <div style={{ padding: 32 }} >

        //     {
        //         courses.map(course => (
        //            <lable key= {course.id} >
        //              <input
        //                 type="radio"
        //                 checked = {checked === course.id}
        //                 // onChange={() => handleCheck(course.id)}
        //                 onChange={() => setChecked(course.id)}
        //             />            
        //             { course.name }
        //            </lable>

        //         ))}

        // </div> 
        // check multi input 

        <div style={{ padding: 32 }} >

        {
            courses.map(course => (
               <lable key= {course.id} >
                 <input
                    type="checkbox"
                    checked = {checked.includes(course.id)}
                    // onChange={() => handleCheck(course.id)}
                    onChange={() => handleCheck(course.id)}
                />            
                { course.name }
                <br></br>
               </lable>
               

            ))}

    </div> 
    )


}
export default Twowaybinding 