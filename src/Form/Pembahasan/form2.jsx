import React, { useState } from "react";

function MyForm() {
  // State untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handler untuk mengupdate state saat nilai input berubah
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler untuk mengirim form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan data yang dikirim
    console.log(formData);
    // Contoh: Kirim data ke backend
    // reset form setelah di-submit
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "100px auto", border: "1px solid black", padding: "10px", width: "300px" }}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
      </div>
      <br />
      <div>
        <label htmlFor="message">Message: </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
