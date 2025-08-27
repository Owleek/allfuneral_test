// API эндпоинты
export const API_ENDPOINTS = {
  // Аутентификация
  AUTH: '/auth',
  
  // Компании
  COMPANIES: {
    BASE: '/companies',
    BY_ID: (id: string) => `/companies/${id}`,
    IMAGE: (id: string) => `/companies/${id}/image`,
    IMAGE_BY_NAME: (id: string, imageName: string) => `/companies/${id}/image/${imageName}`,
  },
  
  // Контакты
  CONTACTS: {
    BASE: '/contacts',
    BY_ID: (id: string) => `/contacts/${id}`,
  },
} as const;

// HTTP методы
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;
