import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faChartLine,
  faTriangleExclamation,
  faArrowsRotate,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

export default function Certifications() {
  const [open, setOpen] = useState(false);

  return (
    <section className="container mx-auto px-6 py-20">
      <SectionTitle
        eyebrow="Crédibilité professionnelle"
        title="Certifications"
        subtitle="Reconnaissance officielle, méthodologie éprouvée et pilotage orienté résultats"
      />

      {/* ===== CARTE PRINCIPALE ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-14 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* ===== IMAGE CERTIFICAT ===== */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 180 }}
          onClick={() => setOpen(true)}
          className="relative cursor-pointer group"
        >
          <img
            src="/images/certificat-sac-gdp-niriniaina.jpg"
            alt="Certification canadienne en gestion de projet"
            className="rounded-2xl border border-[#4F46E5] shadow-[0_0_35px_#4F46E5]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <span className="text-sm font-medium text-white">
              Cliquer pour afficher en plein écran
            </span>
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-white">
            <FontAwesomeIcon icon={faCertificate} className="text-yellow-400" />
            Certified
          </div>
        </motion.div>

        {/* ===== TEXTE ===== */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#8B5CF6] drop-shadow-[0_0_10px_#8B5CF6]">
            Certification canadienne — Gestion de projet
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Certification professionnelle attestant de la maîtrise complète du
            cycle de vie d’un projet, de la phase d’initiation jusqu’à la
            livraison, avec une approche structurée axée sur la performance, la
            qualité et la gestion proactive des risques.
          </p>

          {/* ===== COMPÉTENCES VALIDÉES ===== */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
            {[
              {
                icon: faClipboardList,
                color: "text-indigo-400",
                label: "Planification et structuration des projets",
              },
              {
                icon: faChartLine,
                color: "text-emerald-400",
                label: "Suivi des coûts, délais et indicateurs de performance",
              },
              {
                icon: faTriangleExclamation,
                color: "text-amber-400",
                label: "Gestion des risques et des parties prenantes",
              },
              {
                icon: faArrowsRotate,
                color: "text-purple-400",
                label: "Méthodologies classiques et agiles",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-xl px-4 py-3"
              >
                <FontAwesomeIcon icon={item.icon} className={item.color} />
                <span>{item.label}</span>
              </motion.li>
            ))}
          </ul>

          <div className="pt-4 text-sm text-gray-400">
            Obtenue en <span className="text-white font-medium">2026</span> •
            Reconnaissance canadienne
          </div>
        </div>
      </motion.div>

      {/* ===== MODAL PLEIN ÉCRAN ===== */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            src="/images/certificat-sac-gdp-niriniaina.jpg"
            alt="Certificat canadien en gestion de projet"
            className="max-h-[90vh] rounded-2xl shadow-[0_0_50px_#8B5CF6]"
          />
        </motion.div>
      )}
    </section>
  );
}
