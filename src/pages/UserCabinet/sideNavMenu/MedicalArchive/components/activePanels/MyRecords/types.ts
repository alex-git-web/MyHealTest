export type FileCardType = {
  id: number;
  createDate: string;
  title: string;
  bloodPressureType?: string;
  bloodPressureValue?: string;
  doctorName?: string;
  doctorSpeciality?: string;
  medicalClinicTitle?: string;
  medicalClinicAddress?: string;
  files: any[];
};
