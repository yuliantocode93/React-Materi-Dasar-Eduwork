import React from "react";

class FormElement extends React.Component {
  state = {
    name: "",
    jurusan: "",
    gender: "",
    alamat: "",
    member: false,
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    alert(`
      nama : ${this.state.name},
      jurusan : ${this.state.jurusan}, 
      gender : ${this.state.gender}, 
      alamat : ${this.state.alamat}, 
      member : ${this.state.member ? "ada" : "tidak ada"}
    `);

    // Reset state after form submission
    this.setState({
      name: "",
      jurusan: "",
      gender: "",
      alamat: "",
      member: false,
    });
  };

  render() {
    return (
      <div style={{ margin: "100px auto", border: "1px solid black", padding: "10px", width: "300px" }}>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Nama:
            <input type="text" name="name" defaultValue={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          </label>
          <br />
          <label>
            Jurusan:
            <select name="jurusan" defaultValue={this.state.jurusan} onChange={(e) => this.setState({ jurusan: e.target.value })}>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Sistem Komputer">Sistem Komputer</option>
            </select>
          </label>
          <br />
          <label>
            Jenis Kelamin:
            <input type="radio" name="gender" value="Laki-laki" defaultChecked={this.state.gender === "Laki-laki"} onChange={(e) => this.setState({ gender: e.target.value })} /> Laki-laki
            <input type="radio" name="gender" value="Perempuan" defaultChecked={this.state.gender === "Perempuan"} onChange={(e) => this.setState({ gender: e.target.value })} /> Perempuan
          </label>
          <br />
          <label>
            Alamat:
            <textarea cols="30" rows="10" defaultValue={this.state.alamat} onChange={(e) => this.setState({ alamat: e.target.value })} />
          </label>
          <br />
          <label>
            Member:
            <input type="checkbox" defaultChecked={this.state.member} name="member" onChange={(e) => this.setState({ member: e.target.checked })} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormElement;
