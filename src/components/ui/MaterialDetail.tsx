import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, RotateCw, Maximize2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StaticImageData } from 'next/image';

export interface Material {
  id: number;
  name: string;
  material: string;
  process: string[];
  image: StaticImageData | { src: string };
  weight: string;
  description: string;
  specs: string[];
  has3D: boolean;
}

interface MaterialDetailProps {
  material: Material;
  onClose: () => void;
}

export const MaterialDetail: React.FC<MaterialDetailProps> = ({ material, onClose }) => {
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);

  const handle3DRotate = () => {
    setRotation((prev) => prev + 45);
  };

  const handleZoom = () => {
    setZoom((prev) => (prev >= 2 ? 1 : prev + 0.5));
  };

  // Extract src safely
  const imageSrc = 'src' in material.image ? material.image.src : (material.image as unknown as string);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:grid md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Viewer */}
        <div className="relative bg-muted aspect-square md:aspect-auto flex items-center justify-center overflow-hidden">
          <img
            src={imageSrc}
            alt={material.name}
            className="w-full h-full object-cover transition-transform duration-300"
            style={{
              transform: `rotate(${rotation}deg) scale(${zoom})`,
            }}
          />
          {/* Controls */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 rounded-full p-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-2 h-auto min-w-0"
              onClick={handleZoom}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            {material.has3D && (
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-2 h-auto min-w-0"
                onClick={handle3DRotate}
              >
                <RotateCw className="w-4 h-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-2 h-auto min-w-0"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Details */}
        <div className="p-8 overflow-y-auto bg-card relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-wider text-aged-brass font-medium font-body">
              {material.material}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground font-body">
              {material.weight}
            </span>
          </div>

          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            {material.name}
          </h2>

          <p className="text-muted-foreground font-body mb-6">
            {material.description}
          </p>

          <div className="mb-6">
            <h3 className="font-display font-semibold text-foreground mb-3">
              Available Finishes
            </h3>
            <div className="flex flex-wrap gap-2">
              {material.process.map((p) => (
                <span
                  key={p}
                  className="text-sm bg-aged-brass/10 text-aged-brass px-3 py-1 rounded-full font-body"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-display font-semibold text-foreground mb-3">
              Specifications
            </h3>
            <ul className="space-y-2">
              {material.specs.map((spec, i) => (
                <li key={i} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-aged-brass rounded-full" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <Button variant="gold" className="w-full">
            Request Sample
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
