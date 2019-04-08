import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={employee.image}  alt="picture"  />
            <ul>
                <li>Quote : {employee.quote}</li>
                <li>
                    Name : {employee.character}  
        
                </li>
              
                <li>
                    Direction : {employee.characterDirection}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;

