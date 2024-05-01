import React from "react";
import Button from "./button"; // Path sesuaikan dengan struktur proyek

const App = () => {
  const handleClick = () => {
    alert("Tombol diklik!");
  };

  return (
    <div>
      <h1>Contoh Penggunaan Reusable Button Component</h1>
      <Button text="Klik Saya" onClick={handleClick} type="button" style={{ color: "white", backgroundColor: "blue", borderRadius: "5px", padding: "10px 20px", fontSize: "16px" }} />
      {/* Properti text, onClick, type, dan style dikirimkan ke komponen Button */}
    </div>
  );
};

export default App;
