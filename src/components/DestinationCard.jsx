import React from "react";
const size = 32
export default function DestinationCard({ destination }) {

  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img className=
      // "h-32 w-32 flex-shrink-0"
      {`h-{$size} w-{$size} flex-shrink-0`}  
      // npm run build: "vite build" makes vite's preinstalled postprocessor purgecss build without w-32 and h-32 selectors 
      // when this code used instad.
      // Purgecss literally looks for the string literally called "h-32 w-32 in all files" when build for prd.
      // Uncomment string literal. uncomment <p>h-32 w-32</p> and you will see h-32 w-32 are included again in 
      // build file dist > assets > index.xxxxxx.css.
      src={destination.imageUrl} alt={destination.imageAlt} />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{destination.city}</h3>

        <p className="text-gray-600">${destination.averagePrice} / night average</p>
        <div className="mt-4">
          <a href="#" className="text-brand-dark hover:text-brand font-semibold text-sm">
            Explore {destination.propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
}
