
const users = JSON.parse(localStorage.getItem('users')) || [];

export const register = async (name, email, password) => {
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password, 
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  
  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

export const login = async (email, password) => {
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const getCurrentUser = () => {
  const storedUser = localStorage.getItem('currentUser');
  return storedUser ? JSON.parse(storedUser) : null;
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};