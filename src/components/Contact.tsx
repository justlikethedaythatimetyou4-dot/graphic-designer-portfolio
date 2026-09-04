import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useScroll';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  const { inView, ref } = useInView<HTMLDivElement>(0.1);
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', project: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className="relative bg-ivory py-24 md:py-40 px-6 md:px-10 grain">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            §12
          </span>
          <span className="h-px w-12 bg-ink/20" />
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            Contact
          </span>
        </div>

        {/* Large statement */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-serif-display text-6xl md:text-[10vw] leading-[0.85] tracking-tightest text-ink"
            >
              Have an idea
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-serif-display text-6xl md:text-[10vw] leading-[0.85] tracking-tightest text-ink"
            >
              worth making
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-serif-display text-6xl md:text-[10vw] leading-[0.85] tracking-tightest text-ink"
            >
              <span className="text-vermilion italic">visible?</span>
            </motion.h2>
          </div>
        </div>

        {/* Let's talk CTA */}
        <motion.a
          href="mailto:hello@ananyarao.studio"
          data-cursor="open"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="group inline-flex items-center gap-4 mb-16 md:mb-24"
        >
          <span className="font-serif-display text-4xl md:text-7xl text-ink group-hover:text-vermilion transition-colors duration-300">
            Let's talk
          </span>
          <ArrowRight className="w-10 h-10 md:w-16 md:h-16 text-ink group-hover:text-vermilion transition-colors duration-300 group-hover:translate-x-4" />
        </motion.a>

        {/* Contact details + form */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 border-t border-ink/10 pt-12 md:pt-16">
          {/* Details */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-8">
            <div>
              <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-2">
                Email
              </div>
              <a
                href="mailto:hello@ananyarao.studio"
                data-cursor="open"
                className="font-serif-display text-xl md:text-2xl text-ink hover:text-vermilion transition-colors"
              >
                hello@ananyarao.studio
              </a>
            </div>
            <div>
              <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-2">
                Location
              </div>
              <div className="font-serif-display text-xl md:text-2xl text-ink">
                Bengaluru, India
              </div>
              <div className="font-sans text-sm text-ink/50 mt-1">
                Available worldwide
              </div>
            </div>
            <div>
              <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-3">
                Status
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vermilion opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-vermilion" />
                </span>
                <span className="font-sans text-xs text-ink/60">
                  Available for select projects
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <FormField
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
              </div>
              <FormField
                label="Project"
                value={form.project}
                onChange={(v) => setForm({ ...form, project: v })}
              />
              <div>
                <label className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-2 block">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none font-sans text-base text-ink py-2 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                data-cursor="open"
                className="group flex items-center gap-3 font-sans text-sm uppercase tracking-wide-meta text-ink border-b border-ink/30 pb-2 w-fit hover:border-ink transition-colors"
              >
                {submitted ? 'Sent — Thank you' : 'Send Inquiry'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-2 block">
        {label}
        {required && <span className="text-vermilion">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none font-sans text-base text-ink py-2 transition-colors"
      />
    </div>
  );
}
