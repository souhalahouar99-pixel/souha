import { useState } from "react";
import StudentCard from "./components/StudentCard.jsx";
import "./App.css";

const etudiantsInitial = [
  {
    prenom: "slim",
    nom: "Boubaker",
    email: "slimboubaker@gmail.com",
    telephone: "+216 99 999 999",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
  },
  {
    prenom: "sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sousse",
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 27 567 890",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
  },
];

function App() {
  const [etudiants, setEtudiants] = useState(etudiantsInitial);
  const [filtre, setFiltre] = useState("");

  // Ajouter un étudiant
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      prenom: "souha",
      nom: "lahouar",
      email: "souhalahouar99@gmail.com",
      telephone: "+216 54427111",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI B2",
      ville: "Mahdia",
    };

    setEtudiants((anciensEtudiants) => [
      ...anciensEtudiants,
      nouvelEtudiant,
    ]);
  }

  // Supprimer un étudiant
  function supprimerEtudiant(email) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter(
        (etudiant) => etudiant.email !== email
      )
    );
  }

  // Modifier le prénom d'un étudiant
  function modifierEtudiant(email) {
    const nouveauPrenom = prompt("Nouveau prénom :");

    if (nouveauPrenom && nouveauPrenom.trim() !== "") {
      setEtudiants((anciensEtudiants) =>
        anciensEtudiants.map((etudiant) =>
          etudiant.email === email
            ? { ...etudiant, prenom: nouveauPrenom.trim() }
            : etudiant
        )
      );
    }
  }

  // Filtrer par filière
  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.filiere
      .toLowerCase()
      .includes(filtre.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Liste des étudiants</h1>

      <button onClick={ajouterEtudiant}>
        Ajouter un étudiant
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Filtrer par filière"
        value={filtre}
        onChange={(e) => setFiltre(e.target.value)}
      />

      <br />
      <br />

      <div className="students-list">
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            onDelete={() => supprimerEtudiant(etudiant.email)}
            onEdit={() => modifierEtudiant(etudiant.email)}
          />
        ))}
      </div>

      {etudiantsFiltres.length === 0 && (
        <p>Aucun étudiant trouvé.</p>
      )}

    </div>
  );
}

export default App;