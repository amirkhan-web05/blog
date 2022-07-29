import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { RequireAuth } from "./hoc/RequireAuth";
import { BlogPage } from "./pages/BlogPage";
import { FullPost } from "./pages/FullPost";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { UsersPage } from "./pages/UsersPage";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={
          // <RequireAuth>
            <HomePage/>
          /* </RequireAuth> */
        }/>
        <Route path="/blog" element={
          // <RequireAuth>
            <BlogPage/>
          /* </RequireAuth> */
        }/>
        <Route path="/fullpost/:id" element={<FullPost/>}/>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/users' element={<UsersPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
