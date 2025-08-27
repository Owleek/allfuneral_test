import { API_ENDPOINTS, HTTP_METHODS } from './endpoints';
import type { Company, Contact, AuthResponse, ApiResponse } from './types';

// Базовый API клиент
class ApiClient {
  private baseURL: string;
  private token?: string;

  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;
  }

  setToken(token: string) {
    this.token = token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Аутентификация
  async auth(): Promise<ApiResponse<AuthResponse>> {
    return this.request<AuthResponse>(API_ENDPOINTS.AUTH, {
      method: HTTP_METHODS.GET,
    });
  }

  // Компании
  async getCompany(id: string): Promise<ApiResponse<Company>> {
    return this.request<Company>(API_ENDPOINTS.COMPANIES.BY_ID(id), {
      method: HTTP_METHODS.GET,
    });
  }

  async updateCompany(id: string, data: Partial<Company>): Promise<ApiResponse<Company>> {
    return this.request<Company>(API_ENDPOINTS.COMPANIES.BY_ID(id), {
      method: HTTP_METHODS.PATCH,
      body: JSON.stringify(data),
    });
  }

  async deleteCompany(id: string): Promise<ApiResponse<void>> {
    return this.request<void>(API_ENDPOINTS.COMPANIES.BY_ID(id), {
      method: HTTP_METHODS.DELETE,
    });
  }

  async uploadCompanyImage(id: string, image: File): Promise<ApiResponse<{ imageUrl: string }>> {
    const formData = new FormData();
    formData.append('image', image);

    return this.request<{ imageUrl: string }>(API_ENDPOINTS.COMPANIES.IMAGE(id), {
      method: HTTP_METHODS.POST,
      body: formData,
      headers: {}, // Убираем Content-Type для FormData
    });
  }

  async deleteCompanyImage(id: string, imageName: string): Promise<ApiResponse<void>> {
    return this.request<void>(API_ENDPOINTS.COMPANIES.IMAGE_BY_NAME(id, imageName), {
      method: HTTP_METHODS.DELETE,
    });
  }

  // Контакты
  async getContact(id: string): Promise<ApiResponse<Contact>> {
    return this.request<Contact>(API_ENDPOINTS.CONTACTS.BY_ID(id), {
      method: HTTP_METHODS.GET,
    });
  }

  async updateContact(id: string, data: Partial<Contact>): Promise<ApiResponse<Contact>> {
    return this.request<Contact>(API_ENDPOINTS.CONTACTS.BY_ID(id), {
      method: HTTP_METHODS.PATCH,
      body: JSON.stringify(data),
    });
  }
}

export const apiClient = new ApiClient();
export default apiClient;
