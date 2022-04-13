import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

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
  const fetchUser = async () => {
    const userService = new UserService();
    try {
      userService.fetchUsers().then((response) => {
        console.log("Response ReadUsers", response);
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
        console.log("ResponseReadProperty", response);
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
        console.log("Response UpdateProperty", response);
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
        console.log("Response Delete", response);
        return response;
      });
    } catch (error) {
      return error;
    }
  };
  // const verifyUser = async () => {
  //   const authService = new AuthService(username, password);

  //   try {
  //     await authService.getAuth().then((response) => {
  //       console.log(response);

  //       return response;
  //     });
  //   } catch (error) {
  //     if (error) {
  //       setErrorText(error as string);
  //     }
  //   }
  // };

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
        <Route path="/user" element={<ListUser></ListUser>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
