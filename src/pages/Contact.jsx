import profile from '../data/profile';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <section className="container mx-auto py-16 px-4 md:py-20">
      <SectionTitle
        eyebrow="Contact"
        title="Parlons de votre projet"
        subtitle="Je réponds rapidement par téléphone, email ou via le bouton ci-dessous."
      />

      <motion.div
        className="grid md:grid-cols-2 gap-12 md:gap-10 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Informations de contact */}
        <motion.div
          className="bg-gray-900/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 shadow-xl flex flex-col gap-6"
          variants={cardVariants}
          whileHover="hover"
        >
          <h3 className="text-2xl font-semibold text-white">Mes coordonnées</h3>

          <p className="flex items-center gap-3 text-gray-300">
            <span className="text-cyan-400 text-lg">📞</span>
            <span>
              <a
                href={`tel:${profile.phone1}`}
                className="hover:text-white transition-colors duration-300"
              >
                {profile.phone1}
              </a>
              {profile.phone2 && (
                <>
                  {' / '}
                  <a
                    href={`tel:${profile.phone2}`}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {profile.phone2}
                  </a>
                </>
              )}
            </span>
          </p>

          <p className="flex items-center gap-3 text-gray-300">
            <span className="text-cyan-400 text-lg">📧</span>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-white transition-colors duration-300"
            >
              {profile.email}
            </a>
          </p>

          <p className="flex items-center gap-3 text-gray-300">
            <span className="text-cyan-400 text-lg">📍</span>
            <span>{profile.location}</span>
          </p>

          <div className="flex gap-4 mt-4">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-2xl"
                aria-label={`Visiter ${social.label}`}
              >
                {social.label === 'GitHub' && <i className="fab fa-github" />}
                {social.label === 'LinkedIn' && <i className="fab fa-linkedin" />}
                {social.label === 'Twitter' && <i className="fab fa-twitter" />}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bouton mailto */}
        <motion.div
          className="bg-gray-900/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 shadow-xl flex flex-col items-center justify-center gap-6"
          variants={cardVariants}
          whileHover="hover"
        >
          <h3 className="text-2xl font-semibold text-white">Envoyer un email</h3>
          <p className="text-gray-300 text-center">
            Cliquez sur le bouton ci-dessous pour ouvrir votre client mail et m'envoyer un message directement.
          </p>

          <a
            href={`mailto:rovatiananiriniaina1@gmail.com`}
            className="btn w-full md:w-auto text-center py-3 px-6 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#8B5CF6] text-white font-medium transition-all duration-300"
          >
            Envoyer un email
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
