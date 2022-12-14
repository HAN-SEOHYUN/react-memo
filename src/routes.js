import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import ListPage from "./pages/ListPage";
import ShowPage from "./pages/ShowPage";

const routes =[ //새로운 페이지는 배열로 추가
//순서가 중요함 !

  {
    path:'/',
    component: HomePage
  },
  {
    path:'/memos',
    component: ListPage
  },
  {
    path:'/memos/create',
    component: CreatePage
  },
  {
    path:'/memos/:id/edit',
    component: EditPage
  },
  {
    path: '/memos/:id', //얘를 맞춰줘야 됨
    component:ShowPage
  },
];

export default routes;


// app.js
// <Route path="/" exact>
//             <HomePage />
//           </Route>,
//           <Route path="/blogs" exact>
//             <ListPage />
//           </Route>,
//           <Route path="/blogs/create" exact>
//             <CreatePage />
//           </Route>,
//           <Route path="/blogs/edit" exact>
//             <EditPage />
//           </Route>