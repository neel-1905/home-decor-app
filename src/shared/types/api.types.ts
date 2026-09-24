export interface ApiResponse<T> {
  success: true;
  status_code: number;
  message: string;
  data: T;
}

export interface PaginationMeta {
  total_records: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  has_next_page: boolean;
  has_prev_page: boolean;
}

export interface PaginatedResponse<T> {
  success: true;
  status_code: number;
  message: string;
  data: T[];
  meta: PaginationMeta;
}

export interface ValidationError {
  field: string;
  rule: string;
  message: string;
}

export interface ApiErrorResponse {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  timestamp: string;
  errors?: ValidationError[];
}
