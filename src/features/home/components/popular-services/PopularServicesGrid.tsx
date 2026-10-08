import { popularServicesData } from "./services.data";
import { ServiceCard } from "./ServiceCard";

export function PopularServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
      {popularServicesData.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
