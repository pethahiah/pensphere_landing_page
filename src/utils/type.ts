export interface IUserCard {
  id: string;
  username: string;
  email: string;
  hasPaid: boolean;
  expense: any;
  user: any;
  paid: number;
  payable: number;
  amtPaid: number;
  isMine: boolean;
  hasReminderLink?: boolean;
  type?: 'RefundMe' | 'Kontribute' | 'Ajo Klub' | 'Transaction';
  handleEdit?: (val: string, id: string) => void;
  refetchMembers?,
  status?: 'accept' | 'reject' | null;
  collectingMember?: null | Record<string, any>;
  paymentMap?: null | Record<string, any>;
  userPayment?: Record<string, any>;
  membersOnly?: boolean;
}