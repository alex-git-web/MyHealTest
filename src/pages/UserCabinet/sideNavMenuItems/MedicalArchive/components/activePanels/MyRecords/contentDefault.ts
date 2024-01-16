import { FileCardType, FolderCardType } from "./types";

export const FileCardsDefault: FileCardType[] = [
  {
    id: 1,
    createDate: "27.11.2023, 12:45",
    title: "Кров'яний тиск",
    bloodPressureType: "Систолічний (верхній)",
    bloodPressureValue: "130 мм рт.ст.",
    files: [],
  },
  {
    id: 2,
    createDate: "12.09.2023, 12:15",
    title: "Ангіна, захворювання горла",
    doctorName: "Іванюк Микола Іанович",
    doctorSpeciality: "Терапевт",
    files: ["file 1"],
  },
  {
    id: 3,
    createDate: "29.11.2023, 12:55",
    title: "Аналіз крові",
    medicalClinicTitle: "Сінево / Synevo",
    medicalClinicAddress: "м. Луцьк, пр-т Соборності, 32",
    files: ["file 1", "file 2", "file 3", "file 4"],
  },
  {
    id: 4,
    createDate: "19.11.2023, 12:00",
    title: "Кров'яний тиск",
    bloodPressureType: "Систолічний (верхній)",
    bloodPressureValue: "130 мм рт.ст.",
    files: ["file 1"],
  },
  {
    id: 5,
    createDate: "15.10.2023, 12:00",
    title: "SS-B (ANA-Screen), антитела IgG / 9329",
    medicalClinicTitle: "Сінево / Synevo",
    medicalClinicAddress: "Луцьк, пр-т Волі, 14",
    files: ["file 1", "file 2"],
  },
  {
    id: 6,
    createDate: "12.11.2023, 11:00",
    title: "Кров'яний тиск",
    bloodPressureType: "Систолічний (верхній)",
    bloodPressureValue: "130 мм рт.ст.",
    files: ["file 1", "file 1", "file 1", "file 1", "file 1"],
  },
  {
    id: 7,
    createDate: "16.11.2023, 08:00",
    title: "Кров'яний тиск",
    bloodPressureType: "Систолічний (верхній)",
    bloodPressureValue: "130 мм рт.ст.",
    files: ["file 1", "file 1", "file 1"],
  },
];

export const FolderCardsDefault: FolderCardType[] = [
  {
    id: 1,
    title: "Назва папки",
    direction: "Незмінно пропонується широкий вибір накопичення: кредити...",
    files: ["file 1", "file 2", "file 3"],
  },
  {
    id: 2,
    title: "Назва папки",
    direction: "Незмінно пропонується широкий вибір накопичення: кредити...",
    files: ["file 1", "file 2", "file 3"],
  },
  {
    id: 3,
    title: "Назва папки",
    direction: "Незмінно пропонується широкий вибір накопичення: кредити...",
    files: ["file 1", "file 2", "file 3"],
  },
  {
    id: 4,
    title: "Назва папки",
    direction: "Незмінно пропонується широкий вибір накопичення: кредити...",
    files: ["file 1", "file 2", "file 3"],
  },
  {
    id: 5,
    title: "Назва папки",
    direction: "Незмінно пропонується широкий вибір накопичення: кредити...",
    files: ["file 1", "file 2", "file 3"],
  },
  {
    id: 6,
    title: "Назва папки",
    direction: "Незмінно пропонується широкий вибір накопичення: кредити...",
    files: ["file 1", "file 2", "file 3"],
  },
  {
    id: 7,
    title: "Назва папки",
    direction: "Незмінно пропонується широкий вибір накопичення: кредити...",
    files: ["file 1", "file 2", "file 3"],
  },
  {
    id: 8,
    title: "Назва папки",
    direction: "Незмінно пропонується широкий вибір накопичення: кредити...",
    files: ["file 1", "file 2", "file 3"],
  },
];
