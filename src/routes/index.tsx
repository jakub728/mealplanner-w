import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import onionLogo from "../assets/Onion-MealPlanner-icon.png";
import gPlayImg from "../assets/g_play.png";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
      <div className="max-w-6xl mx-auto p-6 space-y-20">
        {/* HERO SECTION */}
        <header className="text-center space-y-8 pt-10">
          <div className="flex flex-col justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 blur-3xl opacity-20 rounded-full"></div>
              <img
                src={onionLogo}
                alt="Logo Onion Meals"
                className="w-28 h-28 object-contain drop-shadow-2xl relative z-10"
              />
            </div>
            <h1 className="mt-6 text-6xl font-black text-zinc-900 dark:text-white tracking-tighter">
              Onion<span className="text-[#ffee00]">Meals</span>
            </h1>
          </div>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Twój osobisty asystent kuchenny. Planuj, gotuj i dziel się
            przepisami – bez płaczu (chyba że przy krojeniu cebuli).
          </p>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            <span className="text-zinc-900 dark:text-zinc-100 font-semibold italic">
              Manage and Cook - Twoja kuchnia, Twoje zasady
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            {/* Przycisk Google Play */}
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-zinc-200 dark:shadow-none">
              <img
                src={gPlayImg}
                alt="Google Play"
                className="w-6 h-6 object-contain"
              />
              <span>Pobierz z Google Play</span>
            </button>

            {/* Przycisk Dowiedz się więcej */}
            <Link
              to="/privacy"
              className="flex items-center justify-center px-8 py-4 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 rounded-2xl font-bold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all"
            >
              Dowiedz się więcej
            </Link>
          </div>
        </header>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            emoji="📖"
            title="Własne Przepisy"
            desc="Dodawaj swoje sekretne receptury. Masz pełną kontrolę nad składnikami i krokami przygotowania."
          />
          <FeatureCard
            emoji="🌍"
            title="Baza Społeczności"
            desc="Udostępniaj swoje dania innym użytkownikom i odkrywaj inspiracje z całego świata."
          />
          <FeatureCard
            emoji="📅"
            title="Inteligentny Kalendarz"
            desc="Planuj posiłki na cały tydzień. Śniadanie, Lunch, Obiad i wiele więcej."
          />
          <FeatureCard
            emoji="🛒"
            title="Lista Zakupów"
            desc="Jednym kliknięciem generuj listę zakupów na podstawie zaplanowanych posiłków."
          />
          <FeatureCard
            emoji="🎨"
            title="Personalizacja"
            desc="Dostosuj wygląd aplikacji do swoich preferencji – zmiana kolorów i tryb ciemny."
          />
          <FeatureCard
            emoji="🔒"
            title="Bezpieczeństwo"
            desc="Twoje dane są u nas bezpieczne. Logowanie biometryczne i pełna kontrola nad kontem."
          />
        </div>

        {/* FOOTER - TUTAJ SĄ WYMAGANE LINKI */}
        <footer className="border-t border-zinc-100 dark:border-zinc-800 pt-10 pb-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-zinc-500 text-sm">
              © 2026 Onion Meals. Twoja kuchnia, Twoje zasady.
            </div>
            <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium">
              <Link
                to="/privacy"
                className="text-zinc-600 dark:text-zinc-400 hover:text-[#ffee00]"
              >
                Polityka Prywatności
              </Link>
              <Link
                to="/terms"
                className="text-zinc-600 dark:text-zinc-400 hover:text-[#ffee00]"
              >
                Regulamin
              </Link>
              <a
                href="mailto:kuba@satkurier.pl?subject=Usuwanie konta Onion Meals"
                className="text-red-500 hover:text-red-600 font-bold"
              >
                Usuń konto i dane
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FeatureCard({
  emoji,
  title,
  desc,
}: {
  emoji: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-xl hover:shadow-amber-500/5">
      <div className="text-4xl mb-6">{emoji}</div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
        {desc}
      </p>
    </section>
  );
}
