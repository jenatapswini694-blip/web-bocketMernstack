import './App.css';
// import About from './screens/About';
// import Contact from './screens/Contact';
// import Register from './screens/Register';
// import UserList from './screens/UserList';
// import Greeting from './assignment/Greeting';
// import UserCard from './assignment/UserCard';
// import Button from './assignment/Button';
import MessageBox from './assignment/MessageBox';
// import Even from './assignment2/Even';
// import StudentReport from './assignment2/StudentReport';
// import ProductDiscount from './assignment2/ProductDiscount';
// import EmployeeSal from './assignment2/EmployeeSal';
// import ShopingVCart from './assignment2/ShopingVCart';

function App() {
  const numbers=[1 ,2 ,3, 4, 5 ,6 ,7 ,8, 9, 10]
  return (
    <div>
    {/* <About/>
    <Contact/> */}
    {/* <Register/> */}
     {/* <UserList/> */}
     {/* <Greeting name="Rakesh"/> */}
     {/* <UserCard
     name={"Rakesh"}
     age={25}
     city={"Bbsr"}
     /> */}

      <Button label="submit"/>

     <Button/> 
      <MessageBox message="Wellcome to our campous"/> 
     {/* <Even number={10}/> */}
     {/* <StudentReport/> */}
     {/* <ProductDiscount/> */}
     {/* <EmployeeSal/> */}
     {/* <ShopingVCart/> */}
    </div>
  );
}

export default App;