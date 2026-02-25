import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import onionLogo from "../assets/Onion-MealPlanner-icon.png";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      <header className="text-center space-y-4">
        <div className="flex flex-col justify-center items-center">
          <img
            src={onionLogo}
            alt="Logo Onion Meals"
            className="w-20 h-20 object-contain shadow-amber-200/50 drop-shadow-xl"
          />
          <h1 className="text-5xl font-black text-amber-900 dark:text-amber-500 tracking-tight">
            Onion Meals
          </h1>
        </div>
        <p className="text-xl text-stone-600 dark:text-stone-700 max-w-2xl mx-auto leading-relaxed">
          Twój osobisty asystent kuchenny. Planuj, gotuj i dziel się przepisami
          – wszystko w jednym miejscu, bez płaczu (chyba że przy krojeniu
          cebuli)
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <section className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-3xl shadow-sm border border-amber-100 dark:border-amber-900/30 flex flex-col items-center text-center">
          <div className="text-3xl mb-4">📖</div>
          <h3 className="text-xl font-bold mb-2">Własne Przepisy</h3>
          <p className="text-stone-600 dark:text-stone-700 text-sm">
            Dodawaj swoje sekretne receptury. Masz pełną kontrolę nad
            składnikami i krokami przygotowania.
          </p>
        </section>

        <section className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-3xl shadow-sm border border-amber-100 dark:border-amber-900/30 flex flex-col items-center text-center">
          <div className="text-3xl mb-4">🌍</div>
          <h3 className="text-xl font-bold mb-2">Baza Społeczności</h3>
          <p className="text-stone-600 dark:text-stone-700 text-sm">
            Udostępniaj swoje dania innym użytkownikom i odkrywaj inspiracje z
            całego świata.
          </p>
        </section>

        <section className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-3xl shadow-sm border border-amber-100 dark:border-amber-900/30 flex flex-col items-center text-center">
          <div className="text-3xl mb-4">📅</div>
          <h3 className="text-xl font-bold mb-2">Inteligentny Kalendarz</h3>
          <p className="text-stone-600 dark:text-stone-700 text-sm">
            Planuj posiłki na cały tydzień.
            <span className="block mt-2 font-semibold text-amber-700 dark:text-amber-700">
              Śniadanie • Lunch • Obiad • Podwieczorek • Kolacja
            </span>
          </p>
        </section>

        <section className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-3xl shadow-sm border border-amber-100 dark:border-amber-900/30 flex flex-col items-center text-center">
          <div className="text-3xl mb-4">🛒</div>
          <h3 className="text-xl font-bold mb-2">Lista Zakupów</h3>
          <p className="text-stone-600 dark:text-stone-700 text-sm">
            Jednym kliknięciem generuj listę zakupów na podstawie zaplanowanych
            posiłków.
          </p>
        </section>

        <section className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-3xl shadow-sm border border-amber-100 dark:border-amber-900/30 flex flex-col items-center text-center lg:col-span-2 lg:max-w-2xl lg:mx-auto w-full">
          <div className="text-3xl mb-4">🎨</div>
          <h3 className="text-xl font-bold mb-2">Personalizacja</h3>
          <p className="text-stone-600 dark:text-stone-700 text-sm">
            Dostosuj wygląd aplikacji do swoich preferencji (zmiana kolorów i
            tryb ciemny).
          </p>
        </section>
      </div>
    </div>
  );
}
