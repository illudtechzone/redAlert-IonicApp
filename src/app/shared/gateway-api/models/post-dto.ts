/* tslint:disable */
export interface PostDTO {
  active?: boolean;
  alertLevel?: 'RED' | 'ORANGE' | 'GREEN';
  createdOn?: string;
  description?: string;
  id?: number;
  locationId?: number;
  userId?: string;
}
