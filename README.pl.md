# IoT Event Hub

[**Zobacz aplikację w akcji tutaj**](https://iot-event-hub.vercel.app/)

**English version**: See [README.md](README.md)

## Opis projektu

IoT Event Hub to aplikacja webowa stworzona w Angular, która umożliwia zarządzanie i monitorowanie zdarzeń IoT. Dane z urządzeń są przedstawiane w czytelnej formie, a użytkownik może tworzyć, edytować oraz zarządzać zdarzeniami poprzez dynamiczne formularze. Projekt wykorzystuje Angular Material do tworzenia intuicyjnych i responsywnych interfejsów użytkownika.

---

## Funkcjonalności

- **Tworzenie zdarzeń**: Użytkownik może wprowadzać nowe zdarzenia IoT za pomocą formularza.
- **Lista zdarzeń**: Wyświetlanie wszystkich zdarzeń z możliwością ich edycji.
- **Szczegóły zdarzenia**: Przeglądanie szczegółowych informacji o każdym zdarzeniu.
- **Obsługa dynamicznych danych**: Dane przetwarzane za pomocą serwisów Angular (`EventService`).
- **Responsywność**: Dzięki Angular Material, aplikacja dostosowuje się do różnych urządzeń.

---

## Technologie i biblioteki

- **Angular** - Framework do budowy aplikacji webowych.
- **RxJS** - Zarządzanie operacjami asynchronicznymi.
- **TypeScript** - Język programowania będący nadzbiorem JavaScript.
- **Angular Material** - Zestaw komponentów Material Design dla nowoczesnego UI.
- **SCSS** - Preprocesor CSS dla zaawansowanego zarządzania stylami.

---

## Struktura projektu

```plaintext
src/
├── app/
│   ├── event-form/
│   │   ├── event-form.component.html          // Formularz tworzenia/edycji zdarzenia
│   │   ├── event-form.component.scss          // Style dla formularza
│   │   └── event-form.component.ts            // Logika formularza
│   ├── footer/
│   │   ├── footer.component.html              // HTML dla stopki
│   │   ├── footer.component.scss              // Style dla stopki
│   │   └── footer.component.ts                // Logika stopki
│   ├── header/
│   │   ├── header.component.html              // HTML dla nagłówka
│   │   ├── header.component.scss              // Style dla nagłówka
│   │   └── header.component.ts                // Logika nagłówka
│   ├── models/
│   │   └── event.models.ts                    // Model danych dla zdarzeń
│   ├── services/
│   │   ├── api.service.ts                     // Serwis do komunikacji z backendem
│   │   ├── data-generator.service.ts          // Serwis do generowania testowych danych
│   │   └── event.service.ts                   // Serwis do zarządzania zdarzeniami
│   ├── app.component.html                     // Główny HTML aplikacji
│   ├── app.component.scss                     // Główne style aplikacji
│   ├── app.component.ts                       // Główna logika aplikacji
│   ├── app.config.ts                          // Konfiguracja aplikacji
│   ├── app.routes.ts                          // Routing aplikacji
│   ├── index.html                             // Główny punkt wejścia HTML
│   ├── main.ts                                // Główny punkt wejścia TypeScript
│   └── styles.scss                            // Globalne style
└── public/                                    // Zasoby publiczne (np. obrazy, czcionki)
```

---

## Instalacja i uruchomienie

1. Klonowanie repozytorium

```bash
git clone https://github.com/Anatolii-Stoliarenko/iot-event-hub.git
cd iot-event-hub
```

2. Instalacja zależności

```bash
npm install
```

3. Uruchomienie aplikacji

```bash
ng serve
```

Aplikacja będzie dostępna pod adresem http://localhost:4200/.

---

## Sposób działania

1. Użytkownik wprowadza nowe zdarzenia IoT za pomocą formularza.

2. Wszystkie zdarzenia są wyświetlane w tabeli z możliwością ich edycji.

3. Dynamiczne dane są generowane za pomocą serwisów Angular.

---

## Dalszy rozwój

1. Integracja API: Połączenie z rzeczywistymi urządzeniami IoT.

2. Testy jednostkowe: Dodanie testów dla komponentów i serwisów.

3. Zaawansowana walidacja: Wdrożenie bardziej kompleksowej walidacji danych.

---

## Licencja

Plik LICENSE zawiera informacje dotyczące licencji projektu.

---

## Kontakt

Jeśli masz jakiekolwiek pytania dotyczące projektu lub jego konfiguracji, skontaktuj się poprzez:

1. **Email**: [anatolii.stoliarenko@gmail.com](mailto:anatolii.stoliarenko@gmail.com)
2. **Strona**: [https://anatolii-stoliarenko.webflow.io/](https://anatolii-stoliarenko.webflow.io/)
