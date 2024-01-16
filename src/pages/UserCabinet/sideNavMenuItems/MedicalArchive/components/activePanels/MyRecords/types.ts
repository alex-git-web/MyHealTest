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

export type ContentElementsDisplayModeType = "grid" | "list";
export type ContentDisplayedElementsType = "files" | "folders";
