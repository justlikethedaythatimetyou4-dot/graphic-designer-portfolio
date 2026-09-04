import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Project } from '@/data/portfolio';
import {
  MiraHouseCard, MiraHouseMenu, MiraHouseSignage, BusinessCardStack,
  CoffeeBagFront, CoffeeCup, CoffeeBox, StickerSheet,
  AfterDarkPoster, AfterDarkBanner,
  FormMagazineCover, FormSpread,
  NovaSkinWebsite, NovaSkinSocial,
  TypeExperimentA, TypeExperimentB, TypeExperimentC,
} from './DesignMockups';

type LayoutVariant = 'left-image' | 'right-image' | 'full-bleed' | 'split' | 'stacked' | 'offset';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

const layouts: LayoutVariant[] = [
  'left-image',
  'right-image',
  'full-bleed',
  'split',
  'stacked',
  'offset',
];

function ProjectMockups({ projectId }: { projectId: string }) {
  switch (projectId) {
    case 'mira-house':
      return (
        <div className="grid grid-cols-2 gap-3 w-full h-full">
          <div className="flex items-center justify-center"><MiraHouseCard className="w-full h-auto" /></div>
          <div className="flex items-center justify-center"><BusinessCardStack className="w-full h-auto" /></div>
          <div className="flex items-center justify-center"><MiraHouseMenu className="w-full h-auto" /></div>
          <div className="flex items-center justify-center"><MiraHouseSignage className="w-full h-auto" /></div>
        </div>
      );
    case 'common-ground':
      return (
        <div className="grid grid-cols-3 gap-3 w-full h-full">
          <div className="flex items-center justify-center"><CoffeeBagFront className="w-full h-auto" label="DARK ROAST" /></div>
          <div className="flex items-center justify-center"><CoffeeBagFront className="w-full h-auto" label="HOUSE BLEND" color="#8B7355" /></div>
          <div className="flex items-center justify-center"><CoffeeCup className="w-full h-auto" /></div>
          <div className="col-span-2 flex items-center justify-center"><CoffeeBox className="w-full h-auto" /></div>
          <div className="flex items-center justify-center"><StickerSheet className="w-full h-auto" /></div>
        </div>
      );
    case 'city-after-dark':
      return (
        <div className="grid grid-cols-3 gap-3 w-full h-full">
          <div className="flex items-center justify-center"><AfterDarkPoster variant={1} className="w-full h-auto" /></div>
          <div className="flex items-center justify-center"><AfterDarkPoster variant={2} className="w-full h-auto" /></div>
          <div className="flex items-center justify-center"><AfterDarkPoster variant={3} className="w-full h-auto" /></div>
          <div className="col-span-3 flex items-center justify-center"><AfterDarkBanner className="w-full h-auto" /></div>
        </div>
      );
    case 'form-magazine':
      return (
        <div className="grid grid-cols-2 gap-3 w-full h-full">
          <div className="flex items-center justify-center"><FormMagazineCover className="w-full h-auto" /></div>
          <div className="flex items-center justify-center"><FormSpread className="w-full h-auto" /></div>
        </div>
      );
    case 'nova-skin':
      return (
        <div className="grid grid-cols-2 gap-3 w-full h-full">
          <div className="col-span-2 flex items-center justify-center"><NovaSkinWebsite className="w-full h-auto" /></div>
          <div className="flex items-center justify-center"><NovaSkinSocial variant={1} className="w-full h-auto" /></div>
          <div className="flex items-center justify-center"><NovaSkinSocial variant={2} className="w-full h-auto" /></div>
        </div>
      );
    case 'type-motion-form':
      return (
        <div className="grid grid-cols-3 gap-3 w-full h-full">
          <div className="flex items-center justify-center"><TypeExperimentA className="w-full h-auto" /></div>
          <div className="flex items-center justify-center"><TypeExperimentB className="w-full h-auto" /></div>
          <div className="flex items-center justify-center"><TypeExperimentC className="w-full h-auto" /></div>
        </div>
      );
    default:
      return null;
  }
}

