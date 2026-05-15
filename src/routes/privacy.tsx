import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: RouteComponent,
});

function RouteComponent() {
  const lastUpdate = "15 maja 2026 r.";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-10 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      {/* Karta z treścią */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 text-gray-800 dark:text-zinc-300 leading-relaxed transition-colors">
        {/* Nagłówek */}
        <header className="mb-10 border-b-4 border-[#ffee00] pb-6">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Polityka Prywatności Aplikacji Onion Meals
          </h1>
          <p className="text-sm text-gray-500 dark:text-zinc-500 mt-3 font-medium">
            Ostatnia aktualizacja: {lastUpdate}
          </p>
        </header>

        <section className="space-y-8 text-gray-700 dark:text-zinc-400">
          <p className="text-lg leading-relaxed">
            W{" "}
            <strong className="text-gray-900 dark:text-white font-semibold">
              Onion Meals
            </strong>{" "}
            traktujemy ochronę Twoich danych priorytetowo. Niniejszy dokument
            opisuje, w jaki sposób zbieramy, wykorzystujemy i chronimy Twoje
            informacje...
          </p>

          <hr className="border-gray-100 dark:border-zinc-800" />

          {/* Punkt 1 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-4 flex items-center">
              <span className="bg-[#ffee00] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm flex-shrink-0">
                1
              </span>
              Gromadzenie i wykorzystywanie danych
            </h2>
            <div className="space-y-4 ml-2">
              <p>
                Przetwarzamy dane niezbędne do świadczenia usług kulinarnych:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <span className="text-[#ffee00] mr-2">●</span>
                  <span>
                    <strong className="text-gray-900 dark:text-zinc-200">
                      Dane konta:
                    </strong>{" "}
                    Adres e-mail oraz nazwa...
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ffee00] mr-2">●</span>
                  <span>
                    <strong className="text-gray-900 dark:text-zinc-200">
                      Treści użytkownika:
                    </strong>{" "}
                    Przepisy, zdjęcia potraw...
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Punkt 3 - RODO (Kafelki) */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-4 flex items-center">
              <span className="bg-[#ffee00] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm flex-shrink-0">
                3
              </span>
              Prawa Użytkownika (RODO)
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-2">
              <li className="bg-gray-50 dark:bg-zinc-800/50 p-3 rounded-lg border border-gray-100 dark:border-zinc-800 dark:text-zinc-200">
                ✓ Dostępu do swoich danych
              </li>
              <li className="bg-gray-50 dark:bg-zinc-800/50 p-3 rounded-lg border border-gray-100 dark:border-zinc-800 dark:text-zinc-200">
                ✓ Sprostowania informacji
              </li>
              <li className="bg-gray-50 dark:bg-zinc-800/50 p-3 rounded-lg border border-gray-100 dark:border-zinc-800 dark:text-zinc-200">
                ✓ Żądania usunięcia konta
              </li>
              <li className="bg-gray-50 dark:bg-zinc-800/50 p-3 rounded-lg border border-gray-100 dark:border-zinc-800 dark:text-zinc-200">
                ✓ Sprzeciwu wobec przetwarzania
              </li>
            </ul>
          </div>

          {/* Kontakt / Stopka sekcji */}
          <footer className="mt-12 bg-[#fafafa] dark:bg-zinc-800/40 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 transition-colors">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 underline decoration-[#ffee00] decoration-4 underline-offset-8">
              Masz pytania?
            </h2>
            <p className="mb-4">Napisz do nas:</p>
            <a
              href="mailto:kuba@satkurier.pl"
              className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all break-all"
            >
              kuba@satkurier.pl
            </a>
            <p className="text-xs text-gray-400 dark:text-zinc-600 mt-6 uppercase tracking-widest">
              © 2026 Onion Meals - Wszystkie prawa zastrzeżone
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
}
