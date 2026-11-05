import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const etudiants = [
    {
      nomPrenom: "souha lahouar",
      email: "souhalahouar99@gmail.com",
      telephone: "+216 54427111",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "2",
      ville: "Mahdia",
      photoUrl: ""
    },
    {
      nomPrenom: "Slim Boubaker",
      email: "",
      telephone: "+216 99999999",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "2",
      ville: "Mahdia",
      photoUrl: "/photo.jpg"
    },
    {
      nomPrenom: "Sarra Trabelsi",
      email: "",
      telephone: "+216 22111222",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "2",
      ville: "Mahdia",
      photoUrl: "/photo.jpg"
    }
  ];

  return (
    <>
      <Header />
      <Navbar />

      <main>
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            nomPrenom={etudiant.nomPrenom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            photoUrl={etudiant.photoUrl}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;