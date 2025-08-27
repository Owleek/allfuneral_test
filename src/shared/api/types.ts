// Базовые типы
export interface Company {
  id: string;
  name: string;
  description?: string;
  image?: string;
  // Добавьте другие поля компании
}

export interface Contact {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  // Добавьте другие поля контакта
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    // Добавьте другие поля пользователя
  };
}

// API ответы
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
