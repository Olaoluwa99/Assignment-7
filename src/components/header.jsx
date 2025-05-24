function Header() {
  return (
    <header className="bg-[#012a22] p-4 flex items-center shadow-md">
      <img
        src="public/logo.webp"
        alt="Logo"
        className="h-10 w-10 rounded-full mr-3"
      />
      <h1 className="text-2xl font-bold text-[#39ff14]">CipherGen</h1>
    </header>
  );
}

export default Header;
