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

export type FolderCardType = {
  id: number;
  title: string;
  direction: string;
  files: any[];
};

export type FilterPropsType = {
  selectedCategory: string | null;
  selectedStatus: string | null;
  fromDate: Date | null;
  toDate: Date | null;
};

export type ContentElementsDisplayModeType = "grid" | "list";
export type ContentDisplayedElementsType = "files" | "folders";


export type MedicalSpecialistType = {
  photo: string,
  name: string,
  lastName: string,
  specialization: string
}

export type ArchiveRecordType = string