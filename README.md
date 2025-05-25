1. Introducere
Proiectul realizat este o aplicatie web care functioneaza ca o carte de oaspeti online. Am creat acest proiect pentru a invata cum se construieste un API REST folosind Node.js si Express, si cum se stocheaza datele intr-o baza de date MongoDB in cloud. Aplicatia ruleaza pe platforma Render, fiind accesibila de oriunde pe internet.
Scopul acestui proiect este sa ofere o modalitate simpla de a gestiona mesaje intr-un mediu online, demonstrand integrarea unui backend cu servicii cloud.

2. Descrierea problemei
In cadrul proiectului am incercat sa creez un mod mai usor de vizualizare al mesajelor lasate de clientii unei locatii. Desi exista multe retele de socializare, uneori este nevoie de un sistem mai simplu si personalizat, precum o carte de oaspeti virtuala, unde utilizatorii pot lasa mesaje intr-un mod organizat.
Problema pe care o rezolv acest proiect este crearea unei solutii usoare de implementat care sa permita:
•	Adaugarea de mesaje noi
•	Vizualizarea tuturor mesajelor
•	Stocarea sigura a datelor in cloud
Am folosit MongoDB Atlas pentru baza de date si Render pentru hosting, acestea reprezentand si cele doua tehnologii Cloud folosite in realizarea proiectului.

3. Descrierea API-ului
Api-ul functioneaza tot timpul, deoarece am facut deploy pe Render. Sunt doua metode de POST si GET care permit utilizatorilor sa adauge mesaje (completand numele si adaugand mesajul in POST) si, respectiv sa vizualizeze mesajele lasate de ceilalti (GET). Ambele metode sunt pe acelasi endpoint /api/entries.
In realizare API-ului am folosit urmatoarele tehnologii: Node.js, Express, Moongose si Dotenv. De asemenea am adaugat si validari pentru nume si mesaj, astfel ca numele trebuie sa aibe cel putin 2 caractere, iar mesajul 3. Am adaugat si o validare pentru campuri goale, in cazul in care utilizatorul uita completarea unuia dintre campuri, raspunsul nu se va inregistra in sistem. Ambele validari afiseaza mesaje specifice in cazul in care utliziatorul declanseaza oricare dintre ele.

4. Flux de date
Exemplu de request POST:
{
  "name": "Alex Popescu",
  "message": "Salut! Un local de nota 10. Recomand cu incredere!"
}

Exemplu de request GET: 
    {
        "_id": "683245dba5666a050c21d07f",
        "name": "Alex Popescu",
        "message": "Salut! Local de nota 10. Recomand cu incredere",
        "createdAt": "2025-05-24T22:19:07.332Z",
        "__v": 0
    }

Exemplu de request POST in care utilizatorul completeaza un nume cu mai putin de 2 caractere:
{
    "error": "Numele trebuie să aibă minim 2 caractere!"
}
Exemplu de POST in care utilizatorul uita sa completeze mesajul:
{
    "error": "Mesajul nu poate fi gol!"
}

5.Capturile de ecran sunt prezente in word-ul incarcat pe online.ase

6. Referinte
Node.js: https://nodejs.org/en/about
Express.js: https://expressjs.com/
Mongoose: https://mongoosejs.com/docs/guides.html
MongoDB Atlas Database: https://www.mongodb.com/products/platform/atlas-database
Render: https://render.com/docs/deploy-node-express-app
Postman: https://learning.postman.com/docs/introduction/overview/


Link prezentare youtube: https://youtu.be/HsoY8AKE5lE
Link Github: https://github.com/calinpetre11/proiectCloud
Link deploy pe Render: https://proiectcloud.onrender.com
https://dashboard.render.com/web/srv-d0p3qt3uibrs7388fcq0/deploys/dep-d0p3qtruibrs7388fd4g