function ProjectHeroMockup({ projectId }: { projectId: string }) {
  switch (projectId) {
    case 'mira-house':
      return <BusinessCardStack className="w-full h-auto max-w-[500px]" />;
    case 'common-ground':
      return (
        <div className="flex gap-4 items-end justify-center w-full">
          <CoffeeBagFront className="w-32 md:w-40 h-auto" label="DARK ROAST" />
          <CoffeeBagFront className="w-32 md:w-40 h-auto" label="HOUSE BLEND" color="#8B7355" />
          <CoffeeCup className="w-24 md:w-28 h-auto" />
        </div>
      );
    case 'city-after-dark':
      return (
        <div className="flex gap-3 justify-center w-full">
          <AfterDarkPoster variant={1} className="w-28 md:w-36 h-auto" />
          <AfterDarkPoster variant={2} className="w-28 md:w-36 h-auto" />
          <AfterDarkPoster variant={3} className="w-28 md:w-36 h-auto" />
        </div>
      );
    case 'form-magazine':
      return (
        <div className="flex gap-4 justify-center w-full">
          <FormMagazineCover className="w-40 md:w-48 h-auto" />
          <FormSpread className="w-60 md:w-72 h-auto" />
        </div>
      );
    case 'nova-skin':
      return <NovaSkinWebsite className="w-full h-auto max-w-[600px]" />;
    case 'type-motion-form':
      return (
        <div className="flex gap-3 justify-center w-full">
          <TypeExperimentA className="w-28 md:w-36 h-auto" />
          <TypeExperimentB className="w-28 md:w-36 h-auto" />
          <TypeExperimentC className="w-28 md:w-36 h-auto" />
        </div>
      );
    default:
      return null;
  }
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const layout = layouts[index % layouts.length];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const mockupY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  const accent = project.accent;

  const ProjectNumber = () => (
    <div className="flex items-baseline gap-2">
      <span
        className="font-serif-display text-6xl md:text-8xl leading-none transition-colors duration-500"
        style={{ color: hovered ? accent : '#111111' }}
      >
        {project.number}
      </span>
      <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/30">/ 06</span>
    </div>
  );

  const ProjectMeta = () => (
    <div className="flex flex-col gap-1">
      <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">{project.category}</span>
      <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">{project.year}</span>
    </div>
  );

  const ProjectTitle = () => (
    <h3
      className="font-serif-display text-4xl md:text-6xl leading-[0.95] tracking-tight text-ink transition-transform duration-500"
      style={{ transform: hovered ? 'translateX(8px)' : 'translateX(0)' }}
    >
      {project.title}
    </h3>
  );

  const ProjectStatement = () => (
    <p
      className="font-serif-display text-2xl md:text-3xl leading-tight whitespace-pre-line transition-colors duration-500"
      style={{ color: hovered ? accent : '#11111199' }}
    >
      {project.statement}
    </p>
  );

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  // ── Layout: left-image ──
  if (layout === 'left-image') {
    return (
      <div ref={ref} className="grid grid-cols-12 gap-4 md:gap-6 items-center">
        <div className="col-span-12 md:col-span-7 order-2 md:order-1">
          <div
            data-cursor="view"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onOpen}
            className="relative aspect-[4/3] overflow-hidden cursor-pointer p-6 md:p-10"
            style={{ background: accent + '10' }}
          >
            <motion.div style={{ y: mockupY }} className="w-full h-full flex items-center justify-center">
              <ProjectHeroMockup projectId={project.id} />
            </motion.div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 order-1 md:order-2 flex flex-col gap-4">
          <ProjectNumber />
          <ProjectMeta />
          <ProjectTitle />
          <ProjectStatement />
          <button onClick={onOpen} data-cursor="open" className="font-sans text-xs uppercase tracking-wide-meta text-ink border-b border-ink/30 w-fit pb-1 hover:border-ink transition-colors">
            View Project →
          </button>
        </div>
      </div>
    );
  }

  // ── Layout: right-image ──
  if (layout === 'right-image') {
    return (
      <div ref={ref} className="grid grid-cols-12 gap-4 md:gap-6 items-center">
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
          <ProjectNumber />
          <ProjectMeta />
          <ProjectTitle />
          <ProjectStatement />
          <button onClick={onOpen} data-cursor="open" className="font-sans text-xs uppercase tracking-wide-meta text-ink border-b border-ink/30 w-fit pb-1 hover:border-ink transition-colors">
            View Project →
          </button>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div
            data-cursor="view"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onOpen}
            className="relative aspect-[4/3] overflow-hidden cursor-pointer p-6 md:p-10"
            style={{ background: accent + '10' }}
          >
            <motion.div style={{ y: mockupY }} className="w-full h-full flex items-center justify-center">
              <ProjectHeroMockup projectId={project.id} />
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // ── Layout: full-bleed ──
  if (layout === 'full-bleed') {
    return (
      <div ref={ref} className="flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2"><ProjectNumber /><ProjectMeta /></div>
          <div className="text-right"><ProjectTitle /></div>
        </div>
        <div
          data-cursor="view"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onOpen}
          className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer p-8 md:p-16"
          style={{ background: accent + '10' }}
        >
          <motion.div style={{ y: mockupY }} className="w-full h-full flex items-center justify-center">
            <ProjectHeroMockup projectId={project.id} />
          </motion.div>
          <div className="absolute bottom-6 left-6"><ProjectStatement /></div>
        </div>
        <button onClick={onOpen} data-cursor="open" className="font-sans text-xs uppercase tracking-wide-meta text-ink border-b border-ink/30 w-fit pb-1 hover:border-ink transition-colors">
          View Project →
        </button>
      </div>
    );
  }

  // ── Layout: split ──
  if (layout === 'split') {
    return (
      <div ref={ref} className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
          <ProjectNumber />
          <ProjectTitle />
          <ProjectMeta />
          <ProjectStatement />
          <button onClick={onOpen} data-cursor="open" className="font-sans text-xs uppercase tracking-wide-meta text-ink border-b border-ink/30 w-fit pb-1 hover:border-ink transition-colors">
            View Project →
          </button>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div
            data-cursor="view"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onOpen}
            className="relative aspect-[3/4] overflow-hidden cursor-pointer p-6"
            style={{ background: accent + '10' }}
          >
            <div className="w-full h-full"><ProjectMockups projectId={project.id} /></div>
          </div>
        </div>
      </div>
    );
  }

  // ── Layout: stacked ──
  if (layout === 'stacked') {
    return (
      <div ref={ref} className="flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2"><ProjectNumber /><ProjectMeta /></div>
          <div className="text-right"><ProjectTitle /><ProjectStatement /></div>
        </div>
        <div
          data-cursor="view"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onOpen}
          className="relative w-full aspect-[16/10] overflow-hidden cursor-pointer p-8 md:p-12"
          style={{ background: accent + '10' }}
        >
          <div className="w-full h-full"><ProjectMockups projectId={project.id} /></div>
        </div>
        <button onClick={onOpen} data-cursor="open" className="font-sans text-xs uppercase tracking-wide-meta text-ink border-b border-ink/30 w-fit pb-1 hover:border-ink transition-colors">
          View Project →
        </button>
      </div>
    );
  }

  // ── Layout: offset ──
  return (
    <div ref={ref} className="grid grid-cols-12 gap-4 md:gap-6 items-start">
      <div className="col-span-12 md:col-span-4 md:pt-20 flex flex-col gap-4">
        <ProjectNumber />
        <ProjectMeta />
        <ProjectTitle />
        <ProjectStatement />
        <button onClick={onOpen} data-cursor="open" className="font-sans text-xs uppercase tracking-wide-meta text-ink border-b border-ink/30 w-fit pb-1 hover:border-ink transition-colors">
          View Project →
        </button>
      </div>
      <div className="col-span-12 md:col-span-8">
        <div
          data-cursor="view"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onOpen}
          className="relative aspect-[3/2] overflow-hidden cursor-pointer p-8 md:p-12"
          style={{ background: accent + '10' }}
        >
          <div className="w-full h-full"><ProjectMockups projectId={project.id} /></div>
        </div>
      </div>
    </div>
  );
}
