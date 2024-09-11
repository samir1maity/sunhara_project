// import React, { useState } from "react";
// import { auth, db } from "./firebase"; 
// import {doc, setDoc} from 'firebase/firestore';
// import { createUserWithEmailAndPassword } from "firebase/auth";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user"); 


//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       // Create user with email and password
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log("userCredential ==>", userCredential);
//       const user = auth.currentUser;
//       console.log("user ===>", user);
//       if(user) {
//         await setDoc(doc(db, 'Users', user.uid),{
//           email: user.email,
//           role: role
//         })
//       }

//       // Save user role to Firestore
//       // await db.collection('users').doc(user.uid).set({
//       //   email: user.email,
//       //   role: role, // Use the selected role
//       // });

//       console.log("User signed up and role assigned");
//     } catch (error) {
//       console.error("Error during signup:", error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
