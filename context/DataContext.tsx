// DataContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from "../firebase/firebaseConfig";

interface DataContextProps {
  children: ReactNode;
}

interface User {
  id: string;
  // Add other user properties as needed
}

interface Notification {
  id: string;
  // Add other notification properties as needed
}

interface DataContextValue {
  userData: User[];
  notificationData: Notification[];
  fetchData: () => Promise<void>;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export const DataProvider: React.FC<DataContextProps> = ({ children }) => {
  const [userData, setUserData] = useState<User[]>([]);
  const [notificationData, setNotificationData] = useState<Notification[]>([]);

  const fetchData = async (): Promise<void> => {
    try {
      const colRefUser = collection(FIREBASE_DB, "user");
      const colRefNotif = collection(FIREBASE_DB, "notification");

      const userSnapshot = await getDocs(colRefUser);
      const user: User[] = userSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserData(user);

      const notifSnapshot = await getDocs(colRefNotif);
      const notification: Notification[] = notifSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNotificationData(notification);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue: DataContextValue = {
    userData,
    notificationData,
    fetchData,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = (): DataContextValue => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
