export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: "rent" | "sale";
  imageUrl: string;
  // يمكن إضافة المزيد من الخصائص لاحقاً
}
