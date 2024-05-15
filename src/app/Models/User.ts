export interface User {
    username: string;
    email: string;
    password?: string; // Password puede ser opcional, ya que no siempre está disponible en Firebase
    //imgProfile: string;
    
  }
  