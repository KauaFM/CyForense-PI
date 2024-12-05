import React, { createContext, useContext, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormContextProps {
  formDataList: FormData[];
  addFormData: (data: FormData) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useFormContext = (): FormContextProps => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);

  const addFormData = (data: FormData) => {
    setFormDataList((prev) => [...prev, data]);
  };

  return (
    <FormContext.Provider value={{ formDataList, addFormData }}>
      {children}
    </FormContext.Provider>
  );
};
