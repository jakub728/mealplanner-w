import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: RouteComponent,
});

function RouteComponent() {
  const lastUpdate = "13 lutego 2026 r.";

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 text-gray-800 leading-relaxed">
        {/* Nagłówek */}
        <header className="mb-8 border-b-4 border-[#ffee00] pb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Polityka Prywatności Onion Meals
          </h1>
          <p className="text-sm text-gray-500 mt-2 italic">
            Ostatnia aktualizacja: {lastUpdate}
          </p>
        </header>

        <section className="space-y-6 text-gray-700">
          <p>
            W{" "}
            <strong className="text-gray-900 font-semibold">Onion Meals</strong>{" "}
            szanujemy Twoją prywatność. Ta polityka wyjaśnia, jak przetwarzamy
            dane w naszej aplikacji do zarządzania przepisami.
          </p>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              1. Jakie dane zbieramy?
            </h2>
            <p className="mb-3">
              Zbieramy tylko informacje niezbędne do działania Twojego profilu
              kulinarnego:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-gray-900">Adres e-mail:</strong> Służy
                wyłącznie do logowania i odzyskiwania hasła.
              </li>
              <li>
                <strong className="text-gray-900">Treści użytkownika:</strong>{" "}
                Przepisy, składniki oraz zdjęcia dań, które dodajesz do
                aplikacji.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              2. Przechowywanie danych
            </h2>
            <p>
              Twoje dane są bezpiecznie przechowywane na naszych serwerach. Nie
              sprzedajemy ani nie udostępniamy Twoich danych osobowych firmom
              reklamowym.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              3. Twoje Prawa (RODO)
            </h2>
            <p>
              Masz prawo do wglądu w swoje dane, ich poprawiania oraz
              całkowitego usunięcia. Możesz usunąć swoje konto wraz ze
              wszystkimi przepisami bezpośrednio w ustawieniach aplikacji Onion
              Meals.
            </p>
          </div>

          {/* Kontakt */}
          <footer className="mt-10 bg-gray-100 p-6 rounded-xl border-l-4 border-gray-300">
            <h2 className="text-lg font-bold text-gray-800 mb-2 underline decoration-[#ffee00] decoration-2 underline-offset-4">
              4. Kontakt
            </h2>
            <p className="font-medium">
              Pytania dotyczące prywatności? Skontaktuj się z nami:
            </p>
            <a
              href="mailto:kuba@satkurier.pl"
              className="text-blue-600 hover:text-blue-800 transition-colors break-all underline decoration-blue-200"
            >
              kuba@satkurier.pl
            </a>
          </footer>
        </section>
      </div>
    </div>
  );
}
