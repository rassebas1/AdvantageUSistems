import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import AuthService from "./services/AuthService";
import UserService from "./services/UserService";
import ListUser from "./views/ListUser/ListUser";
import Login from "./views/Login/Login";
import NotFoundPage from "./views/NotFound/NotFound";

type DataToUpdate = {
  DataBeanProperties: {
    Nombre: string;
    Valor: string;
    Descripcion: string;
    IDPropiedades: 0;
    Atributo: string;
  };

  DataBeanName: "com.admin.bean.Propiedades";
};
function App() {
  const [userName, setuserName] = React.useState("");
  const fetchUser = async () => {
    const userService = new UserService();
    try {
      userService.fetchUsers().then((response) => {
     
        return response;
      });
    } catch (error) {

      return error;
    }
  };
  const fetchPropertyId = async () => {
    const userService = new UserService();
    try {
      userService.readpropertyId(10).then((response) => {
        
        return response;
      });
    } catch (error) {
      return error;
    }
  };
  const updatingPropertyId = async () => {
    const data = {} as DataToUpdate;
    const userService = new UserService();
    try {
      userService.updatePropertyId(data).then((response) => {
        
        return response;
      });
    } catch (error) {
      return error;
    }
  };
  const deletingPropertyId = async () => {
    const userService = new UserService();
    try {
      userService.deletePropertyId(10).then((response) => {
        
        return response;
      });
    } catch (error) {
      return error;
    }
  };
  
  React.useEffect(() => {
    fetchUser();
    fetchPropertyId();
    updatingPropertyId();
    deletingPropertyId();
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/users" element={<ListUser></ListUser>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
