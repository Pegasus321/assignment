// types.ts

export interface UserData {
  address: string;
  classGrade: string;
  contactNumber: string;
  emailAddress: string;
  id: string;
  name: string;
  parentContact: string;
  parentGuardian: string;
  studentId: string;
}

export interface RemindersData {
  reminders: string[];
  id: string;
}

interface Reminder {
  message: string;
}
