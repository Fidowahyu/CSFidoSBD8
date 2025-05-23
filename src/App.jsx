import React, { useState } from "react";

import TwitchDark from "../public/twitchDark.png";
import TwitchTextLogo from "../public/twitchlogotulisan.png";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSignUp = () => {
    const signUpSection = document.getElementById("sign-up-section");
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${darkMode ? "dark brightness-75" : ""} font-sans text-gray-800 transition duration-300`}
    >
      {/* Navbar */}
      <nav className="bg-purple-900 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={TwitchDark}
            alt="Twitch Logo"
            className="w-8 h-8 cursor-pointer"
            onClick={scrollToSignUp}
          />
          <div className="text-2xl font-bold">Twitch</div>
        </div>
        <div className="space-x-4">
          <button className="hover:underline" onClick={scrollToSignUp}>Login</button>
          <button
            className="bg-white text-purple-800 font-semibold px-4 py-1 rounded-full hover:bg-gray-100 transition"
            onClick={scrollToSignUp}
          >
            Sign Up
          </button>
          <button
            className="bg-gray-800 text-white font-semibold px-4 py-1 rounded-full hover:bg-gray-700 transition"
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-purple-800 text-white min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <img src={TwitchTextLogo} alt="Twitch Text Logo" className="mx-auto mb-6 w-64" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Streaming Jadi Lebih Seru Bersama Twitch!</h1>
          <p className="mb-6 text-lg">Gabung bersama jutaan kreator dan penonton yang bikin dunia hiburan makin hidup.</p>
          <button
            className="bg-white text-purple-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
            onClick={scrollToSignUp}
          >
            Mulai Streaming Sekarang
          </button>
        </div>
      </section>

      {/* Tentang Twitch */}
      <section className="py-16 px-6 bg-white text-center dark:bg-gray-800 dark:text-white">
        <img src={TwitchDark} alt="Twitch Logo" className="mx-auto mb-6 w-32 h-32" />
        <h2 className="text-3xl font-bold mb-4">Tentang Twitch</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Twitch adalah platform live streaming terpopuler di dunia. Fokus pada konten gaming, musik, IRL, dan banyak lagi. Misi kami adalah menghubungkan orang melalui hiburan langsung.
        </p>
      </section>

      {/* Fitur Unggulan */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <h2 className="text-3xl font-bold text-center mb-10">Fitur Unggulan</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Live Chat Interaktif</h3>
            <p>Penonton bisa langsung berinteraksi dengan kreator secara real-time.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Monetisasi Kreator</h3>
            <p>Kreator bisa menghasilkan uang dari iklan, donasi, dan langganan.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Streaming Gaming & IRL</h3>
            <p>Nikmati konten game, daily vlog, musik, dan acara spesial lainnya.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Mode Gelap</h3>
            <p>Pengalaman menonton lebih nyaman dengan mode gelap yang ramah mata.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Notifikasi Real-Time</h3>
            <p>Dapatkan notifikasi langsung saat kreator favorit Anda mulai streaming.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Komunitas Global</h3>
            <p>Bergabung dengan komunitas global yang berbagi minat yang sama.</p>
          </div>
        </div>
      </section>

      {/* Section Daftar Gratis */}
      <section id="sign-up-section" className="py-16 px-6 bg-purple-700 text-white text-center dark:bg-purple-900">
        <h2 className="text-3xl font-bold mb-4">Gabung Sekarang dan Mulai Siaranmu!</h2>
        <p className="mb-6">Twitch selalu terbuka untuk kreator baru dan penonton setia.</p>
        <a
          href="https://www.twitch.tv/sign-up/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-purple-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition transform hover:scale-110"
        >
          Daftar Gratis
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 text-center dark:bg-black">
        <div className="mb-4">Follow kami di @Twitch | Support: support@twitch.tv</div>
        <div className="text-sm">© {new Date().getFullYear()} Twitch Interactive, Inc.</div>
      </footer>
    </div>
  );
}
