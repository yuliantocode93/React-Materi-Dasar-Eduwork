import React from "react";
import { useState } from "react";

export default function Conditional2() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      {isLogin ? <h1>Anda sudah login</h1> : <h1>Anda belum login</h1>}

      <button onClick={() => setIsLogin(!isLogin)}>Toggle</button>
    </div>
  );
}
