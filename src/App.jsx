import Header from "./components/Header/Header";
import ArticleList from "./components/ArticleList/ArticleList";
import { useState } from "react";
import Form from "./components/Form/Form";

const App = () => {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);

  return (
    <div className="w-screen h-screen sm:px-5 flex flex-col justify-start items-center">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {hasUser || <Form onSubmit={setUser} />}
    </div>
  );
};

export default App;

