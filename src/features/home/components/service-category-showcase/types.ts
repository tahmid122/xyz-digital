export interface ServicePackageItem {
  id: string;
  title: string;
  image: string;
  packageCount: number;
  startingPrice: number;
  currency?: string;
  href: string;
}

export interface ServiceCategorySectionData {
  id: string;
  title: string;
  services: ServicePackageItem[];
}
