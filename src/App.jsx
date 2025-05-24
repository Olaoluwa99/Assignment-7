import Header from "./components/header";
import UserCard from "./components/user_card";

function App() {
  return (
    <div className="min-h-screen bg-[#011b16] text-white">
      <Header />
      <main className="flex justify-center items-center h-[calc(100vh-64px)] p-4">
        <UserCard />
      </main>
    </div>
  );
}

export default App;
