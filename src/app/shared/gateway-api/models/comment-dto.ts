/* tslint:disable */
export interface CommentDTO {
  commentType?: 'ACTION' | 'CLOSE_REQUEST';
  content?: string;
  id?: number;
  postId?: number;
  userId?: string;
}
