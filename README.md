# RestaurantApp
Min allra första app som handlar om att man kan söka på restauranger
Jag utgår från att man är redan  en registrerad användare.
Första sidan möts man med en bild och inloggning som tar emot ett användarnamn och ett lösenord. 
När du loggar in navigerar den till sök sidan. Där kan du söka olika restauranger, den kan också 
föreslå en restaurang om du söker på en maträtt så som pasta, kebab, pizza. 
Finns din restaurang så visas den annars no match. 
API:et har en bred kapacitet, du kan även söka på ett ord så föreslår den restauranger åt dig.

För att kunna använda den här appen bör man skapa ett konto på yelp för att få API nyckeln för att kunna göra lyckade anrop.
Därefter får man skapa en JS fil utilites.js där man exporterar en variabel som SearchSreen implementerar och lägger in nyckeln i headern 
för fetch mot självaste yelp

Mina Komponenter: 
Det finns 4:a komponenter i paketet components.
LogIn
SearchScreen (pappa)
SearchBar (barn)
RestaurantList (barn)

App.js. (Hiarkin) 
Här finns Stack Navigation med dess installationer, komponenten LogIn,  komponenten SearchScreen 

SearchScreen.js (pappan)
Här finns: SearchBar, RestaurantList

SearchScreen består av Fetching och FlatList. 
Skickar ner props till barnet SearchBar
Funktionen submitSearch körs när man trycker på sökikonen från SearchBar.
SearchBar innehåller search ikonen och TextInput där man söker restauranger.

FlatList får in en array med alla olika restuaranger och skapar en RestaurantList komponent för att visa namn, bild etc



Komponenten LogIn.js  Är en start sida. Här skickas en props navigation argument. 
Det finns en funktion handleLogin() som kontrollerar villkoret om användarens inloggning, (namn och lösenord.) 
Lösenordet är skyddat när man knappar in det.
Om det inte stämmer dyker en Alert som talar om att det är fel skrivet. . 
Login knappen blir synlig och funktionell när inloggningen blir korrekt och den navigerar till SearchScreen med props navigation.



RestaurantList.js (Barnet) 

Komponenten RestaurantList består av restaurang bilder, namn, telefon nr, priskategori och ratings. Vi kommer åt dom genom att skicka props item från Flatlist som ligger i SearchScreen (pappan )använder props item för att hämta restaurang från FlatList 


Styling: 
Har jag valt med sobra färger, stilren genom hela appen. No match text avviker i färg för att utmärka sig. 
Input fälten har raka linjer, log in knappen har markerade runda hörn. Bilder har svaga rundade hörn för att få en mjukhet mot det raka input fälten.


