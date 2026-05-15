import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: RouteComponent,
});

function RouteComponent() {
  const lastUpdate = "15 maja 2026 r.";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-10 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 text-gray-800 dark:text-zinc-300 leading-relaxed transition-colors">
        {/* Nagłówek */}
        <header className="mb-10 border-b-4 border-[#ffee00] pb-6 text-gray-900 dark:text-white">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Regulamin Serwisu Onion Meals
          </h1>
          <p className="text-sm text-gray-500 dark:text-zinc-500 mt-3 font-medium">
            Ostatnia aktualizacja: {lastUpdate}
          </p>
        </header>

        <section className="space-y-8 text-gray-700 dark:text-zinc-400">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
              1. Postanowienia ogólne
            </h2>
            <p>
              Niniejszy regulamin określa zasady korzystania z aplikacji
              mobilnej oraz serwisu Onion Meals. Rejestracja w aplikacji oznacza
              akceptację poniższych warunków.
            </p>
          </div>

          {/* KLUCZOWA SEKCJA: PRAWA AUTORSKIE - Dopasowana do Dark Mode */}
          <div className="bg-yellow-50 dark:bg-amber-900/10 p-6 rounded-xl border-l-4 border-[#ffee00]">
            <h2 className="text-xl font-bold text-gray-900 dark:text-amber-500 mb-4">
              2. Własność intelektualna i treści użytkowników
            </h2>
            <p className="mb-4">
              Użytkownik, publikując treści (przepisy, zdjęcia, opisy),
              oświadcza, że:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Posiada pełne autorskie prawa majątkowe do tych treści.</li>
              <li>
                Treści nie naruszają praw osób trzecich (w tym zakaz kopiowania
                zdjęć z blogów, książek i innych aplikacji).
              </li>
              <li>
                Wszelka odpowiedzialność prawna za naruszenie praw autorskich
                spoczywa wyłącznie na{" "}
                <strong className="text-gray-900 dark:text-white">
                  Użytkowniku
                </strong>
                .
              </li>
            </ul>
          </div>

          {/* TWOJA LOGIKA ANONIMIZACJI */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
              3. Licencja i usuwanie konta
            </h2>
            <p className="mb-4">
              Publikując przepis o statusie{" "}
              <strong className="text-gray-900 dark:text-zinc-200">
                "Publiczny"
              </strong>
              , Użytkownik udziela Onion Meals nieodpłatnej, nieograniczonej
              czasowo licencji na wyświetlanie i przechowywanie tych treści.
            </p>
            <p className="font-semibold text-gray-900 dark:text-zinc-200 italic border-l-2 border-zinc-200 dark:border-zinc-700 pl-4">
              W przypadku usunięcia konta przez Użytkownika, opublikowane przez
              niego przepisy publiczne nie są usuwane z bazy. Zostają one
              zanonimizowane i przypisane do konta systemowego "Onion Meals".
            </p>
          </div>

          {/* PROCEDURA ZGŁASZANIA NARUSZEŃ */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
              4. Zgłaszanie naruszeń (DMCA / Take-down)
            </h2>
            <p>
              Jeśli zauważysz w serwisie treści naruszające Twoje prawa
              autorskie, prosimy o niezwłoczny kontakt pod adresem:
              <a
                href="mailto:kuba@satkurier.pl"
                className="block mt-2 text-blue-600 dark:text-blue-400 font-bold hover:underline"
              >
                kuba@satkurier.pl
              </a>
              Zobowiązujemy się do usunięcia spornych treści w ciągu 48h od
              zweryfikowania zgłoszenia.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
              5. Zakupy i mikrotransakcje
            </h2>
            <p>
              Zakupione ikony profilowe oraz inne cyfrowe dobra są przypisane do
              konta użytkownika. Z uwagi na charakter cyfrowy produktów, zwrot
              kosztów nie jest możliwy, chyba że prawo stanowi inaczej.
            </p>
          </div>

          <footer className="mt-12 text-center border-t border-gray-100 dark:border-zinc-800 pt-8">
            <p className="text-sm text-gray-400 dark:text-zinc-600">
              © 2026 Onion Meals - Korzystanie z aplikacji oznacza zgodę na
              powyższe warunki.
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
}
