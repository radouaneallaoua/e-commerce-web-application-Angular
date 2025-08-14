export interface NotificationModel {
  id: number;
  title: string;
  content: string;
  userId: string;
  status: 'READIED' | 'UNREAD' | 'ARCHIVED'; // Add other statuses as needed
  date: string; // Consider using Date type if parsing dates
}