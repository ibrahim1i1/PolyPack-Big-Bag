// تعريف اللغات المدعومة في الموقع
export type Language = 'tr' | 'en';

export interface LocalizedText {
  tr: string;
  en: string;
}

export interface ProductFeature {
  tr: string;
  en: string;
}

export interface Product {
  slug: string;               
  title: LocalizedText;     
  image: string;            
  capacity: string;         
  capacityNote: LocalizedText;   
  desc: LocalizedText;         
  usage: LocalizedText;       
  features: ProductFeature[];  
}

export interface CompanyInfo {
  name: string;
  phone: string;            
  phoneRaw: string;       
  whatsapp: string;             
  whatsappRaw: string;          
  email: string;
  address: LocalizedText;
  mapUrl: string;               
}