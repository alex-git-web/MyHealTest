import { AccessRecordType, ArchiveRecordType, FileCardType, FolderCardType, MedicalSpecialistType } from './types';
import MedicalSpecialist_1 from '../../../../../../../img/medical_specialists/medical_specialist_1.jpg'
import MedicalSpecialist_2 from '../../../../../../../img/medical_specialists/medical_specialist_2.jpg'
import MedicalSpecialist_3 from '../../../../../../../img/medical_specialists/medical_specialist_3.jpg'
import MedicalSpecialist_4 from '../../../../../../../img/medical_specialists/medical_specialist_4.jpg'
import MedicalSpecialist_5 from '../../../../../../../img/medical_specialists/medical_specialist_5.jpg'
import MedicalSpecialist_6 from '../../../../../../../img/medical_specialists/medical_specialist_6.jpg'
import MedicalSpecialist_7 from '../../../../../../../img/medical_specialists/medical_specialist_7.jpg'
import MedicalSpecialist_8 from '../../../../../../../img/medical_specialists/medical_specialist_8.jpg'
import MedicalSpecialist_9 from '../../../../../../../img/medical_specialists/medical_specialist_9.jpg'

export const FileCardsDefault: FileCardType[] = [
  {
    id: 1,
    createDate: '27.11.2023, 12:45',
    title: "Кров'яний тиск",
    bloodPressureType: 'Систолічний (верхній)',
    bloodPressureValue: '130 мм рт.ст.',
    files: [],
  },
  {
    id: 2,
    createDate: '12.09.2023, 12:15',
    title: 'Ангіна, захворювання горла',
    doctorName: 'Іванюк Микола Іанович',
    doctorSpeciality: 'Терапевт',
    files: ['file 1'],
  },
  {
    id: 3,
    createDate: '29.11.2023, 12:55',
    title: 'Аналіз крові',
    medicalClinicTitle: 'Сінево / Synevo',
    medicalClinicAddress: 'м. Луцьк, пр-т Соборності, 32',
    files: ['file 1', 'file 2', 'file 3', 'file 4'],
  },
  {
    id: 4,
    createDate: '19.11.2023, 12:00',
    title: "Кров'яний тиск",
    bloodPressureType: 'Систолічний (верхній)',
    bloodPressureValue: '130 мм рт.ст.',
    files: ['file 1'],
  },
  {
    id: 5,
    createDate: '15.10.2023, 12:00',
    title: 'SS-B (ANA-Screen), антитела IgG / 9329',
    medicalClinicTitle: 'Сінево / Synevo',
    medicalClinicAddress: 'Луцьк, пр-т Волі, 14',
    files: ['file 1', 'file 2'],
  },
  {
    id: 6,
    createDate: '12.11.2023, 11:00',
    title: "Кров'яний тиск",
    bloodPressureType: 'Систолічний (верхній)',
    bloodPressureValue: '130 мм рт.ст.',
    files: ['file 1', 'file 1', 'file 1', 'file 1', 'file 1'],
  },
  {
    id: 7,
    createDate: '16.11.2023, 08:00',
    title: "Кров'яний тиск",
    bloodPressureType: 'Систолічний (верхній)',
    bloodPressureValue: '130 мм рт.ст.',
    files: ['file 1', 'file 1', 'file 1'],
  },
];

export const FolderCardsDefault: FolderCardType[] = [
  {
    id: 1,
    title: 'Назва папки',
    direction: 'Незмінно пропонується широкий вибір накопичення: кредити...',
    files: ['file 1', 'file 2', 'file 3'],
  },
  {
    id: 2,
    title: 'Назва папки',
    direction: 'Незмінно пропонується широкий вибір накопичення: кредити...',
    files: ['file 1', 'file 2', 'file 3'],
  },
  {
    id: 3,
    title: 'Назва папки',
    direction: 'Незмінно пропонується широкий вибір накопичення: кредити...',
    files: ['file 1', 'file 2', 'file 3'],
  },
  {
    id: 4,
    title: 'Назва папки',
    direction: 'Незмінно пропонується широкий вибір накопичення: кредити...',
    files: ['file 1', 'file 2', 'file 3'],
  },
  {
    id: 5,
    title: 'Назва папки',
    direction: 'Незмінно пропонується широкий вибір накопичення: кредити...',
    files: ['file 1', 'file 2', 'file 3'],
  },
  {
    id: 6,
    title: 'Назва папки',
    direction: 'Незмінно пропонується широкий вибір накопичення: кредити...',
    files: ['file 1', 'file 2', 'file 3'],
  },
  {
    id: 7,
    title: 'Назва папки',
    direction: 'Незмінно пропонується широкий вибір накопичення: кредити...',
    files: ['file 1', 'file 2', 'file 3'],
  },
  {
    id: 8,
    title: 'Назва папки',
    direction: 'Незмінно пропонується широкий вибір накопичення: кредити...',
    files: ['file 1', 'file 2', 'file 3'],
  },
];


export const MedicalSpecialistsDefault: MedicalSpecialistType[] = [
  {
    photo: MedicalSpecialist_1,
    name: "Олександр",
    lastName: "Білишко",
    specialization: "Трихолог"
  },
  {
    photo: MedicalSpecialist_2,
    name: "Ірина",
    lastName: "Василькова",
    specialization: "Дерматолог"
  },
  {
    photo: MedicalSpecialist_3,
    name: "Олександр",
    lastName: "Бойко",
    specialization: "Психолог"
  },
  {
    photo: MedicalSpecialist_4,
    name: "Олена",
    lastName: "Тепла",
    specialization: "Терапевт"
  },
  {
    photo: MedicalSpecialist_5,
    name: "Світлана",
    lastName: "Коханенко",
    specialization: "Сімейний лікар"
  },
  {
    photo: MedicalSpecialist_6,
    name: "Юрій",
    lastName: "Засєда",
    specialization: "Кардіолог"
  },
  {
    photo: MedicalSpecialist_7,
    name: "Катерина",
    lastName: "Гордон",
    specialization: "Трихолог"
  },
  {
    photo: MedicalSpecialist_8,
    name: "Олександр",
    lastName: "Білишко",
    specialization: "Трихолог"
  },
  {
    photo: MedicalSpecialist_9,
    name: "Олександр",
    lastName: "Бойко",
    specialization: "Психолог"
  },
]

export const ArchiveRecordsDefault: ArchiveRecordType[] = [
  { title: "Аналіз крові" },
  { title: "Динаміка здоров\'я (Температура)" },
  { title: "Динаміка здоров\'я (Аналіз крові)" },
  { title: "Комп'ютерна томографія" },
  { title: "Рекомендації щодо лікування" },
  { title: "МРТ колінного суглоба" },
  { title: "УЗД м'яких тканин" },
]

export const AccessRecordsDefault: AccessRecordType[] = [
  {
    id: 1,
    medicalSpecialist: {
      photo: MedicalSpecialist_1,
      name: "Олександр",
      lastName: "Білишко",
      specialization: "Трихолог",
    },
    categoryType: ['Усі категорії'],
    validity: "27.11.2023 - 22.01.2024",
  },
  {
    id: 2,
    medicalSpecialist: {
      photo: MedicalSpecialist_3,
      name: "Ірина",
      lastName: "Василькова",
      specialization: "Дерматолог",
    },
    categoryType: ['Динаміка здоров\'я', 'Аналіз крові'],
    validity: "12.10.2023 - 26.04.2024",
  },
  {
    id: 3,
    medicalSpecialist: {
      photo: MedicalSpecialist_2,
      name: "Олександр",
      lastName: "Бойко",
      specialization: "Психолог",
    },
    categoryType: ['Усі категорії'],
    validity: "06.09.2023 - 10.03.2024",
  },
  {
    id: 4,
    medicalSpecialist: {
      photo: MedicalSpecialist_5,
      name: "Олена",
      lastName: "Тепла",
      specialization: "Терапевт",
    },
    categoryType: ['Рекомендації щодо лікування'],
    validity: "01.10.2023 - 01.04.2024",
  },
  {
    id: 5,
    medicalSpecialist: {
      photo: MedicalSpecialist_6,
      name: "Світлана",
      lastName: "Коханенко",
      specialization: "Сімейний лікар",
    },
    categoryType: ['Усі категорії'],
    validity: "08.07.2023 - 22.09.2024",
  },
  {
    id: 6,
    medicalSpecialist: {
      photo: MedicalSpecialist_2,
      name: "Юрій",
      lastName: "Засєда",
      specialization: "Кардіолог",
    },
    categoryType: ['УЗД', 'МРТ', 'Рентген', 'Комп\'ютерна томографія'],
    validity: "01.11.2023 - 10.07.2024",
  },
  {
    id: 7,
    medicalSpecialist: {
      photo: MedicalSpecialist_6,
      name: "Катерина",
      lastName: "Гордон",
      specialization: "Трихолог",
    },
    categoryType: ['Усі категорії'],
    validity: "29.05.2023 - 12.01.2024",
  },
  {
    id: 8, medicalSpecialist: {
      photo: MedicalSpecialist_1,
      name: "Олександр",
      lastName: "Білишко",
      specialization: "Трихолог",
    },
    categoryType: ['Динаміка здоров\'я'],
    validity: "02.09.2023 - 14.02.2024",
  },
  {
    id: 9,
    medicalSpecialist: {
      photo: MedicalSpecialist_2,
      name: "Олександр",
      lastName: "Бойко",
      specialization: "Психолог",
    },
    categoryType: ['Аналіз крові', 'Аналіз калу'],
    validity: "28.03.2023 - 28.01.2024",
  },
]